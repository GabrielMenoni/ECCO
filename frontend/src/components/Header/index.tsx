import Logo from '../../assets/images/logo-leaf-dark.svg'
import { useNavigate } from 'react-router-dom'
import { NotificationDropDown } from './notificationDropDown'
import { MenuDropDown } from './menuDropDown'
import {
  HeaderWrappper,
  LogoWrapper,
  InfosWrapper,
  LogginWrapper,
  LogginIcon,
  SearchIcon,
} from './styles'

interface HeaderProps {
  logged: boolean
  contact?: boolean
  about?: boolean
}

export function Header({ logged, contact = true, about = true }: HeaderProps) {
  const navigate = useNavigate()

  const sendToHome = () => {
    navigate('/')
  }

  return (
    <HeaderWrappper>
      {logged ? (
        <>
          <LogoWrapper onClick={sendToHome}>
            <img src={Logo} alt="Logo" />
          </LogoWrapper>
          <MenuDropDown />
          <SearchIcon />
          <NotificationDropDown />
        </>
      ) : (
        <>
          <InfosWrapper>
            {contact && <a href="/contato">Contato</a>}
            {about && <a href="/about">Sobre nós</a>}
          </InfosWrapper>
          <LogginWrapper>
            <a href="/login">
              Login
              <LogginIcon />
            </a>
          </LogginWrapper>
        </>
      )}
    </HeaderWrappper>
  )
}
