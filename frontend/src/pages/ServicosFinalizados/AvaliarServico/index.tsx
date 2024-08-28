import { Header } from '../../../components/Header'
import LogoArt from '../../../assets/images/LogoArtHome.svg'
import { PageWrapper, ProfileImg, ArrowDownIcon } from './styles'
import { StarRating } from '../../../components/StarRating/index'

export function Avaliacao() {
  const prestador = true

  return (
    <>
      <Header logged={true} />
      <PageWrapper>
        <div className="contentHolder">
          <div className="titleHolder">
            <h1>
              O que você achou do {prestador ? 'serviço' : 'contratante'}?
            </h1>
          </div>
          <form action="">
            <div className="rateContent">
              <div className="serviceWrapper">
                <div className="profileHolder">
                  <ProfileImg />
                  <h3>{prestador ? 'Prestador' : 'Contratante'}</h3>
                </div>
                <h2>Manutenção - elétrica</h2>
                <div className="dateHolder">
                  <h2>Domingo, 16 de junho 2024</h2>
                </div>
              </div>
              <div className="subtitleHolder">
                <p>Escolha de 1 a 5 estrelas para classificar</p>
              </div>
              <div className="ratingWrapper">
                <div className="ratingHolder">
                  <StarRating />
                </div>
                <div className="ratingType">
                  <div className="badHolder">
                    <ArrowDownIcon />
                    <p>Ruim</p>
                  </div>
                  <div className="excelentHolder">
                    <ArrowDownIcon />
                    <p>Excelente</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="inputHolder">
              <p>Adicione um comentário</p>
              <textarea placeholder="Adicionar comentário" />
            </div>
            <div className="buttonHolder">
              <button type="submit">Enviar avaliação</button>
            </div>
          </form>
        </div>
        <img src={LogoArt} alt="" className="logoArt" />
      </PageWrapper>
    </>
  )
}
