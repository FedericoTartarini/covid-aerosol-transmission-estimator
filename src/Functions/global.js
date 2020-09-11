// global.js
// Source: https://github.com/maximakymenko/react-day-night-toggle-app/blob/master/src/global.js#L23-L41

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.onBackground};
    transition: all 0.5s linear;
  }
  
  h1 {
    color: ${({ theme }) => theme.primary};
  }
  
  input {
    background: ${({ theme }) => theme.surface};
  }
  
  button{
    background: ${({ theme }) => theme.surface};
    &:hover {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.onPrimary};
    }
  }
  
  span.dropDown {
    background: ${({ theme }) => theme.surface};
    &:hover {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.onPrimary};
    }
  }
  
  p.outputBox {
    background: ${({ theme }) => theme.surface};
  }
  
  a {
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;
