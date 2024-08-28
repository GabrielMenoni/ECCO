import { useState } from 'react'
import {
  MenuWrapper,
  MenuIcon,
  DropdownWrapperMenu,
  IconePerfil,
  IconeServicos,
  IconeChat,
  IconeFinalizados,
  IconeLogout,
} from './styles'
import { useNavigate, useLocation } from 'react-router-dom'

export function MenuDropDown() {
  const [DropState, setDropState] = useState(false)

  function HandleClick() {
    setDropState(!DropState)
  }

  const navigate = useNavigate()
  const location = useLocation()

  function goOnClick(path: string) {
    navigate(path)
  }

  function HandleLogOut() {
    localStorage.removeItem('authToken')

    if (location.pathname === '/') {
      navigate(0)
    } else {
      navigate('/')
    }
  }

  return (
    <MenuWrapper onClick={HandleClick}>
      <MenuIcon />
      Menu
      {DropState && (
        <DropdownWrapperMenu>
          <div onClick={() => goOnClick('/perfil')}>
            <p>Meu Perfil</p>
            <IconePerfil />
          </div>
          <div onClick={() => goOnClick('/servicosandamento')}>
            <p>Serviços em Andamento</p>
            <IconeServicos />
          </div>
          <div onClick={() => goOnClick('/chat')}>
            <p>Chat</p>
            <IconeChat />
          </div>
          <div onClick={() => goOnClick('/servicosfinalizados')}>
            <p>Serviços finalizados</p>
            <IconeFinalizados />
          </div>
          <div onClick={HandleLogOut}>
            <p>Logout</p>
            <IconeLogout />
          </div>
        </DropdownWrapperMenu>
      )}
    </MenuWrapper>
  )
}
