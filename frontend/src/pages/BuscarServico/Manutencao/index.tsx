import { Header } from '../../../components/Header'
import { BackgroundWrapper } from './styles'
import imagemPintura from '../../../assets/images/pinturaStock.png'
import imagemInstalacoes from '../../../assets/images/InstalacoesStock.png'
import imagemHidraulica from '../../../assets/images/manutencaoHidraulicaStock.png'
import imagemEletrica from '../../../assets/images/manutencaoEletricaStock.png'
import imagemReparos from '../../../assets/images/pequenosReparosStock.png'
import desenho from '../../../assets/images/linhas.png'
import { Button } from '../../../components/button'
import { useNavigate } from 'react-router-dom'

export function Manutencao() {
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
        <div className="imagesWrapperUpper">
          <div className="imageHolder">
            <img src={imagemPintura} alt="" onClick={enviarCalendario} />
            <div className="textImage">
              <h5>Pintura</h5>
            </div>
          </div>
          <div className="imageHolder">
            <img src={imagemInstalacoes} alt="" onClick={enviarCalendario} />
            <div className="textImage">
              <h5>Instalações</h5>
            </div>
          </div>
          <div className="imageHolder">
            <img src={imagemHidraulica} alt="" onClick={enviarCalendario} />
            <div className="textImage">
              <h6>Manutenção Hidráulica</h6>
            </div>
          </div>
        </div>
        <div className="imagesWrapperLower">
          <div className="imageHolder">
            <img
              src={imagemEletrica}
              alt=""
              onClick={enviarCalendario}
              className="imagemEletricos"
            />
            <div className="textImage">
              <h6>Manutenção Elétrica</h6>
            </div>
          </div>
          <div className="imageHolder">
            <img src={imagemReparos} alt="" onClick={enviarCalendario} />
            <div className="textImage">
              <h6>Pequenos Reparos</h6>
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
