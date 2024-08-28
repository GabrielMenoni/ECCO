import { styled } from 'styled-components'
import { BsSearch } from 'react-icons/bs'

export const SearchInput = styled.input`
  width: 25vw;
  height: 3.9vh;
  border-radius: 16px 0px 0px 16px;
  border: none;
  padding: 8px 16px;
  font-size: 1rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  color: #707070;
  margin-left: 5.76vw;

  &:focus {
    outline: none;
  }
`

export const SearchButton = styled.button`
  background-color: ${(props) => props.theme.white};
  border: none;
  width: 2.78vw;
  height: 3.9vh;
  border-radius: 0px 16px 16px 0px;
  align-items: center;
  justify-content: center;
`

export const SearchIcon = styled(BsSearch)`
  font-size: 24px;
  color: #616161;
  cursor: pointer;
`
