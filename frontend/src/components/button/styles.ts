import styled from 'styled-components'
import {
  BsPlusSquareDotted,
  BsArrowLeftShort,
  BsArrowRightShort,
  BsPencil,
  BsPersonFill,
  BsXSquare,
  BsFillCheckSquareFill,
} from 'react-icons/bs'
import {
  AiOutlineSend,
  AiOutlineWarning,
  AiOutlineLogout,
} from 'react-icons/ai'
import { FaPlay } from 'react-icons/fa'

// Button Bases
const ButtonBase = styled.button`
  border-radius: 32px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  border: 0px;
  cursor: pointer;
`

const navigationButtonBase = styled(ButtonBase)`
  border-radius: 16px;
  padding: 8px;
  background-color: rgba(209, 209, 209, 1);
  font-size: 1.44rem;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: rgba(226, 226, 226, 1);
  }
`

const OfferButtonBase = styled(ButtonBase)`
  color: ${(props) => props.theme.white};
  border: none;
  padding: 0;
`

const WideButtonsBase = styled(ButtonBase)`
  background-color: ${(props) => props.theme['button-green']};
  border-radius: 16px;
  color: ${(props) => props.theme.white};
`

const primaryBase = styled.button`
  font-size: 1rem;
  border-radius: 32px;
  background-color: rgba(95, 134, 102, 1);
  color: rgba(255, 255, 255, 1);
  transition: background-color 0.3s ease-in-out;
  border: none;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    background-color: rgba(154, 205, 163, 1);
  }

  &:active {
    background-color: rgba(62, 89, 67, 1);
  }
`

const secondaryBase = styled.button`
  font-size: 1rem;
  border-radius: 32px;
  background-color: transparent;
  color: black;
  transition: background-color 0.3s ease-in-out;
  transition: border 0.3s ease-in-out;
  border: 1px solid rgba(95, 134, 102, 1);
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    background-color: rgba(241, 250, 238, 1);
    border: 1px solid rgba(154, 205, 163, 1);
  }

  &:active {
    background-color: rgba(154, 205, 163, 1);
    border: 1px solid rgba(62, 89, 67, 1);
  }
`

// End of buttons Base

// icons
export const PlusSquareIcon = styled(BsPlusSquareDotted)`
  font-size: 1.5rem;
`

export const BackIcon = styled(BsArrowLeftShort)`
  font-size: 1.5rem;
`

export const nextIcon = styled(BsArrowRightShort)`
  font-size: 1.5rem;
`

export const AiOutlineSendIcon = styled(AiOutlineSend)`
  font-size: 1.5rem;
`

export const FaPlayIcon = styled(FaPlay)`
  font-size: 1.4rem;
`

export const BsPencilIcon = styled(BsPencil)`
  font-size: 1.5rem;
`

export const BsPersonFillIcon = styled(BsPersonFill)`
  font-size: 1.5rem;
`

export const AiOutlineWarningIcon = styled(AiOutlineWarning)`
  font-size: 1.5rem;
`

export const AiOutlineLogoutIcon = styled(AiOutlineLogout)`
  font-size: 1.5rem;
`

export const BsXSquareIcon = styled(BsXSquare)`
  font-size: 1.5rem;
`

export const BsFillCheckSquareFillIcon = styled(BsFillCheckSquareFill)`
  font-size: 1.5rem;
`

// End of icons

// Specific buttons
export const primaryButton = styled(primaryBase)`
  width: 7.125rem;
  height: 3.125rem;
`

export const primaryExtendedButton = styled(primaryBase)`
  width: 15.94rem;
  height: 3.4rem;
`

export const secondaryButton = styled(secondaryBase)`
  width: 8.625rem;
  height: 3.375rem;
`

export const secondaryExtendedButton = styled(secondaryBase)`
  width: 15.94rem;
  height: 3.4rem;
`

export const OfferButtonEsq = styled(OfferButtonBase)`
  background: rgba(95, 134, 102, 1);
  font-size: 1.2rem;
  border-radius: 32px;
  width: 9.81rem;
  height: 2.88rem;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: rgba(58, 90, 64, 1);
  }

  &:active {
    background: linear-gradient(180deg, #3a5a40 0%, #263a2a 51.5%);
  }
`

