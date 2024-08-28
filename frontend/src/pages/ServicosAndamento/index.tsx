import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../api'
import { Header } from '../../components/Header'
import { AcessVerification, userData } from '../../components/AcessVerification'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import LogoArt from '../../assets/images/LogoArtHome.svg'
import {
  PageWrapper,
  WrenchIcon,
  ServiceCards,
  CashIcon,
  ChatIcon,
  CheckIcon,
  DoubleArrowIcon,
  ClockIcon,
  PersonIcon,
  XIcon,
  CheckFilledIcon,
  XSquareIcon,
  SmileIcon,
  EditIcon,
} from './styles'

export interface hirerServices {
  when: Date
  workerName: string
  serviceCategory: string
  serviceSubCategory: string
  fixedPrice: number | null
  minPrice: number | null
  maxPrice: number | null
  location: string
  status: 'pending' | 'inProgress'
}

export interface workerServices {
  when: Date
  hirerName?: string
  serviceCategory: string
  serviceSubCategory: string
  fixedPrice: number | null
  minPrice: number | null
  maxPrice: number | null
  location?: string
  status: 'announced' | 'inProgress' | 'newOffer'
}

interface DiaServico {
  id?: string // Optional for creation
  data: string
  periodo: string
  servicoId?: string
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

function servicoToWorkerService(servico: Servico): workerServices {
  return {
    when: new Date(servico.momentoCriacao),
    hirerName: servico.usuarioId,
    serviceCategory: servico.subcategoriaId,
    serviceSubCategory: '-',
    fixedPrice: servico.precoFixo ?? null,
    minPrice: servico.precoMin ?? null,
    maxPrice: servico.precoMax ?? null,
    location: 'Location',
    status: 'announced',
  }
}

export function ServicosAndamento() {
  const navigate = useNavigate()

  const [hirerServices, setHirerServices] = useState<hirerServices[]>([])
  const [workerServices, setWorkerServices] = useState<workerServices[]>([])
  const [serviceType, setServiceType] = useState('hirer')
  const [user, setUser] = useState<userData | null>(null)

  useEffect(() => {
    async function getUser(): Promise<any> {
      const acess = await AcessVerification()
      setUser(acess.user)
      return acess.user.id
    }

    async function getWorkerServices(): Promise<any> {
      const user = await getUser()
      const servicos = await api.get('/services/myrunning', {
        params: {
          id: user,
        },
      })
      return servicos
    }
    getWorkerServices().then((response) => {
      setWorkerServices(response.data)
    })

    async function getHirerServices(): Promise<any> {
      const user = await getUser()
      const servicos = await api.get('/services/impaying', {
        params: {
          id: user,
        },
      })
      return servicos
    }
    getHirerServices().then((response) => {
      setHirerServices(response.data)
    })
  }, [])

  function ChangeType() {
    if (serviceType === 'hirer') {
      setServiceType('worker')
    } else {
      setServiceType('hirer')
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

  let services

  if (serviceType === 'hirer') {
    services = (
      <>
        <h3>{hirerServices.length} Serviços encontrados</h3>
        <div className="buttons">
          <button className="buttonActive">Contratante</button>
          <button onClick={ChangeType}>Prestador</button>
        </div>
        <ServiceCards>
          {hirerServices.map((service, index) => (
            <div key={index} className="serviceCard">
              <p>
                {getDayPeriod(service.when)},{' '}
                {format(service.when, 'dd MMMM yyyy', { locale: ptBR })}
              </p>
              <p>
                <div>
                  <PersonIcon />
                  {service.workerName}
                </div>
                <DoubleArrowIcon />
              </p>
              <p>
                {service.serviceCategory} - {service.serviceSubCategory}
              </p>
              <p>
                <CashIcon /> R$
                {service.fixedPrice === null
                  ? service.minPrice + ' - ' + service.maxPrice
                  : service.fixedPrice}
              </p>
              <p>{service.location}</p>
              <p>
                {service.status === 'inProgress' ? (
                  <>
                    <CheckIcon />
                    Serviço aprovado
                  </>
                ) : (
                  <>
                    <ClockIcon />
                    Solicitado
                  </>
                )}
              </p>
              {service.status === 'inProgress' && (
                <button className="chatButton">
                  <ChatIcon />
                  Chat com o prestador
                </button>
              )}
              <button className="cancelService">
                <XIcon />
                Cancelar Serviço
              </button>
            </div>
          ))}
        </ServiceCards>
      </>
    )
  } else if (serviceType === 'worker') {
    services = (
      <>
        <h3>{workerServices.length} Serviços encontrados</h3>
        <div className="buttons">
          <button onClick={ChangeType}>Contratante</button>
          <button className="buttonActive">Prestador</button>
        </div>
        <ServiceCards>
          {workerServices.map((service, index) => (
            <div key={index} className="serviceCard">
              <p>
                {getDayPeriod(service.when)},{' '}
                {format(service.when, 'dd MMMM yyyy', { locale: ptBR })}
              </p>
              {service.status !== 'announced' && (
                <p>
                  <div>
                    <PersonIcon />
                    {service.hirerName}
                  </div>
                  <DoubleArrowIcon />
                </p>
              )}
              <p>
                {service.serviceCategory} - {service.serviceSubCategory}
              </p>
              <p>
                <CashIcon /> R$
                {service.fixedPrice === null
                  ? service.minPrice + ' - ' + service.maxPrice
                  : service.fixedPrice}
              </p>
              {service.status !== 'announced' && <p>{service.location}</p>}
              {service.status === 'announced' ? (
                <p>
                  <ClockIcon />
                  {'Aguardando'}
                </p>
              ) : service.status === 'inProgress' ? (
                <p>
                  <SmileIcon />
                  {' Serviço aprovado'}
                </p>
              ) : (
                <></>
              )}
              {service.status === 'announced' ? (
                <button className="editService">
                  <EditIcon />
                  Editar Serviço
                </button>
              ) : service.status === 'inProgress' ? (
                <button className="chatButton">
                  <ChatIcon />
                  Abrir chat com contratante
                </button>
              ) : (
                <>
                  <button className="acceptService">
                    <CheckFilledIcon />
                    Aceitar Serviço
                  </button>
                  <button className="cancelService">
                    <XSquareIcon />
                    Rejeitar Serviço
                  </button>
                </>
              )}
              {service.status !== 'newOffer' && (
                <button className="cancelService">
                  <XIcon />
                  Cancelar Serviço
                </button>
              )}
            </div>
          ))}
        </ServiceCards>
      </>
    )
  }

  return (
    <>
      <Header logged={true} />
      <PageWrapper>
        <h1 className="title">
          Serviços em andamento <WrenchIcon />
        </h1>
        {services}
        <img src={LogoArt} alt="" className="logoArt" />
      </PageWrapper>
    </>
  )
}
