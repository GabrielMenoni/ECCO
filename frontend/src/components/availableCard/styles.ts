import styled from 'styled-components'
import {
  BsChevronDoubleRight,
  BsPersonCircle,
  BsStarFill,
  BsPlusSquareDotted,
  BsCashCoin,
} from 'react-icons/bs'

export const Section = styled.section`
  background-color: ${(props) => props.theme['button-green']};
  padding: 0;
  border-radius: 16px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  width: 19vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;

  .dateHolder {
    border-radius: 8px;
    text-align: center;
    font-size: 16px;
    margin: 0.5rem;

    h2 {
      font-family: 'open sans', sans-serif;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.361875rem;
      text-align: center;
      color: white;
    }
  }

  .profileHolder {
    margin-top: 0.5rem;
    margin-left: 1.5rem;
    max-width: 16vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    padding: 1rem 0 1rem 0;
    cursor: pointer;

    h1 {
      font-family: 'open sans', sans-serif;
      font-size: 1.125rem;
      color: #fff;

      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }

  .infosWrapper {
    margin-left: 1.5rem;
    border-radius: 8px;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    p {
      font-family: 'open sans', sans-serif;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.361875rem;
      text-align: left;
      color: white;
      display: flex;
      align-items: center;
    }

    .ratingWrapper {
      gap: 0.625rem;
    }

    .cashWrapper {
      gap: 1rem;
    }
  }

  .buttonHolder {
    text-align: center;
    margin-top: 1rem;
    width: 19vw;
    height: 6.25vh;
    border: 1px solid ${(props) => props.theme['button-green']};
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;

    button {
      background-color: #fefae0ef;
      width: 100%;
      height: 100%;
      font-size: 0.875rem;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;

      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      border-bottom-left-radius: 16px;
      border-bottom-right-radius: 16px;

      gap: 0.5rem;
      font-family: 'open sans', sans-serif;
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 1.634375rem;
      text-align: center;

      &:hover {
        background-color: #e1e5d1;
      }

      &:active {
        background-color: #cbd4af;
      }
    }
  }
`
export const ArrowProfile = styled(BsChevronDoubleRight)`
  font-size: 1.5rem;
  color: white;
`
export const RatingStar = styled(BsStarFill)`
  font-size: 1.5rem;
  color: white;
`
export const IconProfile = styled(BsPersonCircle)`
  font-size: 1rem;
`
export const PlusSign = styled(BsPlusSquareDotted)`
  font-size: 1.5rem;
  border: 1px solid ${(props) => props.theme['green-400']};
`
export const CashCoin = styled(BsCashCoin)`
  font-size: 1.5rem;
`
