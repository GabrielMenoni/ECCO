import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Header } from '../../components/Header'
import { hirerServiceMock, workerServiceMock } from './ServiceTest'
import {
  PageWrapper,
  WrenchIcon,
  ServiceWrapper,
  PersonIcon,
  DoubleArrowIcon,
  CashIcon,
  EmptyStarIcon,
  FilledStarIcon,
  GiveRatingStar,
} from './styles'
import LogoArt from '../../assets/images/LogoArtHome.svg'

export interface FinishedServiceInterface {
  when: Date
  clientName: string
  serviceCategory: string
  serviceSubCategory: string
  fixedPrice: number | null
  minPrice: number | null
  maxPrice: number | null
  rating: number | null
  message: string | null
}

interface Servico {
  id: string
  momentoCriacao: string
  precoFixo?: number | null
  precoMin?: number | null
  precoMax?: number | null
  subcategoriaId: string
  usuarioId: string
  diasServico?: DiaServico[]
}

export function ServicosFinalizados() {
  const hirerServices = hirerServiceMock
  const workerServices = workerServiceMock

  function convertData(servico: Servico): FinishedServiceInterface {
    const info: FinishedServiceInterface = {
      when: new Date(servico.momentoCriacao),
      clientName: 'Nome do Cliente',
      serviceCategory: 'Categoria do Serviço',
      serviceSubCategory: 'Subcategoria do Serviço',
      fixedPrice: servico.precoFixo ?? null,
      minPrice: servico.precoMin ?? null,
      maxPrice: servico.precoMax ?? null,
      rating: 3,
      message: null,
    }

    return info
  }

  const [userType, setUserType] = useState<'hirer' | 'worker'>('hirer')

  useEffect(() => {
    // Adiciona o estilo ao montar o componente
    document.body.style.overflowX = 'hidden'

    // Remove o estilo ao desmontar o componente
    return () => {
      document.body.style.overflowX = ''
    }
  }, [])

  function ChangeType() {
    if (userType === 'hirer') {
      setUserType('worker')
    } else {
      setUserType('hirer')
    }
  }

  const getDayPeriod = (date: Date): string => {
    // Array para nomes dos dias da semana sem "feira"
    const daysOfWeek = [
      'Domingo',
      'Segunda',
      'Terça',
      'Quarta',
      'Quinta',
      'Sexta',
      'Sábado',
    ]

    // Obter o dia da semana e a hora
    const dayOfWeek = daysOfWeek[date.getDay()]
    const hour = date.getHours()

    // Determinar o período do dia
    const period = hour < 12 ? 'de manhã' : 'de tarde'

    return `${dayOfWeek} ${period}`
  }

  function GetRatingStars(rating: number) {
    const stars = []
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<FilledStarIcon key={i} color="rgba(37, 46, 36, 1)" />)
      } else {
        stars.push(<EmptyStarIcon key={i} />)
      }
    }
    return stars
  }

  function truncateString(str: string, maxLength: number = 40) {
    if (str.length > maxLength) {
      return str.slice(0, maxLength - 3) + '...'
    }
    return str
  }

  return (
    <>
      <Header logged={true} />
      <PageWrapper>
        <h1 className="title">
          Serviços Finalizados
          <WrenchIcon />
        </h1>
        <h3>
          {userType === 'hirer' ? hirerServices.length : workerServices.length}{' '}
          Serviços Encontrados
        </h3>
        <div className="buttons">
          <button
            className={userType === 'hirer' ? 'buttonActive' : ''}
            onClick={userType !== 'hirer' ? ChangeType : () => {}}
          >
            Contratante
          </button>
          <button
            className={userType === 'worker' ? 'buttonActive' : ''}
            onClick={userType !== 'worker' ? ChangeType : () => {}}
          >
            Prestador
          </button>
        </div>

        <ServiceWrapper>
          {(userType === 'hirer' ? hirerServices : workerServices).map(
            (service, index) => (
              <div key={index} className="serviceCard">
                <p>
                  {getDayPeriod(service.when)},{' '}
                  {format(service.when, 'dd MMMM yyyy', { locale: ptBR })}
                </p>
                <p>
                  <div>
                    <PersonIcon />
                    {service.clientName}
                  </div>
                  <DoubleArrowIcon />
                </p>
                <p>
                  {service.serviceCategory} - {service.serviceSubCategory}
                </p>
                <p>
                  <CashIcon /> R${' '}
                  {service.fixedPrice
                    ? service.fixedPrice
                    : service.minPrice + ' - ' + service.maxPrice}
                </p>
                {service.rating ? (
                  <>
                    <p>
                      Avaliação
                      <div className="ratingStars">
                        {GetRatingStars(service.rating).map((star, index) => (
                          <span key={index}>{star}</span>
                        ))}
                      </div>
                    </p>
                    <a>
                      {service.message
                        ? 'Comentário: "' +
                          truncateString(service.message) +
                          '"'
                        : 'O cliente não deixou um comentário'}
                    </a>
                  </>
                ) : (
                  <a className="giveRating">
                    <GiveRatingStar /> Dar uma avaliação
                  </a>
                )}
              </div>
            ),
          )}
        </ServiceWrapper>
        <img src={LogoArt} alt="" className="logoArt" />
      </PageWrapper>
    </>
  )
}
