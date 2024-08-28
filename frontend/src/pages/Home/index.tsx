import { Header } from '../../components/Header'
import { Carousel } from '../../components/Carousel'
import { BodyWrapper, LikeIcon, CalendarIcon, SunIcon } from './styles'
import LogoArt from '../../assets/images/LogoArtHome.svg'
import { useState, useEffect } from 'react'
import { api } from '../../api'
import { useNavigate } from 'react-router-dom'

export function Home() {
  const [token, setToken] = useState<string | null>()

  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('authToken')
    api
      .get('/users/me', { headers: { Authorization: `Bearer ${token}` } })
      .then(() => {
        setToken(token)
      })
      .catch(() => {
        setToken(null)
      })
  }, [navigate])

  const LoggedIn = token !== null

  return (
    <>
      <Header logged={LoggedIn} />
      <BodyWrapper>
        <div className="carouselWrapper">
          <Carousel />
        </div>

        <div className="infosWrapper">
          <div className="info">
            <div className="icon">
              <LikeIcon />
            </div>
            Serviços avaliados visando a qualidade
          </div>
          <div className="info">
            <div className="icon">
              <CalendarIcon />
            </div>
            Trabalhadores sempre disponíveis
          </div>
          <div className="info">
            <div className="icon">
              <SunIcon />
            </div>
            Serviços disponíveis de manhã e/ou de tarde
          </div>
        </div>

        <div className="workWrapper">
          <div className="workCard">
            Comece a trabalhar agora mesmo
            <a href={LoggedIn ? '/cadastrarservico' : '/login'}>
              {' '}
              Prestar Serviço{' '}
            </a>
          </div>
          <div className="workCard">
            Procure um serviço agora mesmo
            <a href={LoggedIn ? '/pesquisaavancada' : '/login'}>
              {' '}
              Procurar Serviço{' '}
            </a>
          </div>
        </div>
        <img src={LogoArt} alt="" className="logoArt" />
      </BodyWrapper>
    </>
  )
}
