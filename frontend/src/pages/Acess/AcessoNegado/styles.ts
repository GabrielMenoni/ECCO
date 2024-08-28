import styled from 'styled-components'

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme['green-gradient']};
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 1rem;

  h1 {
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25vw;
    height: 8vh;
    background-color: rgba(254, 250, 224, 0.94);
    border-radius: 16px;
    color: black;
    text-decoration: none;
    margin-top: 10vh;
    font-size: 1.4rem;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`
