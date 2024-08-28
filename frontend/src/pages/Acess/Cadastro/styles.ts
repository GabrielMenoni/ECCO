import { styled } from 'styled-components'

export const SignUpVerificationDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme['main-neutral']};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  width: 59vw;
  height: 54vh;
  border-radius: 16px;

  .text {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 24.31rem;
    height: 5.81rem;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 1.44rem;
  }

  button {
    margin-bottom: 1.69rem;
  }
`
