import { styled } from 'styled-components'
import { BsPersonFill, BsChat, BsHammer, BsList } from 'react-icons/bs'
import { AiOutlineTool } from 'react-icons/ai'
import { BiLogOut } from 'react-icons/bi'

export const IconePerfil = styled(BsPersonFill)`
  width: 0.82625rem;
  height: 1rem;
`
export const IconeServicos = styled(AiOutlineTool)`
  width: 1.17rem;
  height: 1.17rem;
`
export const IconeChat = styled(BsChat)`
  width: 1.3125rem;
  height: 1.3125rem;
  padding: 0.081875rem 0px 0.005625rem 0px;
`
export const IconeFinalizados = styled(BsHammer)`
  width: 1.466875rem;
  height: 1.279375rem;
  top: 0.09375rem;
`
export const IconeLogout = styled(BiLogOut)`
  width: 1.0625rem;
  height: 1.0625rem;
  rotate: 100%;
`

export const MenuWrapper = styled.div`
  display: flex;
  width: 3.75rem;
  height: 1.5rem;
  color: ${(props) => props.theme.white};
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 0.69rem;
  align-items: center;
  justify-content: center;
  margin-left: 3px;
  cursor: pointer;
`
export const DropdownWrapperMenu = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 7.03vh;
  left: calc(9vw);
  width: 13.5rem;
  height: auto;
  background-color: ${(props) => props.theme.white};
  border-radius: 8px;
  z-index: 5;

  div {
    width: 13.5rem;
    height: 2rem;
    color: ${(props) => props.theme.black};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: 0.833125rem;
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

export const MenuIcon = styled(BsList)`
  font-size: 1.5rem;
  cursor: pointer;
`
