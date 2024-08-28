import styled from 'styled-components'

export const DigitInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 25rem;
  height: 6.5rem;
  padding: 0.625rem;
  justify-content: space-between;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;

  /* Remove setas de incremento e decremento Para Chromium e Safari */
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  /* Remove setas de incremento e decremento Para Firefox
     E adiciona propriedade para os inputs */
  input[type='number'] {
    -moz-appearance: textfield;
    appearance: inherit;

    border: 1px solid #5b5b5b;
    width: 3rem;
    height: 4rem;
    border-radius: 8px;
    background-color: #e2e2e2;
    font-size: 3rem;
    text-align: center;
    box-shadow: 0px 17px 22px -5px rgba(0, 0, 0, 0.2);
  }

  input[id='3'] {
    margin-right: 2rem;
  }
`
