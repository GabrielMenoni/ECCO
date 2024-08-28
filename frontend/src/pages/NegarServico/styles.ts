import styled from 'styled-components'
import { BsExclamationTriangleFill } from 'react-icons/bs'

export const PageWrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 10.16vh);
  background: linear-gradient(180deg, #3a5a40 0%, #263a2a 51.5%);
  padding: 0 5.55vw;
  color: #fefae0ef;
  font-family: 'open sans', sans-serif;

  .allInfo {
    position: absolute;
    margin-top: 3vh;
  }

  .cardHolder {
    width: 18.5vw;
    padding: 0.5rem;
    border-radius: 16px;
  }

  .titleHolder {
    margin-bottom: 4vh;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: flex-start;
    h1 {
      font-weight: 400;
      font-size: 2.98625rem;
      line-height: 4.066875rem;
    }
  }

  .reasonWrapper {
    margin-top: 3vh;

    .denyForm {
      margin-top: 1rem;

      .inputHolder {
        display: flex;
        align-items: center;
        gap: 0.25rem;
      }

      label {
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 1.634375rem;
      }

      input[type='radio'] {
        width: 1rem;
        height: 1rem;
      }
    }

    .buttonHolder {
      margin-top: 5vh;

      button {
        cursor: pointer;
        border-radius: 32px;
        padding: 1rem 2rem 1rem 2rem;
        background: ${(props) => props.theme['main-light']};

        font-size: 1rem;
        color: #252525;
        font-weight: 400;
        line-height: 1.361875rem;
        text-align: center;
}    }
  }

  .logoArt {
    height: 62.4vh;
    width: 62.4vh;
    position: absolute;
    bottom: 12.6vh;
    right: 0px;
    z-index: 0;
  }
`
export const TitleTriangle = styled(BsExclamationTriangleFill)`
  font-size: 2.625rem;
`
