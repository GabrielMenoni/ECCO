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
  width: 18.5vw;
  padding: 1rem 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;

  .dateHolder {
    display: flex;
    justify-content: flex-start;
    margin-left: 1rem;
    h2 {
      font-family: 'open-sans', sans-serif;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.361875rem;
      text-align: center;
      color: white;
    }
  }

  .profileHolder {
    margin: 1.5rem 0 1.5rem 1rem;
    max-width: 16vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 0.828125rem;

    h1 {
      font-size: 1.125rem;
      color: #fff;
    }
  }

  .infosWrapper {
    margin-left: 1rem;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    p {
      font-family: 'open-sans', sans-serif;
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
`
export const ArrowProfile = styled(BsChevronDoubleRight)`
  font-size: 1.5rem;
  color: white;
`
export const IconProfile = styled(BsPersonCircle)`
  font-size: 1rem;
`
