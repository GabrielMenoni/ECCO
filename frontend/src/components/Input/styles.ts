import styled from 'styled-components'
import { BsEye, BsEyeSlash } from 'react-icons/bs'

export const PasswordContainer = styled.input`
  input.invalid {
    border: 0.8px solid ${(props) => props.theme.error};
  }

  input:focus {
    background-color: ${(props) => props.theme.black};
  }
`
export const DivInput = styled.div`
  background-color: #e2e2e2;
  width: 27rem;
  height: 3rem;
  border-radius: 8px;
  border: 0.8px solid #5b5b5b;
  padding: 0px 3.125rem 0px 0.625rem;
  position: relative;

  * {
    outline: 0;
  }

  &::placeholder {
    color: black;
    opacity: 1;
  }

  input {
    font-size: 1rem;
    display: flex;
    position: absolute;
    left: 0px;
    border-radius: 8px;
    width: 24.6875rem;
    height: 3rem;
    padding: 0px 3.125rem 0px 0.625rem;
    border: none;
    background: transparent;
  }

  .noIcon {
    width: 27rem;
    height: 3rem;
  }

  button {
    position: absolute;
    right: 0.5rem;
    top: 1rem;
    border: none;
    cursor: pointer;
    background: transparent;
  }
`

export const EyeIcon = styled(BsEye)`
  font-size: 1rem;
`

export const EyeSlashIcon = styled(BsEyeSlash)`
  font-size: 1rem;
`
