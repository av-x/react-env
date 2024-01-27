import { injectGlobal } from '@emotion/css';

export default injectGlobal`
  html, body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    background: #FAFAFA;
    font-family: 'Helvetica Neue', arial, sans-serif;
    font-weight: 400;
    color: #444;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
  }

  #app {
    height: 100%;
  }

  .link {
    font-weight: 500;
    font-size: var(--font-size-sm);
    text-decoration: none;
    color: var(--color-indigo-600);

    &:hover {
      color: var(--color-indigo-800);
      text-decoration: underline;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }
`;