export const OfferButtonDir = styled(OfferButtonBase)`
  width: 8.38rem;
  height: 2.5rem;
  font-size: 1rem;
  border-radius: 16px;
  background-color: rgba(95, 134, 102, 1);
  color: white;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${(props) => props.theme['hover-green']};
  }

  &:active {
    color: ${(props) => props.theme['green-400']};
  }
`

export const ButtonsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
`

export const BackButton = styled(navigationButtonBase)`
  width: 9.25rem;
  height: 4rem;
`

export const nextButton = styled(navigationButtonBase)`
  width: 8.69rem;
  height: 3.94rem;
`

export const RatingButton = styled(WideButtonsBase)`
  width: 10.5rem;
  height: 2.5rem;
  font-size: 1rem;
  background-color: rgba(95, 134, 102, 1);
  color: white;
  transition: color 0.3s ease-in-out;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    color: black;
    background-color: rgba(154, 205, 163, 1);
  }

  &:active {
    color: white;
    background-color: rgba(58, 90, 64, 1);
  }
`

export const JumpSubcategoryButton = styled(WideButtonsBase)`
  width: 13.25rem;
  height: 3.5rem;
  font-size: 1rem;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: rgba(154, 205, 163, 1);
  }

  &:active {
    color: rgba(37, 46, 36, 1);
  }
`

export const JumpSubcategoryBiggerButton = styled(WideButtonsBase)`
  width: 16.625rem;
  height: 3.1875rem;
  font-size: 1.5rem;
  transition: background-color 0.3s ease-in-out;
  transition: color 0.3s ease-in-out;

  &:hover {
    background-color: rgba(226, 226, 226, 0.46);
    color: rgba(154, 205, 163, 1);
  }

  &:active {
    background-color: rgba(154, 205, 163, 0.51);
    color: rgba(37, 46, 36, 1);
  }
`

export const EditPasswordButton = styled.button`
  width: 12.5rem;
  height: 2.5rem;
  border: none;
  border-radius: 16px;
  background-color: rgba(95, 134, 102, 1);
  color: white;
  font-size: 1rem;
  transition: background-color 0.3s ease-in-out;
  transition: color 0.3s ease-in-out;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: rgba(154, 205, 163, 1);
    color: black;
  }

  &:active {
    background-color: rgba(58, 90, 64, 1);
    color: white;
  }
`

export const DeleteAccountButton = styled(EditPasswordButton)`
  width: 12.19rem;
`

export const EditDataButton = styled(EditPasswordButton)`
  width: 11.75rem;
`

export const LogOutButton = styled(EditPasswordButton)`
  width: 6.5rem;
  height: 2.5rem;
  padding: 4px;
`

export const DenyServiceButton = styled.button`
  width: 18.94rem;
  height: 3rem;
  border: none;
  border-radius: 8px;
  background-color: rgba(254, 250, 224, 0.94);
  color: rgba(140, 0, 0, 1);
  font-size: 1.2rem;
  padding: 8px;

  &:hover {
    background-color: rgba(241, 250, 238, 1);
  }

  &:active {
    background-color: rgba(255, 0, 0, 1);
  }
`

export const AcceptServiceButton = styled.button`
  width: 18.94rem;
  height: 3rem;
  border-radius: 8px;
  padding: 8px;
  background-color: rgba(241, 250, 238, 1);
  font-size: 1.2rem;
  border: none;

  &:hover {
    background-color: rgba(254, 250, 224, 0.94);
  }

  &:active {
    background-color: rgba(154, 205, 163, 1);
  }
`

export const RequestServiceButton = styled.button`
  width: 14rem;
  height: 4rem;
  border-radius: 8px;
  border: 1px solid rgba(95, 134, 102, 1);
  background-color: rgba(255, 255, 255, 1);
  color: rgba(62, 89, 67, 1);
  font-size: 1.2rem;

  &:hover {
    background-color: rgba(154, 205, 163, 1);
  }

  &:active {
    background-color: rgba(95, 134, 102, 1);
  }
`

// End of specific buttons
