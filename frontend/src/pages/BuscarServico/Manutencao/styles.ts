import styled from 'styled-components'

export const BackgroundWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 10.16vh);
  background: ${(props) => props.theme['green-gradient']};
  position: absolute;
  z-index: -10;

  img {
    width: 206px;
    height: 211px;
    margin-top: 33px;
    margin-bottom: 5px;
    border-radius: 32px;
    object-fit: cover;
  }

  .imagemEletricos {
    object-fit: calc(200px);
  }

  .desenhoLinhas img {
    position: absolute;
    width: 39.9375rem;
    height: 39.9375rem;
    top: 411px;
    left: 848px;
    right: 0px;
    z-index: -1;
    object-fit: contain;
  }

  .clickImage {
    display: block;
    height: 100%;
    width: 100%;
    text-decoration: none;
  }

  .imageHolder {
    width: 259px;
    height: 290px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 32px;
    background-color: ${(props) => props.theme['green-400']};
  }

  .textImage {
    width: 208px;
    height: 31px;
    margin-bottom: 10px;
  }

  .textImage h5 {
    font-family: 'Open Sans', sans-serif;
    font-size: 23.04px;
    font-weight: 400;
    line-height: 31.38px;
    text-align: center;
    color: ${(props) => props.theme.white};
  }
  .textImage h6 {
    color: ${(props) => props.theme.white};
    font-family: 'Open Sans', sans-serif;
    font-size: 19.2px;
    font-weight: 400;
    line-height: 26.15px;
    text-align: center;
  }
  .imagesWrapperUpper {
    flex-direction: row;
    display: flex;
    gap: 56px;
    margin-left: 13.75rem;
    margin-top: 167px;
    margin-bottom: 16px;
    padding: 8px 56px 8px 56px;
  }
  .imagesWrapperLower {
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 56px;
    padding: 8px 56px 8px 56px;
  }

  .buttonWrapper {
    position: relative;
    left: 73.4375rem;
    top: 51px;
  }
`
