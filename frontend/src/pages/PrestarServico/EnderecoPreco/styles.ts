import styled from 'styled-components'

export const PageWrapper = styled.div`
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
    width: 6.625rem;
    padding: 1rem;
  }

  .buttonsHolder {
    display: flex;
    position: relative;
    top: 12vh;
    width: 31.875rem;
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
  border: 1px solid white;
  width: 100%;
  padding: 0.625rem;
  gap: 0.625rem;
  border-radius: 16px;
  opacity: 0px;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: row;

  .PriceRange {
    height: 100%;
    font-family: 'open-sans', sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.635rem;
    text-align: left;
  }

  .singePrice {
    height: 4.063rem;
    font-family: 'open-sans', sans-serif;
    font-size: 2.074rem;
    font-weight: 400;
    line-height: 2.824rem;
    text-align: left;
  }
`
