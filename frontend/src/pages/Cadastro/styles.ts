import styled from 'styled-components'

export const NovaSenhaDiv = styled.div`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme['main-neutral']};
  width: 59vw;
  min-height: 57.52vh;
  height: fit-content;
  border-radius: 16px;
  justify-content: center;

  form {
    justify-content: center;
  }

  .titleContainer {
    margin-top: 1.71vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  .inputsHolder {
    display: flex;
    width: fit-content;
    padding: 0.69vw 0.78vh 0px 0.78vh;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.34vh;
    flex-shrink: 0;
  }

  .listHolder {
    margin-top: 0.78vh;
    display: flex;
    flex-direction: column;
    width: 30vw;
    height: 7vh;
    margin-bottom: 5vh;
  }

  .buttonHolder {
    justify-content: center;
    display: flex;
    margin-bottom: 1.71vh;
  }

  h1 {
    color: #252e24;
    font-family: 'Open Sans', sans-serif;
    font-size: 2.488125rem;
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

    /* small */
    font-family: 'Open Sans', sans-serif;
    font-size: 0.833125rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`
