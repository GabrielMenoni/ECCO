import { styled } from 'styled-components'
import { AiOutlineLogin } from 'react-icons/ai'
import { IoMdSearch } from 'react-icons/io'

export const HeaderWrappper = styled.header`
  display: flex;
  background-color: ${(props) => props.theme['green-600']};
  width: 100%;
  height: 10.16vh;
  align-items: center;
`

export const LogoWrapper = styled.div`
  width: 7.57vw;
  height: 6.74vh;
  overflow: hidden;
  margin-left: 3.68vw;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* ou 'contain', dependendo do efeito desejado */
    object-position: center; /* para centralizar a imagem */
  }
`

export const InfosWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 49.75vw;
  height: 10.16vh;
  margin-left: 5.76vw;
  padding: 1.56vh 1.11vw 1.56vh 1.11vw;
  gap: 2rem;

  a {
    color: ${(props) => props.theme.white};
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    cursor: pointer;
  }
`

export const LogginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10.14vw;
  height: 10.16vh;
  margin-left: auto;
  margin-right: 3.2vw;

  a {
    color: ${(props) => props.theme.white};
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 1.44rem;
    cursor: pointer;
    gap: 0.625rem;
  }
`

export const LogginIcon = styled(AiOutlineLogin)`
  font-size: 1.5rem;
  color: ${(props) => props.theme.white};
  cursor: pointer;
`

export const SearchIcon = styled(IoMdSearch)`
  font-size: 1.5rem;
  color: ${(props) => props.theme.white};
  cursor: pointer;
  margin-left: auto;
  margin-right: 1.18vw;
`
