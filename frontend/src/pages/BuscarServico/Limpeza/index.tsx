import { Header } from '../../../components/Header'
import { BackgroundWrapper } from './styles'
import imagemJardim from '../../../assets/images/jardimStock.png'
import imagemVidro from '../../../assets/images/vidroStock.png'
import imagemPiscina from '../../../assets/images/piscinaStock.png'
import desenho from '../../../assets/images/linhas.png'
import { Button } from '../../../components/button'
import { useNavigate } from 'react-router-dom'

export function Limpeza() {
  const navigate = useNavigate()

  const enviarCalendario = () => {
    navigate('/prestarservico/calendario')
  }

  return (
    <>
      <Header logged={true} />
      <BackgroundWrapper>
        <div className="desenhoLinhas">
          <img src={desenho} alt="" />
        </div>
        <div className="imagesWrapper">
          <div className="imageHolder">
            <img src={imagemJardim} alt="" onClick={enviarCalendario} />
            <div className="textImage">
              <h5>Faxina de Jardim</h5>
            </div>
          </div>
          <div className="imageHolder">
            <img src={imagemVidro} alt="" onClick={enviarCalendario} />
            <div className="textImage">
              <h5>Faxina de Vidro</h5>
            </div>
          </div>
          <div className="imageHolder">
            <img src={imagemPiscina} alt="" onClick={enviarCalendario} />
            <div className="textImage">
              <h5>Faxina de Piscina</h5>
            </div>
          </div>
        </div>

        <div className="buttonWrapper">
          <Button style={'forward'} text={'Voltar'} to="/" />
        </div>
      </BackgroundWrapper>
    </>
  )
}
