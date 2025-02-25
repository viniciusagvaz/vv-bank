import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
    
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px #fff3;
  }

  body { 
  background: ${(props) => props.theme["gray-900"]};
    background-attachment: fixed;
    background-size: cover; 
    color: ${(props) => props.theme["gray-100"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Roboto, sans-serif;
  }
`;
