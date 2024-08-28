import styled from 'styled-components'

export const EsqueciSenhaDiv = styled.div`
  display: flex;
  position: absolute;
  top: 23vh;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${(props) => props.theme['main-neutral']};
  width: 50vw;
  height: 50vh;
  border-radius: 16px;
  justify-content: center;
  flex-direction: column;
  align-items: center;

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
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
  }

  form {
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .titleContainer {
    margin-bottom: 3.6875rem;
    margin-top: 2.6875rem;
    width: 100%; /* Ensure it takes the full width of the parent */
  }

  .inputHolder {
    margin: 3.6875rem 0.625rem 1.25rem 1.25rem;
    display: flex;
    justify-content: center;
  }

  .buttonHolder {
    width: 100%;
    position: absolute;
    bottom: 5vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
