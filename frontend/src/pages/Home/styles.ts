import { styled } from 'styled-components'
import { AiOutlineLike } from 'react-icons/ai'
import { BsCalendar4, BsSun } from 'react-icons/bs'

export const BodyWrapper = styled.div`
  width: 100%;
  height: fit-content;
  min-height: calc(100vh - 10.16vh);
  background: ${(props) => props.theme['green-gradient']};
  padding-bottom: 4vh;

  .carouselWrapper {
    padding-left: 5.2vw;
    padding-top: 4vh;
  }

  .infosWrapper {
    display: flex;
    flex-direction: column;
    width: auto;
    height: 25.46vh;
    gap: 2.34vh;
    color: ${(props) => props.theme.white};
    margin-left: 5.2vw;
    margin-top: 5vh;
  }

  .info {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    font-size: 1.2rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    align-items: center;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6.93vh;
    height: 6.93vh;
    background-color: #4fce6f;
    border-radius: 50%;
  }

  .workWrapper {
    display: flex;
    align-items: center;
    width: auto;
    height: 19.55vh;
    gap: 3.5rem;
    margin-left: 5.56vw;
    margin-top: 5.76vh;
  }

  .workCard {
    position: relative;
    width: 30rem;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    padding: 2.64vh 3vw 0 1.8vw;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 2rem;
    color: ${(props) => props.theme.white};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  .workCard a {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: rgba(37, 37, 37, 1);
    width: 14.8rem;
    height: 6.93vh;
    background-color: rgba(254, 250, 224, 0.94);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 32px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 1.44rem;
    padding: 0.78vh, 1.67vw, 8px, 0.78vh;
    border: none;
    z-index: 2;
    bottom: 2.38vh;
    right: 1.53vw;
  }

  .workCard a:hover {
    background-color: rgba(254, 250, 224, 1);
  }

  .logoArt {
    height: 62.4vh;
    width: 62.4vh;
    position: absolute;
    bottom: 12.6vh;
    right: 0px;
  }
`

export const LikeIcon = styled(AiOutlineLike)`
  font-size: 4.7vh;
  color: ${(props) => props.theme.white};
`

export const CalendarIcon = styled(BsCalendar4)`
  font-size: 4.7vh;
  color: ${(props) => props.theme.white};
`

export const SunIcon = styled(BsSun)`
  font-size: 4.7vh;
  color: ${(props) => props.theme.white};
`
