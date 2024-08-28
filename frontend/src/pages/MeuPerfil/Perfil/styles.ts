import { styled } from 'styled-components'
import { BsPersonFill, BsCircle, BsCardText, BsPencil } from 'react-icons/bs'
import { AiOutlineLogout, AiOutlineWarning } from 'react-icons/ai'

export const IconePerfil = styled(BsPersonFill)`
  font-size: 3.8125rem;
`
export const PerfilBotao = styled(BsPersonFill)`
  font-size: 1rem;
`
export const IconeSobreMim = styled(BsCardText)`
  font-size: 1.5rem;
  color: ${(props) => props.theme.white};
`
export const Lapis = styled(BsPencil)`
  font-size: 1.5rem;
  color: ${(props) => props.theme.white};
`
export const Logout = styled(AiOutlineLogout)`
  font-size: 1.28625rem;
  position: relative;
  left: 0.62rem;
  color: ${(props) => props.theme.white};
`
export const Excluir = styled(AiOutlineWarning)`
  font-size: 1.3125rem;
  position: relative;
  left: 0.5rem;
  color: ${(props) => props.theme.white};
`
export const FotoPerfil = styled(BsPersonFill)`
  width: 2.75rem;
  height: 3.5rem;
  color: ${(props) => props.theme.white};
`

export const CirculoIcone = styled(BsCircle)`
  width: 11.125rem;
  height: 11.125rem;
  left: 6.8125rem;
  z-index: 1;
  color: ${(props) => props.theme['hover-green']};
`

export const BodyWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 10.16vh);
  height: fit-content;
  padding-bottom: 5vh;
  background: ${(props) => props.theme['green-gradient']};
  box-sizing: border-box;
  overflow: hidden;

  button {
    cursor: pointer;
    background-color: ${(props) => props.theme['button-green']};
    color: ${(props) => props.theme.white};
    border-radius: 16px;
    border: none;
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3625rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .aboutme button {
    width: 22.1875rem;
    height: 2.5rem;
    position: relative;
    left: 1.28125rem;
    margin-top: 2.0625rem;
    margin-bottom: 1.5rem;
    gap: 0.5rem;
  }
  .options {
    width: 12.6875rem;
    display: flex;
    flex-direction: column;
    position: relative;
    left: 6.03125rem;
    gap: 0.5rem;
  }

  .options button {
    width: 12.6875rem;
    height: 2.5rem;
  }

  .title {
    color: ${(props) => props.theme['dropdowns-secundary-buttons']};
    font-family: 'Open Sans', sans-serif;
    font-size: 2.98625rem;
    line-height: 4.067rem;
    position: absolute;
    width: auto;
    height: auto;
    top: 15vh;
    left: 5rem;
    gap: 0.5rem;
    align-items: flex-start;
    justify-content: flex-start;
    display: flex;
  }
  .profileWrapper {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 24.75rem;
    height: 28.125rem;
    top: 26vh;
    left: 6.8125rem;
  }
  .IconHolder {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: 8.125rem;
    color: ${(props) => props.theme.white};
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3625rem;
    z-index: 5;
  }
  .Icon {
    position: relative;
    width: 11.125rem;
    height: 11.125rem;
    left: 6.8125rem;
    cursor: pointer;
  }
  .logoArt {
    height: 62.4vh;
    width: 62.4vh;
    position: absolute;
    bottom: 12.6vh;
    right: 0;
  }
`
export const FooterWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 1.625rem;
  display: flex;
  font-size: 1rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  width: 100%;
  height: 2rem;
  gap: 0.5rem;
  color: ${(props) => props.theme.white};
  justify-content: center;
  align-items: center;
  flex-direction: column;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.white};
  }

  &:last-child {
    margin-bottom: 2.25vh;
  }
`
