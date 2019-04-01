import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    max-width: 375px;
    margin: 0 auto;
    padding: 0;
    background-color: #525f7f;
    color: rgb(162, 176, 196);
    font-weight: 400;
  }

  body * {
    box-sizing: border-box;
  }

  #app {
    min-height: 100%;
    height: 100%;
  }

  button {
    border: none;
    background: none;
    outline: none;
  }
`;

export default GlobalStyle;
