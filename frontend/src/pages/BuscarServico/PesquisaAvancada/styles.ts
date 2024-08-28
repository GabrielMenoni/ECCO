import styled from 'styled-components'
import { IoIosArrowUp } from 'react-icons/io'

export const PageWrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 10.16vh);
  background: linear-gradient(180deg, #3a5a40 0%, #263a2a 51.5%);
  padding: 0 5.55vw;
  font-family: 'open sans', sans-serif;
  font-weight: 400;

  h1 {
    font-family: 'open sans', sans-serif;
    font-weight: 400;
    font-size: 3rem;
    color: ${(props) => props.theme.white};
    padding-top: 5.47vh;
    padding-bottom: 5.08vh;
  }

  .serviceWrapper {
    display: flex;
    flex-direction: row;
  }

  .infos {
    display: flex;
    gap: 0.69vw;
  }

  .infos h3 {
    display: flex;
    width: 26vw;
    height: 6.15vh;
    background: rgba(254, 250, 224, 0.94);
    font-family: 'open sans', sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    justify-content: center;
    align-items: center;
    gap: 1.1vw;
    border-radius: 8px;
    z-index: 2;
  }

  .infos .infoCalendar {
    width: 35.42vw;
    border-radius: 8px 8px 0 0;
  }

  form {
    display: flex;
    gap: 0.69vw;
  }

  button {
    position: absolute;
    bottom: 12.6vh;
    right: 8.9vw;
    z-index: 2;
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

export const ArrowUpIcon = styled(IoIosArrowUp)`
  font-size: 1rem;
`

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5vh;
  padding-top: 0.5vh;
`

export const RadioButton = styled.label<{ checked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26vw;
  height: 6.15vh;
  border: 1px solid rgba(37, 46, 36, 1);
  border-radius: 8px;
  background-color: ${({ checked }) => (checked ? '#fbee9d' : '#FEFAE0EF')};
  color: black;
  font-family: 'open sans', sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  z-index: 2;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;
`

export const RadioInput = styled.input`
  display: none;
`
