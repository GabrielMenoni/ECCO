import { styled } from 'styled-components'
import {
  BsChatDots,
  BsPersonCircle,
  BsChevronDoubleRight,
  BsCashCoin,
  BsFillPersonPlusFill,
  BsChatFill,
} from 'react-icons/bs'

export const PageWrapper = styled.div`
  width: 100vw;
  height: auto;
  min-height: calc(100vh - 10.16vh);
  background: linear-gradient(180deg, #3a5a40 0%, #263a2a 51.5%);
  padding-left: 5.56vw;
  padding-right: 5.56vw;
  padding-top: 2.64vh;

  .title {
    color: #fefae0ef;
    height: fit-content;
    font-size: 3rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
  }

  .logoArt {
    height: 62.4vh;
    width: 62.4vh;
    position: absolute;
    bottom: 12.6vh;
    right: 0px;
    z-index: 0;
  }

  h3 {
    height: 5.96vh;
    margin-top: 2.34vh;
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
`

export const ChatsWrapper = styled.div`
  display: flex;
  width: 88.88vw;
  overflow-x: hidden;
  flex-wrap: wrap;
  margin-top: 3.6vh;
  padding-bottom: 3.6vh;
  gap: 2.78vw;

  .serviceCard {
    width: 20vw;
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

      svg {
        cursor: pointer;
        margin-left: auto;
      }
    }

    div {
      display: flex;
      gap: 8px;
      align-items: center;
    }
  }

  .serviceCard .serviceDate {
    color: rgba(255, 255, 255, 0.4);
  }

  .serviceCard a {
    display: flex;
    width: 100%;
    height: 5.18vh;
    align-items: center;
    background: white;
    text-decoration: none;
    border: none;
    padding: 0.56vw;
    gap: 8px;
    cursor: pointer;
    color: rgba(37, 46, 36, 1);
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 1rem;

    &:last-child {
      border-radius: 0 0 16px 16px;
    }
  }
`

export const ChatIcon = styled(BsChatDots)`
  color: #fefae0ef;
  font-size: 3rem;
  margin-left: 1.5vw;
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
export const NewChatIcon = styled(BsFillPersonPlusFill)`
  font-size: 1.5rem;
`

export const ChatIconFill = styled(BsChatFill)`
  font-size: 1.5rem;
`
