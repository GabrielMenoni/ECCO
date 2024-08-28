import styled from 'styled-components'

export const VerificarEmailDiv = styled.div`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme['main-neutral']};

  width: 55vw;
  min-height: 49vh;
  height: fit-content;

  border-radius: 16px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
  }

  h1 {
    color: #252e24;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-size: 2.07375rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  p {
    color: #252e24;
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: left;
  }

  .allTexts {
    margin-top: 2vh;
    display: flex;
    width: 32.6875rem;
    height: 14.9vh;
    padding: 0.5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .titleContainer {
    width: 29.5625rem;
    height: 3.125rem;
    flex-shrink: 0;
    margin-bottom: 1vh;
    text-align: center;
  }

  .textContainer {
    max-width: 27.5rem;
    height: 1.375rem;
    margin: 0 2.59375rem 1.6875rem 2.59375rem;
  }

  .textContainer a {
    color: ${(props) => props.theme['button-green']};
  }
  .textContainer p {
    text-align: left;
  }

  .inputHolder {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .buttonHolder {
    display: flex;
    margin-top: 4vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-self: flex-end;
  }

  .buttonHolder a {
    color: #252e24;
    font-family: 'Open Sans', sans-serif;
    font-size: 0.694375rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
    margin-top: 0.375rem;
  }
`
