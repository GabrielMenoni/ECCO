import { Header } from '../../../components/Header'
import { Calendar } from '../../../components/calendar'
import { useState, useRef, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { format, parse } from 'date-fns'
import { CardProps } from '../../../components/availableCard'
import { Button } from '../../../components/button'
import LogoPath from '../../../assets/images/LogoArtServicos.svg'
import { api } from '../../../api'
import {
  AcessVerification,
  userData,
} from '../../../components/AcessVerification'
import {
  PageWrapper,
  ContentWrapper,
  PageWrapper2,
  PriceHolder,
} from './styles'
import { EnderecoPreco } from '../EnderecoPreco'
import { es } from 'date-fns/locale'

export function Calendario() {
  const navigate = useNavigate()

  interface FormData {
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

  const location = useLocation()
  const [servico, setServico] = useState<CardProps>()
  const [token, setToken] = useState<string | null>()
  const [user, setUser] = useState<userData>()
  const [step, setStep] = useState('calendar')
  const [selectedDates, setSelectedDates] = useState<Date[]>([])
  const [data, setData] = useState<FormData | null>(null)
  const [minPrice, setMinPrice] = useState<number>()
  const [maxPrice, setMaxPrice] = useState<number>()
  const [priceFixed, setPriceFixed] = useState<number>(0)
  const [selectedtime, setSelectedTime] = useState<string>()
  const [cep, setCep] = useState<string>()
  const [bairro, setBairro] = useState<string>()
  const [cidade, setCidade] = useState<string>()
  const [rua, setRua] = useState<string>()
  const [numero, setNumero] = useState<string>()

  useEffect(() => {
    async function fetchData() {
      const acess = await AcessVerification()
      setUser(acess.user)
      setToken(acess.token)

      const getServico = location.state.servico
      getServico.diasDisponiveis = [
        {
          data: new Date().toISOString(),
          periodo: 'MANHA E TARDE',
        },
        {
          data: new Date(
            new Date().setDate(new Date().getDate() + 1),
          ).toISOString(),
          periodo: 'MANHA',
        },
      ]
      setServico(getServico)
    }
    fetchData()
  }, [location.state.servico])

  useEffect(() => {
    if (servico) {
      setSelectedDates(servico.diasDisponiveis.map((dia) => new Date(dia.data)))
    }
  }, [servico])

  console.log('servico - ', servico)

  const formRef = useRef<HTMLFormElement | null>(null)

  const handleGoBackHome = () => {
    navigate('/pesquisaavancada')
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (formRef.current) {
      const selectedRadio = formRef.current.querySelector(
        'input[type="radio"]:checked',
      ) as HTMLInputElement | null

      if (selectedRadio) {
        const selectedValue = selectedRadio.value
        const selectedDate = selectedRadio.getAttribute('data-date')

        setStep('price')
        const newdata: FormData = {
          dates: selectedDates.map((date) => ({
            date: format(date, 'dd/MM'),
            checkbox_morning:
              selectedValue === 'morning' &&
              selectedDate === format(date, 'dd/MM/yyyy'),
            checkbox_afternoon:
              selectedValue === 'afternoon' &&
              selectedDate === format(date, 'dd/MM/yyyy'),
          })),
        }
        setData(newdata)
      } else {
        alert(
          'Você deve selecionar um horário (manhã ou tarde) para um dos dias disponíveis.',
        )
      }
    }
  }

  const formatDate = (dateString: string): string => {
    const [day, month] = dateString.split('/').map(Number)
    const year = new Date().getFullYear()
    const date = new Date(year, month - 1, day)
    return date.toISOString()
  }

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value)
    if (value < 0) {
      e.target.value = '0'
    }

    if (e.target.classList.contains('singlePrice')) {
      setPriceFixed(value)
    } else {
      if (e.target.classList.contains('PriceRange')) {
        if (e.target.placeholder === 'Min') {
          setMinPrice(value)
        } else {
          setMaxPrice(value)
        }
      }
    }
  }

  function handleCreateOffer(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const [time, date] = selectedtime!.split('-')

    const formatedDate = parse(date, 'dd/MM/yyyy', new Date())

    /*     status: 'CRIADO'
notaAvaliacaoParaCliente: 0
comentarioAvaliacaoParaCliente: ' '
notaAvaliacaoParaPrestador: 0
comentarioAvaliacaoParaPrestador: ' '
dataSolicitacao:
comentario: ' '
 cep: z.string(),                               
 estado:                              
 cidade:                         
 bairro:                    
 rua:                              
 numero:                            
horarioInicio:
motivoRejeicao: ' '
horarioFim:
servicoId:
usuarioId: */

    const infos = {
      status: 'CRIADO',
      notaAvaliacaoParaCliente: 0,
      comentarioAvaliacaoParaCliente: ' ',
      notaAvaliacaoParaPrestador: 0,
      comentarioAvaliacaoParaPrestador: ' ',
      dataSolicitacao: formatedDate.toISOString(),
      comentario: ' ',
      cep,
      estado: ' ',
      cidade,
      bairro,
      rua,
      numero: parseInt(numero!),
      horarioInicio: ' ',
      motivoRejeicao: ' ',
      horarioFim: ' ',
      servicoId: servico!.id,
      usuarioId: user!.id,
    }

    api
      .post('/reserves', JSON.stringify(infos), {
        headers: { 'Content-Type': 'application/json' },
      })
      .then(() => {
        navigate('/')
      })
      .catch((error) => {
        console.log(error)
        alert('Erro ao criar a oferta.')
      })
  }

  function handleChangeState() {
    setStep('calendar')
  }

  return (
    <>
      {step === 'calendar' ? (
        <>
          <Header logged={true} />
          <PageWrapper>
            <ContentWrapper ref={formRef} onSubmit={handleSubmit}>
              <div className="calendar">
                <p>Escolha o horário para contratar o serviço</p>
                <Calendar
                  onSelectedDatesChange={(dates: Date[]) => { }}
                  disabledDates={selectedDates}
                />
              </div>

              <div className="selections">
                <h2>{servico ? servico.servico : ''}</h2>
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
                          type="radio"
                          name="selectedTime"
                          value={'morning-' + format(date, 'dd/MM/yyyy')}
                          data-date={format(date, 'dd/MM/yyyy')}
                          onChange={(e) => setSelectedTime(e.target.value)}
                        />
                        <label htmlFor="morning">Manhã</label>
                        <input
                          type="radio"
                          name="selectedTime"
                          value={'afternoon-' + format(date, 'dd/MM/yyyy')}
                          data-date={format(date, 'dd/MM/yyyy')}
                          onChange={(e) => setSelectedTime(e.target.value)}
                        />
                        <label htmlFor="afternoon">Tarde</label>
                      </div>
                    </div>
                  ))}
                </div>
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
            <img src={LogoPath} alt="" className="logoArt" />
          </PageWrapper>
        </>
      ) : (
        <>
          <Header logged={true} />
          <PageWrapper2>
            <form onSubmit={handleCreateOffer}>
              <div className="titleWrapper">
                <h1>Digite o seu endereço </h1>
              </div>
              <div className="fullAdress">
                <h3>O endereço deve ser completo e sem complemento</h3>
                <div className="inputsHolder">
                  <div>
                    <input
                      type="text"
                      placeholder="Cep"
                      className="cepInput"
                      onChange={(e) => setCep(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Bairro"
                      className="bairroInput"
                      onChange={(e) => setBairro(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Cidade"
                      className="cidadeInput"
                      onChange={(e) => setCidade(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Rua"
                      className="ruaInput"
                      onChange={(e) => setRua(e.target.value)}
                    />
                    <input
                      type="number"
                      placeholder="Número"
                      className="numInput"
                      onChange={(e) => setNumero(e.target.value)}
                    />
                  </div>
                </div>
                <div className="priceTag">
                  <h1>{priceFixed ? 'Valor Fixo:' : 'Faixa de preço:'}</h1>
                  <div className="priceHolder">
                    {priceFixed ? (
                      <PriceHolder>
                        <input
                          className="singlePrice"
                          type="number"
                          placeholder="Preço"
                          onChange={handlePriceChange}
                        />
                      </PriceHolder>
                    ) : (
                      <>
                        <PriceHolder>
                          <input
                            className="PriceRange"
                            type="number"
                            placeholder="Min"
                            onChange={handlePriceChange}
                          />
                        </PriceHolder>
                        <h3 className="PriceRange">-</h3>
                        <PriceHolder>
                          <input
                            className="PriceRange"
                            type="number"
                            placeholder="Max"
                            onChange={handlePriceChange}
                          />
                        </PriceHolder>
                      </>
                    )}
                  </div>
                </div>
                <div className="buttonsHolder">
                  <button className="VoltarButton" onClick={handleChangeState}>
                    Voltar
                  </button>
                  <button type="submit" className="SolicitarButton">
                    Solicitar Serviço
                  </button>
                </div>
              </div>
            </form>
            <div className="subtitleWrapper">
              <h2>Faxina de Jardim</h2>
            </div>
            <img src={LogoPath} alt="" className="logoArt" />
          </PageWrapper2>
        </>
      )}
    </>
  )
}
