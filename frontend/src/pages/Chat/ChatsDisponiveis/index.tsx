import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Header } from '../../../components/Header'
import { hirerChatMock, workerChatMock } from './ChatTest'
import {
  PageWrapper,
  ChatIcon,
  ChatsWrapper,
  PersonIcon,
  DoubleArrowIcon,
  CashIcon,
  NewChatIcon,
  ChatIconFill,
} from './styles'
import LogoArt from '../../../assets/images/LogoArtHome.svg'

export interface ChatInterface {
  when: Date
  clientName: string
  serviceCategory: string
  serviceSubCategory: string
  price: number
  location: string
  chatId: string | null // null if chat is not started
  newMessages: number
}

export function Chat(
  hirerChats: ChatInterface[] = [],
  workerChats: ChatInterface[] = [],
) {
  hirerChats = hirerChatMock
  workerChats = workerChatMock

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

  function createNewChat(service: ChatInterface) {
    console.log('Chat criado com sucesso para:', service)
    return '/home'
  }

  return (
    <>
      <Header logged={true} />
      <PageWrapper>
        <h1 className="title">
          Chats disponíveis <ChatIcon />
        </h1>
        <h3>
          {userType === 'hirer' ? hirerChats.length : workerChats.length} Chats
          disponíveis
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

        <ChatsWrapper>
          {(userType === 'hirer' ? hirerChats : workerChats).map(
            (service, index) => (
              <div key={index} className="serviceCard">
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
                <p className="serviceDate">
                  Serviço agendado:{' '}
                  {format(service.when, 'dd MMMM yyyy', { locale: ptBR })}
                </p>
                <p>{service.location}</p>
                <p>
                  <CashIcon /> R$ {service.price}
                </p>
                <a
                  className="openChat"
                  href={
                    service.chatId ? service.chatId : createNewChat(service)
                  }
                >
                  {service.chatId ? (
                    service.newMessages > 0 ? (
                      <>
                        <ChatIconFill /> Abrir {service.newMessages} mensagens
                        não lidas{' '}
                      </>
                    ) : (
                      <>
                        <ChatIconFill /> Abrir Chat
                      </>
                    )
                  ) : (
                    <>
                      <NewChatIcon /> Iniciar novo chat
                    </>
                  )}
                </a>
              </div>
            ),
          )}
        </ChatsWrapper>
        <img src={LogoArt} alt="" className="logoArt" />
      </PageWrapper>
    </>
  )
}
