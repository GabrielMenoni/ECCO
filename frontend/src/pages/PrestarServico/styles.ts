import styled from 'styled-components'
import { SlWrench } from 'react-icons/sl'

export const PageWrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 10.16vh);
  background: linear-gradient(180deg, #3a5a40 0%, #263a2a 51.5%);
  font-family: 'open sans', sans-serif;
  font-weight: 400;
  padding: 0 5.56vw;

  h1 {
    display: flex;
    height: 9.47vh;
    padding-top: 2.5vh;
    color: #fefae0ef;
    font-size: 3rem;
    font-weight: 400;
    align-items: center;
    gap: 20px;
  }

  .logoArt {
    height: 62.4vh;
    width: 62.4vh;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 0;
  }

  .Title {
    display: flex;
    gap: 8.75vw;
    align-items: end;

    h1 {
      margin-top: 9.38vh;
    }

    p {
      font-size: 2.1rem;
      color: white;
      text-decoration: underline;
      text-decoration-thickness: 1px;
      text-underline-offset: 7px;
    }
  }

  .daysSelected {
    margin-top: 3vh;
    font-size: 1.5rem;
    color: rgba(254, 250, 224, 0.94);
  }

  .showDates {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: fit-content;
    height: 11vh;
    font-size: 1.5rem;
    color: rgba(254, 250, 224, 0.94);
  }

  .showDate p {
    width: fit-content;
    margin-right: 4vw;
  }

  h2 {
    margin-top: 2.57vh;
    font-size: 3rem;
    color: white;
    font-weight: 400;
  }
`

export const ContentWrapper = styled.form`
  display: flex;
  margin-top: 4vh;
  gap: 4.86vw;

  .selections {
    margin-left: 1.18vw;
  }

  .types {
    width: 26vw;
    position: relative; /* Adicione isto para posicionar o dropdown corretamente */

    p {
      color: ${(props) => props.theme.white};
      font-size: 1.2rem;
    }

    button {
      width: 100%;
      height: 6.15vh;
      display: flex;
      align-items: center;
      justify-content: space-around;
      background: rgba(254, 250, 224, 1);
      font-size: 1.4rem;
      border: 1px solid #252e24;
      border-radius: 8px;
      position: relative;
      cursor: pointer;
    }

    .categoryButton {
      margin-bottom: 3.13vh;
    }

    .subCategoryButton {
      margin-bottom: 3.13vh;
    }
  }

  .dates {
    margin-top: 3.8vh;
    width: 35.42vw;
    height: 28.9vh;
    justify-content: center;
    overflow-y: auto;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;

    .notScroll {
      &:first-child {
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
      }

      &:last-child {
        border-bottom-left-radius: 16px;
        border-bottom-right-radius: 16px;
      }

      &:first-child:last-child {
        border-radius: 16px;
      }
    }

    .scroll {
      border-radius: 0px;
    }

    .date {
      display: flex;
      width: 100%;
      height: 7.225vh;
      background: #4a664f;
      color: white;
      align-items: center;

      p {
        display: flex;
        width: 6.73vw;
        height: 4.59vh;
        margin-left: 4.65vw;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        background: #9acda3;
        border-radius: 16px;
        box-shadow: 2px 11px 15px -3px rgba(0, 0, 0, 0.2);
      }

      .inputs {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: auto;
        margin-right: 3.9vw;

        input {
          width: 20px;
          height: 20px;
          background: transparent;
          border: 1px solid #f1faee;
          margin-right: 10px;
        }

        label {
          font-size: 1.5rem;
          margin-right: 2vw;
        }
      }
    }
  }

  /* Estilizando a barra de rolagem */
  .dates::-webkit-scrollbar {
    width: 12px;
  }

  /* Estilizando a trilha da barra de rolagem */
  .dates::-webkit-scrollbar-track {
    background: #4a664f;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
  }

  /* Estilizando o thumb (a parte que se move) da barra de rolagem */
  .dates::-webkit-scrollbar-thumb {
    background: #fefae0ef;
    border-radius: 10px;
  }

  /* Estilizando o thumb ao passar o mouse sobre ele */
  .dates::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .calendar {
    display: flex;
    flex-direction: column;
    width: 35.4vw;

    p {
      color: ${(props) => props.theme.white};
      font-size: 1.5rem;
      margin-bottom: 16px;
    }

    section {
      border-radius: 16px;
      box-shadow: 0px 100px 80px 0px #00000012;
    }
  }

  .navButtons {
    position: absolute;
    top: 83vh;
    left: 7.92vw;
    width: 75.76vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 5;
  }
`
export const BaseDropdownMenu = styled.div`
  position: absolute;
  left: 0;
  background-color: transparent;
  border-radius: 16px;
  overflow: hidden;
  border: none;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
  width: 100%;

  button {
    display: block;
    width: 100%;
    padding: 10px;
    border: none;
    background: none;
    text-align: left;
    border-radius: 0 !important;
    cursor: pointer;

    &:hover {
      background-color: #f0f0f0;
    }
  }
`

export const PriceForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 45.56vw;
  height: 17vh;
  margin-top: 5vh;
  gap: 1.64vh;
  color: rgba(154, 205, 163, 1);
  font-size: 1.5rem;

  input[type='number'] {
    appearance: inherit;
    -moz-appearance: textfield; /* Firefox */
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none; /* Chrome, Safari */
  }

  input[type='radio'] {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }

  .fixed {
    display: flex;
    width: 100%;
    height: 5.6vh;
    align-items: center;

    input[type='number'] {
      margin-left: auto;
      margin-right: 4.8vw;
      width: 11.1vw;
      height: 4.1vh;
      text-align: center;
      color: black;
      border: 1px solid rgba(91, 91, 91, 1);
      border-radius: 16px;
      font-size: 1rem;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      appearance: inherit;
    }
  }

  .range {
    display: flex;
    width: 100%;
    height: 9.76vh;
    align-items: center;

    .slider {
      width: 20.84vw;
      height: 100%;
      margin-left: auto;
    }

    .sliderInputDiv {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: rgba(241, 250, 238, 1);

      input {
        width: 8.4vw;
        height: 4.69vh;
        background: transparent;
        border: 1px solid rgba(241, 250, 238, 1);
        border-radius: 16px;
        padding: 10px 12px 10px 12px;
        text-align: center;
        color: rgba(241, 250, 238, 1);
        font-size: 1rem;
      }
    }

    .price-slider {
      display: flex;
      align-items: center;
      width: 100%;
      height: 9.76vh;
      height: 50px;
      margin-left: auto;

      .sliderTrack {
        height: 1vh;
        background: rgba(241, 250, 238, 1);
        border-radius: 5px;
      }

      .sliderTrack-1 {
        background: rgba(95, 134, 102, 1);
      }

      .sliderThumb {
        width: 2.35vh;
        height: 2.35vh;
        background: rgba(95, 134, 102, 1);
        border-radius: 50%;
        border: 4px solid rgba(255, 255, 255, 1);
      }
    }
  }

  .navButtons {
    width: 45.56vw;
    margin-top: 4.2vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 5;
  }
`

export const CategoryDropdownMenu = styled(BaseDropdownMenu)`
  top: 42%;
`

export const SubCategoryDropdownMenu = styled(BaseDropdownMenu)`
  top: 100%;
`

export const WrenchIcon = styled(SlWrench)`
  font-size: 3rem;
`
