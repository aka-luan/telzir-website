import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f1ede9;
    --black: #000000;
    --yellow: #f6cf58;
    --purple: #dcbcf4;
    --buttonText: #a39f9f;

  }
  * {
    margin: 0;  
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1200px) {
      font-size: 87.5%;
    }

    @media (max-width: 990px) {
      font-size: 60%;
    } 

  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

`