import { styled } from 'styled-components'
import { AiOutlineTool } from 'react-icons/ai'

export const BodyWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 10.16vh);
  height: fit-content;
  padding-bottom: 5vh;
  background: ${(props) => props.theme['green-gradient']};

  .contentHolder {
    margin-left: 5.6vw;
    padding-top: 7.44vh;
    display: flex;
    flex-direction: column;
  }

  .textsHolder {
    margin-bottom: 6vh;
  }

  .titleHolder {
    h1 {
      display: flex;
      align-items: center;
      font-family: 'open sans', sans-serif;
      font-size: 2.98625rem;
      font-weight: 400;
      line-height: 4.066875rem;
      color: #fefae0ef;
    }
  }
  .subtitleHolder {
    margin: 0;

    h2 {
      font-family: 'open sans', sans-serif;
      font-weight: 400;
      color: #fefae0ef;
      font-size: 2.07375rem;
      line-height: 2.824375rem;
    }
  }

  .cardHolder {
    display: flex;
    flex-direction: row;
    gap: 0.625rem;
    overflow-x: auto;
    padding-bottom: 1rem;
  }

  /* Estilizando a barra d rolagemkkk */
  .cardHolder::-webkit-scrollbar {
    height: 8px;
  }

  .cardHolder::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme['main-light']};
    border-radius: 10px;
  }

  .buttonWrapper {
    margin-top: 11vh;
    button {
      width: 7.36vw;
      height: 6vh;
      padding: 1rem 2rem 1rem 2rem;
      border-radius: 32px;
      background: ${(props) => props.theme['main-light']};
      border: 1px solid ${(props) => props.theme['hover-green']};
      cursor: pointer;

      align-items: center;
      justify-content: center;
      display: flex;

      font-family: 'open sans', sans-serif;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.361875rem;
    }
  }

  .logoArt {
    position: absolute;
    bottom: 12.5vh;
    right: 0;
    height: auto;
    width: auto;
    max-width: 44vw;
    max-height: 62vh;
  }
`
export const TitleTool = styled(AiOutlineTool)`
  font-size: 100%;
`
