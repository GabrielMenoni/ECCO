import styled from 'styled-components'
import { BsPersonCircle, BsArrowDown } from 'react-icons/bs'

export const PageWrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 10.16vh);
  background: linear-gradient(180deg, #3a5a40 0%, #263a2a 51.5%);
  padding: 0 5.55vw;
  font-family: 'open sans', sans-serif;
  color: ${(props) => props.theme.white};

  .contentHolder {
    position: absolute;
    top: 11.7vh;
  }

  .titleHolder {
    h1 {
      font-size: 2.98625rem;
      font-weight: 400;
      line-height: 4.066875rem;
    }
  }

  .rateContent {
    display: flex;
    width: fit-content;
    flex-direction: column;
    align-items: center;
  }

  .serviceWrapper {
    margin-top: 4vh;
    margin-bottom: 3vh;
    width: fit-content;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .profileHolder {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.625rem;
      margin-bottom: 0.5rem;

      h3 {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.361875rem;
        text-align: center;
      }
    }

    h2 {
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 1.634375rem;
      text-align: center;
    }

    .dateHolder {
      margin-top: 0.5rem;
      background: ${(props) => props.theme['button-green']};
      padding: 0.5rem 1.5rem 0.5rem 1.5rem;
      border-radius: 32px;
      box-shadow: 0px 0.25rem 0.25rem 0px #00000050;
    }
  }

  .ratingType {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .subtitleHolder {
    margin-bottom: 3.9vh;

    p {
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 1.634375rem;
      color: #e2e2e2;
    }
  }

  .ratingWrapper {
    width: fit-content;
  }

  .ratingHolder {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme['button-green']};
    width: fit-content;
    padding: 2.44vh 0.2vw;
    border-radius: 32px;
    margin-bottom: 0.5rem;
  }

  .ratingType {
    width: 100%;

    .excelentHolder {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .badHolder {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-left: 0.6875rem;
    }
  }

  .inputHolder {
    margin-top: 3.9vh;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    textarea {
      width: 28vw;
      height: 9.7vh;
      padding: 0.5rem;
      border-radius: 8px;
      box-sizing: border-box;
      opacity: 1;
      font-size: 1rem;
      resize: none;
      font-family: 'Open Sans', sans-serif;
      font-weight: 400;
      line-height: 1.361875rem;
    }

    textarea::placeholder {
      color: black;
    }
    textarea:focus {
      outline: none;
    }
  }

  .buttonHolder {
    margin-top: 3vh;
    button {
      width: 17.7vw;
      height: 5.27vh;
      padding: 1rem 4rem 1rem 4rem;
      gap: 0.5rem;
      border-radius: 32px;
      border: 1px solid ${(props) => props.theme['hover-green']};
      background: ${(props) => props.theme['main-light']};

      font-family: 'Open Sans', sans-serif;
      font-size: 1rem;
      line-height: 1.361875rem;
      color: #252525;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .logoArt {
    height: 62.4vh;
    width: 62.4vh;
    position: absolute;
    bottom: 12.6vh;
    right: 0px;
    z-index: 0;
  }

  @media (max-height: 900px) {
    .titleHolder {
      h1 {
        font-size: 2rem;
        line-height: 2.75rem;
      }
    }

    .serviceWrapper {
      margin-top: 1vh;
      margin-bottom: 0.5vh;
      .profileHolder {
        h3 {
          font-size: 0.875rem;
          line-height: 1.2rem;
        }
      }

      h2 {
        font-size: 1rem;
        line-height: 1.375rem;
      }

      .dateHolder {
        padding: 0.375rem 1.125rem;
      }
    }

    .subtitleHolder {
      margin-bottom: 1.5vh;
      p {
        font-size: 1rem;
        line-height: 1.375rem;
      }
    }

    .inputHolder {
      margin-bottom: 1.5vh;
      textarea {
        height: 12vh;
      }
    }

    .buttonHolder {
      margin-top: 2vh;
      button {
        height: 30px;
      }
    }

    .logoArt {
      height: 40vh;
      width: 40vh;
      bottom: 10vh;
    }
  }
`

export const ProfileImg = styled(BsPersonCircle)`
  font-size: 4rem;
  color: #9acda3;
`
export const ArrowDownIcon = styled(BsArrowDown)`
  font-size: 2rem;
  color: white;
`
