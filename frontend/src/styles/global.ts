/* eslint-disable prettier/prettier */
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'NewsSerifLarge-Hairline';
    src: url('./src/assets/fonts/NewsSerifLarge-Hairline.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'NewsSerifLarge-Hairline', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  


` 