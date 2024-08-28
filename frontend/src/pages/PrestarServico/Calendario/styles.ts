import styled from 'styled-components'

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
  padding: 9.17vh 0 0 0;
  /*   gap: 4.86vw;
 */
  .selections {
    margin-left: 1.18vw;

    h2 {
      font-size: 33.18px;
      font-weight: 700;
      line-height: 45.19px;
      text-align: right;
      text-decoration: underline;
    }
  }
  .dates {
    margin-top: 3.8vh;
    width: 35.42vw;
    height: 28.9vh;
    justify-content: center;
    gap: 3rem;
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
      margin-bottom: 3rem;
      display: flex;
      width: 100%;
      color: white;
      align-items: center;

      p {
        color: black;
        display: flex;
        padding: 0.5rem 1rem;
        margin-left: 4.65vw;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        background: #9acda3;
        border-radius: 16px;
        box-shadow: 2px 11px 15px -3px rgba(0, 0, 0, 0.2);

        font-size: 2.07375rem;
        font-weight: 400;
        line-height: 2.824375rem;
      }

      .inputs {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 1.9vw;
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

  .calendar {
    display: flex;
    flex-direction: column;
    width: 35.4vw;

    p {
      color: ${(props) => props.theme.white};
      margin-bottom: 16px;
      font-size: 39.81px;
      font-weight: 400;
      line-height: 54.21px;
      width: 42.7vw;
    }

    section {
      border-radius: 16px;
      box-shadow: 0px 100px 80px 0px #00000012;
    }
  }

  .navButtons {
    position: absolute;
    top: 86vh;
    left: 5.56vw;
    width: 35.4vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 5;
  }
`

export const PageWrapper2 = styled.div`
  width: 100%;
  height: calc(100vh - 10.16vh);
  background: linear-gradient(180deg, #3a5a40 0%, #263a2a 51.5%);
  padding: 0 5.55vw;
  overflow: hidden;

  input {
    margin-right: 0.625rem;
    margin-bottom: 0.625rem;
    background-color: #e2e2e2;
    height: 2.625rem;
    border-radius: 8px;
    border: 0.05rem solid #5b5b5b;
    padding: 0 0 0 0.625rem;
  }

  ::placeholder {
    color: black;
    opacity: 1;
  }

  .fullAdress {
    position: absolute;
    top: 17.125rem;
    left: 5rem;
  }
  .fullAdress h3 {
    font-family: 'open-sans', sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.635rem;
    text-align: left;
    color: ${(props) => props.theme.white};
  }
  .inputsHolder {
    margin-top: 1.125rem;
    gap: 0.625rem;
  }

  .titleWrapper {
    width: 38.438rem;
    height: 6.75rem;
    position: absolute;
    top: 10vh;
    left: 5vw;
  }
  .cepInput {
    width: 10.813rem;
  }
  .bairroInput {
    width: 9.25rem;
  }
  .cidadeInput {
    width: 10.813rem;
  }
  .ruaInput {
    width: 26rem;
  }
  .numInput {
    width: 6.25rem;
  }

  .priceTag h1 {
    font-size: 2.488rem;
    line-height: 3.388rem;
    text-align: left;
  }

  .priceTag {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
  .priceHolder {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }

  .subtitleWrapper {
    position: absolute;
    width: 17.75rem;
    height: 2.813rem;
    top: 21vh;
    left: 54vw;
  }
  h1 {
    font-family: 'open sans', sans-serif;
    color: ${(props) => props.theme.white};
    padding-top: 5.47vh;
    padding-bottom: 5.08vh;
    font-size: 2.488rem;
    font-weight: 400;
    text-align: left;
  }

  h2 {
    width: 17.75rem;
    height: 2.813rem;
    font-family: 'open sans', sans-serif;
    color: ${(props) => props.theme.white};
    font-size: 2.074rem;
    font-weight: 700;
    line-height: 2.824rem;
    text-align: left;
    border-bottom: 1px solid;
  }

  button {
    height: 3.375rem;
    gap: 0.5rem;
    border-radius: 32px;
    border: none;
    background-color: #f1faee;
  }
  .buttonsHolder .SolicitarButton {
    cursor: pointer;
    padding: 1rem 2rem;
    white-space: nowrap;
  }
  .buttonsHolder .VoltarButton {
    cursor: pointer;
    width: 8.75rem;
    padding: 1rem;
  }

  .buttonsHolder {
    display: flex;
    position: relative;
    top: 12vh;
    width: fit-content;
    height: 100%;
    gap: 20.6vw;
  }

  form {
    margin-top: 1.25rem;
    display: flex;
    gap: 0.69vw;
  }

  .logoArt {
    height: 39rem;
    width: 39rem;
    position: relative;
    top: 38.6vh;
    left: 65vw;
  }
`
export const PriceHolder = styled.div`
  display: flex;
  width: 100%;
  gap: 0.625rem;
  border-radius: 16px;
  opacity: 0px;
  align-items: center;
  text-align: center;
  flex-direction: row;

  .PriceRange {
    font-family: 'open-sans', sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.635rem;
    text-align: left;
    margin: 0;
    background: transparent;
    border: 1px solid white;
    color: white;
    border-radius: 16px;

    &::placeholder {
      color: white;
    }
  }

  .singlePrice {
    width: 60%;
    margin: 0;
    font-family: 'open-sans', sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1rem;
    text-align: left;
    border: 1px solid white;
    background: transparent;
    color: white;

    &::placeholder {
      color: white;
    }
  }
`
