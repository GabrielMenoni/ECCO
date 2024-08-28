import { Header } from '../../components/Header'
import LogoArt from '../../assets/images/LogoArtHome.svg'
import { PageWrapper, TitleTriangle } from './styles'
import { DenyCard } from '../../components/DenyCard/index'

export function NegarServico() {
  return (
    <>
      <Header logged={true} />
      <PageWrapper>
        <div className="allInfo">
          <div className="titleHolder">
            <h1>
              Negar serviço <TitleTriangle />
            </h1>
          </div>
          <div className="cardHolder">
            <DenyCard
              servico="Manutenção - Pequenos Reparos"
              endereco="Xxxxx Xxxxxx Xxxxxx"
              fixVal={true}
              minVal={100}
              maxVal={300}
              valorFixo={200}
            />
          </div>
          <div className="reasonWrapper">
            <h2>Por qual motivo está negando o serviço?</h2>
            <form className="denyForm">
              <div className="inputHolder">
                <input
                  type="radio"
                  id="reason1"
                  name="reason"
                  value="reason1"
                />
                <label htmlFor="reason1">Distância muito grande</label>
              </div>
              <div className="inputHolder">
                <input
                  type="radio"
                  id="reason2"
                  name="reason"
                  value="reason2"
                />
                <label htmlFor="reason2">Histórico negativo</label>
              </div>
              <div className="inputHolder">
                <input
                  type="radio"
                  id="reason3"
                  name="reason"
                  value="reason3"
                />
                <label htmlFor="reason3">Horário Indisponível</label>
              </div>
              <div className="buttonHolder">
                <button type="submit">Negar serviço</button>
              </div>
            </form>
          </div>
        </div>
        <img src={LogoArt} alt="" className="logoArt" />
      </PageWrapper>
    </>
  )
}
