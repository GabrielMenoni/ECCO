import { styled } from 'styled-components'
import { BsBell } from 'react-icons/bs'

export const BellIcon = styled(BsBell)`
  font-size: 1.5rem;
  color: ${(props) => props.theme.white};
  margin-right: 5.9vw;
  cursor: pointer;
`

export const DropDownWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 7.03vh;
  right: calc(0.5vw);
  width: 11.81vw;
  height: auto;
  background-color: ${(props) => props.theme.white};
  border-radius: 8px;
  z-index: 5;

  div {
    width: 100%;
    height: 7.13vh;
    color: ${(props) => props.theme.black};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    font-size: 1.5rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    padding-top: 0.78vh;
    padding-bottom: 0.78vh;
    padding-left: 1.1vw;
    padding-right: 1.1vw;

    &:first-child {
      border-top: none;
      height: 3.9vh;
    }

    p {
      font-size: 0.83rem;
      text-align: center;
    }
  }
`
