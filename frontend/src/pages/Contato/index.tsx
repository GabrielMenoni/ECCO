import { Header } from '../../components/Header'
import LogoArt from '../../assets/images/LogoArtHome.svg'
import { Button } from '../../components/button'
import { useNavigate } from 'react-router-dom'
import {
  PageWrapper,
  EnvelopeIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  TelephoneIcon,
} from './styles'

export function Contato() {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/')
  }

  return (
    <>
      <Header logged={false} contact={false} />
      <PageWrapper>
        <p className="title">
          Contato <EnvelopeIcon />
        </p>
        <div className="infosWrapper">
          <p>Nos contate através de nossos canais de comunicação oficial</p>

          <div className="infos">
            <a href="">
              <FacebookIcon /> Facebook da marca
            </a>
            <a href="">
              <InstagramIcon /> Instagram da marca
            </a>
            <a href="">
              <MailIcon /> E-mail da marca
            </a>
            <a href="">
              <TelephoneIcon /> 0800 da plataforma
            </a>
          </div>
        </div>

        <Button
          variant="primaryExtended"
          text="Voltar para Home"
          onClick={handleClick}
        />

        <img src={LogoArt} alt="" className="logoArt" />
      </PageWrapper>
    </>
  )
}
