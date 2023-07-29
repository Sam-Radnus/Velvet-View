import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #17161B;
    color: #fff;
    min-height: 100vh;
    padding: 0 1rem;
  }
`;

export default GlobalStyle;
