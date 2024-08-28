import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Calendar } from '../../../components/calendar'
import { Header } from '../../../components/Header'
import { Button } from '../../../components/button'
import LogoArt from '../../../assets/images/LogoArtHome.svg'
import {
  PageWrapper,
  ArrowUpIcon,
  RadioGroup,
  RadioButton,
  RadioInput,
} from './styles'

// Tentativa de enviar os dados para Seviços disponiveis

export function Calendario() {
  const [categorySelected, setCategorySelected] = useState<string>('')
  const [subCategorySelected, setSubCategorySelected] = useState<string>('')
  const [selectedDates, setSelectedDates] = useState<Date[]>([])
  const navigate = useNavigate() // Usuarei o navigate para passar as variavéis

  const handleSelectedDatesChange = (dates: Date[]) => {
    setSelectedDates(dates)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const dates = selectedDates.sort((a, b) => a.getTime() - b.getTime())
    console.log('Datas selecionadas:', dates)
    console.log('Categoria selecionada:', categorySelected)
    console.log('Subcategoria selecionada:', subCategorySelected)

    // Redirecionar para a rota /servicosdisponiveis

    /* Adicionando as variavéis que estão sendo salvas nos useStates
     e passando para Serviços Disponivéis */

    navigate('/servicosdisponiveis', {
      state: {
        categorySelected,
        subCategorySelected,
        dates,
      },
    })
  }

  return (
    <>
      <Header logged={true} />
      <PageWrapper>
        <h1>Pesquisa Avançada</h1>
        <div className="infos">
          <h3 className="infoCalendar">Selecione uma data</h3>
          <h3>
            Selecione uma categoria <ArrowUpIcon />{' '}
          </h3>
          <h3>
            Selecione uma subcategoria <ArrowUpIcon />
          </h3>
        </div>
        <form onSubmit={handleSubmit}>
          <Calendar onSelectedDatesChange={handleSelectedDatesChange} />
          <RadioGroup>
            <RadioInput
              type="radio"
              id="manutencao"
              name="categorySelected"
              value="Manutencao"
              checked={categorySelected === 'Manutencao'}
              onChange={() => setCategorySelected('Manutencao')}
            />
            <RadioButton
              htmlFor="manutencao"
              checked={categorySelected === 'Manutencao'}
            >
              Manutenção
            </RadioButton>

            <RadioInput
              type="radio"
              id="limpeza"
              name="categorySelected"
              value="Limpeza"
              checked={categorySelected === 'Limpeza'}
              onChange={() => setCategorySelected('Limpeza')}
            />
            <RadioButton
              htmlFor="limpeza"
              checked={categorySelected === 'Limpeza'}
            >
              Limpeza
            </RadioButton>
          </RadioGroup>

          {categorySelected === 'Limpeza' ? (
            <RadioGroup>
              <RadioInput
                type="radio"
                id="faxinaVidros"
                name="subCategorySelected"
                value="faxinaVidros"
                checked={subCategorySelected === 'faxinaVidros'}
                onChange={() => setSubCategorySelected('faxinaVidros')}
              />
              <RadioButton
                htmlFor="faxinaVidros"
                checked={subCategorySelected === 'faxinaVidros'}
              >
                Faxina de vidros
              </RadioButton>

              <RadioInput
                type="radio"
                id="faxinaJardim"
                name="subCategorySelected"
                value="faxinaJardim"
                checked={subCategorySelected === 'faxinaJardim'}
                onChange={() => setSubCategorySelected('faxinaJardim')}
              />
              <RadioButton
                htmlFor="faxinaJardim"
                checked={subCategorySelected === 'faxinaJardim'}
              >
                Faxina de jardim
              </RadioButton>

              <RadioInput
                type="radio"
                id="faxinaPiscina"
                name="subCategorySelected"
                value="faxinaPiscina"
                checked={subCategorySelected === 'faxinaPiscina'}
                onChange={() => setSubCategorySelected('faxinaPiscina')}
              />
              <RadioButton
                htmlFor="faxinaPiscina"
                checked={subCategorySelected === 'faxinaPiscina'}
              >
                Faxina de piscina
              </RadioButton>
            </RadioGroup>
          ) : (
            <RadioGroup>
              <RadioInput
                type="radio"
                id="pintura"
                name="subCategorySelected"
                value="pintura"
                checked={subCategorySelected === 'pintura'}
                onChange={() => setSubCategorySelected('pintura')}
              />
              <RadioButton
                htmlFor="pintura"
                checked={subCategorySelected === 'pintura'}
              >
                Pintura
              </RadioButton>

              <RadioInput
                type="radio"
                id="eletrica"
                name="subCategorySelected"
                value="eletrica"
                checked={subCategorySelected === 'eletrica'}
                onChange={() => setSubCategorySelected('eletrica')}
              />
              <RadioButton
                htmlFor="eletrica"
                checked={subCategorySelected === 'eletrica'}
              >
                Elétrica
              </RadioButton>

              <RadioInput
                type="radio"
                id="hidraulica"
                name="subCategorySelected"
                value="hidraulica"
                checked={subCategorySelected === 'hidraulica'}
                onChange={() => setSubCategorySelected('hidraulica')}
              />
              <RadioButton
                htmlFor="hidraulica"
                checked={subCategorySelected === 'hidraulica'}
              >
                Hidráulica
              </RadioButton>

              <RadioInput
                type="radio"
                id="pequenosReparos"
                name="subCategorySelected"
                value="pequenosReparos"
                checked={subCategorySelected === 'pequenosReparos'}
                onChange={() => setSubCategorySelected('pequenosReparos')}
              />
              <RadioButton
                htmlFor="pequenosReparos"
                checked={subCategorySelected === 'pequenosReparos'}
              >
                Pequenos Reparos
              </RadioButton>

              <RadioInput
                type="radio"
                id="instalacoes"
                name="subCategorySelected"
                value="instalacoes"
                checked={subCategorySelected === 'instalacoes'}
                onChange={() => setSubCategorySelected('instalacoes')}
              />
              <RadioButton
                htmlFor="instalacoes"
                checked={subCategorySelected === 'instalacoes'}
              >
                Instalações
              </RadioButton>
            </RadioGroup>
          )}
          <Button variant="primaryExtended" text="Avançar" type="submit" />
        </form>
        <img src={LogoArt} alt="" className="logoArt" />
      </PageWrapper>
    </>
  )
}
