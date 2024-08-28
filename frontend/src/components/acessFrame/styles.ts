import { styled } from 'styled-components'

export const AcessFrameWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme['green-500']};
  height: 100vh;
  width: 100vw;
  margin: 0px;
`

export const LogoWrapper = styled.div`
  width: 30.3vw;
  height: 22vh;
  overflow: hidden;
  margin-right: 4.8vw;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`

export const FooterWrapper = styled.div`
  display: flex;
  font-size: 1rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  width: 13.81rem;
  height: 2rem;
  padding: 0px, 0.625rem, 0.625rem, 0.625rem;
  gap: 1.18rem;
  color: ${(props) => props.theme.white};
  justify-content: center;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.white};
  }

  &:last-child {
    margin-bottom: 2.25vh;
  }
`
