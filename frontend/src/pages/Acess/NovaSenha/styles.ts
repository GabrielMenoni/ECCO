import styled from 'styled-components'

export const NovaSenhaDiv = styled.div`
  display: flex;
  position: absolute;
  top: 22vh;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${(props) => props.theme['main-neutral']};
  width: 59vw;
  height: 48vh;
  border-radius: 16px;
  

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
  }

  .titlesContainer {
    margin-top: 1vh;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 2rem;
  }

  ul {
    margin-top: 1vh;
    list-style-position: inside;
    width: 24.8125rem;
    max-height: 14.8125rem;
  }

  .inputHolder {
    display: flex;
    margin-bottom: 2vh;
    margin: 2.58rem 0px 2.9375rem 0px;
  }

  .buttonHolder {
    justify-content: center;
    display: flex;
    align-items: center;
  }

  h1 {
    color: #252e24;
    font-family: 'Open Sans', sans-serif;
    font-size: 2.07375rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  h2 {
    color: #252e24;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.44rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  li {
    color: #252e24;
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`
export const SenhaCriadaDiv = styled(NovaSenhaDiv)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .titleWrapper {
    /* position: relative; */
    max-width: 23.1875rem;
    height: 12.4375rem;
    margin-top: 4.9375rem;
    /* left: 15.5vw; */
    position: relative;
    display: flex;
    justify-content: center;
    text-align: center;
  }
  .titleWrapper h1 {
    font-size: 2.488125rem;
    font-weight: 400;
    line-height: 3.388125rem;
    text-align: center;
  }
  .buttonWrapper {
    /* position: absolute;
    bottom: 20vh;
    left: 24.5vw; */
    display: flex;
    justify-content: center;
  }
`
