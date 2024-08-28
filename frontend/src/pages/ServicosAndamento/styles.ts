import styled from 'styled-components'
import { SlWrench } from 'react-icons/sl'
import { AiOutlineEdit } from 'react-icons/ai'
import {
  BsPersonCircle,
  BsChevronDoubleRight,
  BsCashCoin,
  BsClock,
  BsXCircle,
  BsCheck2,
  BsChatDots,
  BsEmojiSmile,
  BsFillCheckSquareFill,
  BsXSquare,
} from 'react-icons/bs'

export const PageWrapper = styled.div`
  width: 100vw;
  min-height: calc(100vh - 10.16vh);
  height: fit-content;
  background: linear-gradient(180deg, #3a5a40 0%, #263a2a 51.5%);
  padding-left: 5.56vw;
  padding-top: 1.86vh;
  padding-bottom: 1.86vh;

  .title {
    color: #fefae0ef;
    height: 9.47vh;
    font-size: 3rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
  }

  h3 {
    height: 5.96vh;
    font-size: 2rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    color: #fefae0ef;
  }

  .buttons {
    height: 7.42vh;
    width: 11.8vw;
    display: flex;
    flex-direction: column;
    gap: 0;
    margin-top: 3.9vh;
  }

  .buttons button {
    width: 100%;
    height: 50%;
    background-color: #f1faee;
    border: none;
    border-radius: 16px 16px 0 0;
    font-size: 1rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    cursor: pointer;
    transition: background-color 0.3s ease;
    z-index: 3;

    &:last-child {
      border-radius: 0 0 16px 16px;
      border-top: 1px solid #b8b8b8;
    }
  }

  .buttonActive {
    background-color: #87ae8e !important;
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

export const ServiceCards = styled.div`
  display: flex;
  margin-top: 3.6vh;
  gap: 2.78vw;

  .serviceCard {
    width: 21vw;
    color: ${(props) => props.theme.white};
    z-index: 3;
  }

  .serviceCard p {
    display: flex;
    width: 100%;
    height: 5.18vh;
    align-items: center;
    background: #5f8666;
    padding-left: 0.56vw;
    padding-right: 1vw;
    gap: 8px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 1rem;

    &:first-child {
      border-radius: 16px 16px 0 0;
    }

    &:nth-child(2) {
      gap: 0;
      justify-content: space-between;

      svg {
        cursor: pointer;
      }

      div {
        display: flex;
        gap: 8px;
      }
    }
  }

  .serviceCard button {
    display: flex;
    width: 100%;
    height: 5.18vh;
    align-items: center;
    border: none;
    padding: 0.56vw;
    gap: 8px;
    cursor: pointer;
    color: black;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 1rem;

    &:last-child {
      border-radius: 0 0 16px 16px;
    }
  }

  .cancelService {
    color: #8c0000 !important;
  }
`

export const WrenchIcon = styled(SlWrench)`
  font-size: 2.5rem;
`

export const ChatIcon = styled(BsChatDots)`
  font-size: 1.5rem;
`

export const PersonIcon = styled(BsPersonCircle)`
  font-size: 1.5rem;
`

export const DoubleArrowIcon = styled(BsChevronDoubleRight)`
  font-size: 1.5rem;
`

export const CashIcon = styled(BsCashCoin)`
  font-size: 1.5rem;
`

export const ClockIcon = styled(BsClock)`
  font-size: 1.5rem;
`

export const XIcon = styled(BsXCircle)`
  font-size: 1.5rem;
`

export const CheckIcon = styled(BsCheck2)`
  font-size: 1.5rem;
`

export const SmileIcon = styled(BsEmojiSmile)`
  font-size: 1.5rem;
`

export const CheckFilledIcon = styled(BsFillCheckSquareFill)`
  font-size: 1.5rem;
`

export const XSquareIcon = styled(BsXSquare)`
  font-size: 1.5rem;
`

export const EditIcon = styled(AiOutlineEdit)`
  font-size: 1.5rem;
`
