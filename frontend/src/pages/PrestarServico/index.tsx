import { Header } from '../../components/Header'
import { Calendar } from '../../components/calendar'
import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { format } from 'date-fns'
import ReactSlider from 'react-slider'
import { Button } from '../../components/button'
import LogoPath from '../../assets/images/LogoArtServicos.svg'
import { api } from '../../api'
import { AcessVerification, userData } from '../../components/AcessVerification'
import {
  PageWrapper,
  WrenchIcon,
  ContentWrapper,
  CategoryDropdownMenu,
  SubCategoryDropdownMenu,
  PriceForm,
} from './styles'

export function PrestarServico() {
  const navigate = useNavigate()

  interface FormData {
    category: string
    subCategory: string
    dates: {
      date: string
      checkbox_morning: boolean
      checkbox_afternoon: boolean
    }[]
  }

  interface OfferData {
    momentoCriacao: string
    precoFixo?: number | null
    precoMin?: number | null
    precoMax?: number | null
    subcategoriaId: string
    usuarioId: string
    diasServico: {
      data: string
      periodo: string
    }[]
  }

  const [token, setToken] = useState<string | null>()
  const [user, setUser] = useState<userData>()
  const [step, setStep] = useState('calendar')
  const [selectedDates, setSelectedDates] = useState<Date[]>([])
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false)
  const [isSubCategoryDropdownOpen, setIsSubCategoryDropdownOpen] =
    useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [data, setData] = useState<FormData | null>(null)
  const [priceType, setPriceType] = useState<'fixed' | 'range'>('fixed')
  const [price, setPrice] = useState<[number, number]>([50, 200])
  const [priceFixed, setPriceFixed] = useState<number>(0)
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(
    null,
  )

  useEffect(() => {
    async function fetchData() {
      const acess = await AcessVerification()
      setUser(acess.user)
      setToken(acess.token)

      if (acess.logged === false) {
        navigate('/acessonegado')
      }
    }
    fetchData()
  }, [])

  // Ref para o formulário
  const formRef = useRef<HTMLFormElement | null>(null)
  let content: JSX.Element

  const handleSelectedDatesChange = (dates: Date[]) => {
    dates = dates.sort((a, b) => a.getTime() - b.getTime())
    setSelectedDates(dates)
  }

  const handleGoBackHome = () => {
    navigate('/')
  }

  const handleCategoryClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setIsCategoryDropdownOpen(!isCategoryDropdownOpen)
  }

  const handleSubCategoryClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault()

    if (selectedCategory !== null) {
      setIsSubCategoryDropdownOpen(!isSubCategoryDropdownOpen)
    }
  }

  const handleCategorySelect = (category: string) => {
    if (category !== selectedCategory) {
      setSelectedSubCategory(null)
      setSelectedCategory(category)
    }
    setIsCategoryDropdownOpen(false)
  }

  const handleSubCategorySelect = (subCategory: string) => {
    setSelectedSubCategory(subCategory)
    setIsSubCategoryDropdownOpen(false)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (formRef.current) {
      // Captura dos checkboxes
      const checkboxes = Array.from(
        formRef.current.querySelectorAll('input[type="checkbox"]'),
      ) as HTMLInputElement[]
      const checkboxData = checkboxes.reduce(
        (acc, checkbox) => {
          acc[checkbox.name] = checkbox.checked
          return acc
        },
        {} as Record<string, boolean>,
      )

      // Validação dos dados
      const isCategoryValid = selectedCategory !== null
      const isSubCategoryValid = selectedSubCategory !== null
      const areDatesValid = selectedDates.length > 0
      const areCheckboxesValid = selectedDates.every((date) => {
        const morning = checkboxData[format(date, 'dd/MM/yyyy') + '_morning']
        const afternoon =
          checkboxData[format(date, 'dd/MM/yyyy') + '_afternoon']
        return morning || afternoon
      })

      if (
        isCategoryValid &&
        isSubCategoryValid &&
        areDatesValid &&
        areCheckboxesValid
      ) {
        setStep('price')
        const newdata: FormData = {
          category: selectedCategory,
          subCategory: selectedSubCategory,
          dates: selectedDates.map((date) => ({
            date: format(date, 'dd/MM'),
            checkbox_morning:
              checkboxData[format(date, 'dd/MM/yyyy') + '_morning'],
            checkbox_afternoon:
              checkboxData[format(date, 'dd/MM/yyyy') + '_afternoon'],
          })),
        }
        setData(newdata)
      } else {
        if (!isCategoryValid) alert('Categoria não selecionada.')
        else if (!isSubCategoryValid) alert('Subcategoria não selecionada.')
        else if (!areDatesValid) alert('Nenhuma data selecionada.')
        else if (!areCheckboxesValid)
          alert('Pelo menos uma opção deve estar marcada para cada data.')
        else alert('Erro inesperado.')
      }
    }
  }

  function handlePriceChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    const intValue = parseInt(value)
    if (name === 'min') {
      intValue < 0 ? setPrice([0, price[1]]) : setPrice([intValue, price[1]])
    } else {
      intValue > 400
        ? setPrice([price[0], 400])
        : setPrice([price[0], intValue])
    }
  }

  function handlePriceTypeChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    if (value === 'fixed') {
      setPriceType('fixed')
    } else {
      setPriceType('range')
      setPriceFixed(0)
    }
  }

  const formatDate = (dateString: string): string => {
    // Assumindo que dateString está no formato "DD/MM"
    const [day, month] = dateString.split('/').map(Number)
    const year = new Date().getFullYear() // Obter o ano atual

    // Criar um objeto Date com o ano atual
    const date = new Date(year, month - 1, day)

    // Obter a data no formato ISO 8601 completo
    return date.toISOString() // "YYYY-MM-DDTHH:mm:ss.sssZ"
  }

  function handleCreateOffer(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (data === null) {
      alert('Erro inesperado.')
      return
    }

    if (priceType === 'fixed' && priceFixed === 0) {
      alert('O preço fixo não pode ser 0')
      return
    }

    const offer: OfferData = {
      momentoCriacao: new Date().toISOString(),
      precoFixo: priceType === 'fixed' ? priceFixed : null,
      precoMin: priceType === 'range' ? price[0] : null,
      precoMax: priceType === 'range' ? price[1] : null,
      subcategoriaId: data.subCategory,
      usuarioId: user.id,
      diasServico: data.dates.map((date) => ({
        data: formatDate(date.date),
        periodo: date.checkbox_morning
          ? date.checkbox_afternoon
            ? 'MANHA E TARDE'
            : 'MANHA'
          : 'TARDE',
      })),
    }

    api
      .get('/subcategory/name', {
        headers: {
          Authorization: `Bearer ${token}`,
        }, // Corrected template string usage
        params: { query: offer.subcategoriaId }, // Use params to send query parameters
      })
      .then((response1) => {
        offer.subcategoriaId = response1.data.id
        api
          .post('/services', offer, {
            headers: {
              'Content-Type': 'application/json', // Ensure JSON content type
              Authorization: `Bearer ${token}`, // Pass the token if needed
            },
          })
          .then(() => {
            navigate('/')
          })
          .catch((error) => {
            console.log(error)
            alert('Erro ao criar a oferta.')
          })
      })
      .catch((error) => {
        console.log(error)
        alert('Erro ao criar a oferta.')
      })
  }

  function handleGoBack() {
    setData(null)
    setIsCategoryDropdownOpen(false)
    setIsSubCategoryDropdownOpen(false)
    setStep('calendar')
  }

  if (step === 'calendar') {
    content = (
      <>
        <h1>
          Oferecendo um serviço <WrenchIcon />{' '}
        </h1>
        <ContentWrapper ref={formRef} onSubmit={handleSubmit}>
          <div className="selections">
            <div className="types">
              <p>Campo Obrigatorio*</p>
              <button className="categoryButton" onClick={handleCategoryClick}>
                {selectedCategory || 'Selecione uma categoria'}
              </button>
              {isCategoryDropdownOpen && (
                <CategoryDropdownMenu>
                  <button onClick={() => handleCategorySelect('Manutenção')}>
                    Manutenção
                  </button>
                  <button onClick={() => handleCategorySelect('Limpeza')}>
                    Limpeza
                  </button>
                </CategoryDropdownMenu>
              )}
              <p>Campo Obrigatorio*</p>
              <button
                className="subCategoryButton"
                onClick={handleSubCategoryClick}
              >
                {selectedSubCategory || 'Selecione uma subcategoria'}
              </button>
              {isSubCategoryDropdownOpen && (
                <SubCategoryDropdownMenu>
                  {selectedCategory === 'Manutenção' ? (
                    <>
                      <button
                        onClick={() => handleSubCategorySelect('ELÉTRICA')}
                      >
                        Elétrica
                      </button>
                      <button
                        onClick={() => handleSubCategorySelect('HIDRÁULICA')}
                      >
                        Hidráulica
                      </button>
                      <button
                        onClick={() => handleSubCategorySelect('INSTALAÇÕES')}
                      >
                        Instalações
                      </button>
                      <button
                        onClick={() => handleSubCategorySelect('PINTURA')}
                      >
                        Pintura
                      </button>
                      <button
                        onClick={() =>
                          handleSubCategorySelect('PEQUENOS REPAROS')
                        }
                      >
                        Pequenos reparos
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleSubCategorySelect('DE VIDROS')}
                      >
                        Faxina de vidros
                      </button>
                      <button
                        onClick={() => handleSubCategorySelect('DE JARDIM')}
                      >
                        Faxina de jardim
                      </button>
                      <button
                        onClick={() => handleSubCategorySelect('DE PISCINA')}
                      >
                        Faxina de piscina
                      </button>
                    </>
                  )}
                </SubCategoryDropdownMenu>
              )}
            </div>
            <div className="dates">
              {selectedDates.map((date) => (
                <div
                  className={
                    'date ' +
                    (selectedDates.length > 4 ? 'scroll' : 'notScroll')
                  }
                  key={date.getTime()}
                >
                  <p>{format(date, 'dd/MM')}</p>
                  <div className="inputs">
                    <input
                      type="checkbox"
                      name={format(date, 'dd/MM/yyyy') + '_morning'}
                    />
                    <label htmlFor="morning">Manhã</label>
                    <input
                      type="checkbox"
                      name={format(date, 'dd/MM/yyyy') + '_afternoon'}
                    />
                    <label htmlFor="afternoon">Tarde</label>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="calendar">
            <p>Escolha o dia e horário para prestar este serviço</p>
            <Calendar onSelectedDatesChange={handleSelectedDatesChange} />
          </div>
          <div className="navButtons">
            <Button
              variant="primary"
              text="Voltar"
              onClick={handleGoBackHome}
            />
            <Button variant="primary" text="Avançar" type="submit" />
          </div>
        </ContentWrapper>
      </>
    )
  } else {
    content = (
      <>
        <div className="Title">
          <h1>
            Finalizando sua oferta <WrenchIcon />
          </h1>
          <p>
            {' '}
            {data === null ? 'Categoria não identificada' : data.subCategory}
          </p>
        </div>
        <p className="daysSelected">Dias selecionados:</p>
        <div className="showDates">
          {data?.dates.map((date) => (
            <div key={date.date} className="showDate">
              <p>
                {date.date + ' - '}
                {date.checkbox_morning ? 'Manhã' : ''}
                {date.checkbox_morning && date.checkbox_afternoon ? ' e ' : ''}
                {date.checkbox_afternoon ? 'Tarde' : ''}
              </p>
            </div>
          ))}
        </div>
        <h2>Agora, defina o preço do seu serviço $</h2>

        <PriceForm ref={formRef} onSubmit={handleCreateOffer}>
          <div className="fixed">
            <input
              type="radio"
              name="priceType"
              value={'fixed'}
              {...(priceType === 'fixed' ? { checked: true } : {})}
              onChange={handlePriceTypeChange}
            />
            <label htmlFor="priceType">Preço Fixo</label>
            <input
              type="number"
              name="fixedValue"
              placeholder="Digite o preço fixo."
              value={priceFixed}
              onChange={(event) => setPriceFixed(parseInt(event.target.value))}
            />
          </div>

          <div className="range">
            <input
              type="radio"
              name="priceType"
              value={'range'}
              {...(priceType === 'range' ? { checked: true } : {})}
              onChange={handlePriceTypeChange}
            />
            <label htmlFor="priceType">Definir um intervalo</label>
            <div className="slider">
              <ReactSlider
                className="price-slider"
                thumbClassName="sliderThumb"
                trackClassName="sliderTrack"
                defaultValue={[50, 200]}
                min={0}
                max={400}
                pearling
                minDistance={5}
                value={price}
                onChange={(value) => setPrice(value)}
              />
              <div className="sliderInputDiv">
                <input
                  type="number"
                  name="min"
                  className="sliderInput"
                  value={price[0]}
                  onChange={handlePriceChange}
                />
                -
                <input
                  type="number"
                  name="max"
                  className="sliderInput"
                  value={price[1]}
                  onChange={handlePriceChange}
                />
              </div>
            </div>
          </div>
          <div className="navButtons">
            <Button variant="primary" text="Voltar" onClick={handleGoBack} />
            <Button variant="primary" text="Criar Oferta" type="submit" />
          </div>
        </PriceForm>
      </>
    )
  }

  return (
    <>
      <Header logged={true} />
      <PageWrapper>
        {content}
        <img src={LogoPath} alt="" className="logoArt" />
      </PageWrapper>
    </>
  )
}
