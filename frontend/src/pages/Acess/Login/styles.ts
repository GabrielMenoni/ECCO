import { styled } from 'styled-components'

export const LoginDiv = styled.div`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme['main-neutral']};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  width: 53.03vw;
  height: fit-content;
  min-height: 47.95vh;
  border-radius: 16px;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-family: 'Open Sans', sans-serif;
    font-size: 2.488rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    margin-top: 4.1vh;
    margin-bottom: 3.61vh;
  }

  .inputs {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    gap: 3.125vh;

    div {
      box-shadow: 0px 4px 4px 0px #00000040;
    }
  }

  .bottomWrapper {
    display: flex;
    flex-direction: column;
    margin-top: 5.37vh;
    margin-bottom: 1vh;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    align-items: center;
  }

  .bottom {
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    margin-top: 0.25rem;
  }

  .bottom a {
    color: ${(props) => props.theme['button-green']};
    text-decoration: none;
    margin-left: 0.5625rem;
  }
`
