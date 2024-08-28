import React from 'react'
import { Header } from '../../../components/Header'
import LogoArt from '../../../assets/images/LogoArtHome.svg'
import { PageWrapper, PriceHolder } from './styles'
import { NavLink, useNavigate } from 'react-router-dom'

export function EnderecoPreco() {
  const valorFixo = true
  const navigate = useNavigate()

  const handleSolicitarServico = (event) => {
    event.preventDefault()
    navigate('/')
  }

  return (
    <>
      <Header logged={true} />
      <PageWrapper>
        <form onSubmit={handleSolicitarServico}>
          <div className="titleWrapper">
            <h1>Digite o seu endereço </h1>
          </div>
          <div className="fullAdress">
            <h3>O endereço deve ser completo e sem complemento</h3>
            <div className="inputsHolder">
              <div>
                <input type="text" placeholder="Cep" className="cepInput" />
                <input
                  type="text"
                  placeholder="Bairro"
                  className="bairroInput"
                />
                <input
                  type="text"
                  placeholder="Cidade"
                  className="cidadeInput"
                />
              </div>
              <div>
                <input type="text" placeholder="Rua" className="ruaInput" />
                <input
                  type="number"
                  placeholder="Número"
                  className="numInput"
                />
              </div>
            </div>
            <div className="priceTag">
              <h1>{valorFixo ? 'Valor Fixo:' : 'Faixa de preço:'}</h1>
              <div className="priceHolder">
                {valorFixo ? (
                  <PriceHolder>
                    <h3 className="singlePrice">R$200,00</h3>
                  </PriceHolder>
                ) : (
                  <>
                    <PriceHolder>
                      <h3 className="PriceRange">R$200,00</h3>
                    </PriceHolder>
                    <h3 className="PriceRange">-</h3>
                    <PriceHolder>
                      <h3 className="PriceRange">R$200,00</h3>
                    </PriceHolder>
                  </>
                )}
              </div>
            </div>
            <div className="buttonsHolder">
              <NavLink to="/" style={{ textDecoration: 'none' }}>
                <button className="VoltarButton">Voltar</button>
              </NavLink>
              <button type="submit" className="SolicitarButton">
                Solicitar Serviço
              </button>
            </div>
          </div>
        </form>
        <div className="subtitleWrapper">
          <h2>Faxina de Jardim</h2>
        </div>
        <img src={LogoArt} alt="" className="logoArt" />
      </PageWrapper>
    </>
  )
}
