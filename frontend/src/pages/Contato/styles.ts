import styled from 'styled-components'
import {
    BsEnvelope,
    BsFacebook,
    BsInstagram,
    BsTelephone,
} from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

export const PageWrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 10.16vh);
  background: linear-gradient(180deg, #3a5a40 0%, #263a2a 51.5%);
  padding-left: 5.56vw;
  padding-top: 10.94vh;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);

  .logoArt {
    height: 62.4vh;
    width: 62.4vh;
    position: absolute;
    bottom: 12.6vh;
    right: 0px;
    z-index: 0;
  }

  .title {
    display: flex;
    align-items: center;
    width: fit-content;
    font-size: 3rem;
    color: rgba(254, 250, 224, 0.94);
    gap: 1rem;
    z-index: 5;
  }

  .infosWrapper {
    margin-left: 4.45vw;
    margin-top: 5.27vh;
    display: flex;
    width: fit-content;
    flex-direction: column;
    gap: 6vh;
    font-size: 1.5rem;
    z-index: 5;
  }

  .infos {
    display: flex;
    flex-direction: column;
    gap: 3vh;
    font-size: 1.5rem;
    width: fit-content;

    a {
      display: flex;
      align-items: center;
      width: fit-content;
      text-decoration: none;
      gap: 10px;
      color: white;
    }
  }

  button {
    margin-top: 7.81vh;
    margin-left: 37.7vw;
    z-index: 5;
  }
`

export const EnvelopeIcon = styled(BsEnvelope)`
  font-size: 3rem;
`

export const FacebookIcon = styled(BsFacebook)`
  font-size: 2.5rem;
  color: #5f8666;
`

export const InstagramIcon = styled(BsInstagram)`
  font-size: 2.5rem;
  color: #5f8666;
`

export const TelephoneIcon = styled(BsTelephone)`
  font-size: 2.5rem;
  color: #5f8666;
`

export const MailIcon = styled(AiOutlineMail)`
  font-size: 2.5rem;
  color: #5f8666;
`
