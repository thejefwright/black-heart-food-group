import React from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import '@fontsource/inter';
import '@fontsource/inter/200.css';


const GlobalStyles = createGlobalStyle`
*,
*:before,
*:after {
  margin: 0;
  padding:0;
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
  font-family: 'Inter';
  background-color: #193549;
  color: white;
}
h1 {
  font-size: 5rem;
}
h2 {
  font-size: 3rem;
  padding: 1rem 0;
}
p {
  font-size: 2rem;
}
li {
  font-weight: 200;
  font-size: 2rem;
  padding: .5rem 0;
  margin-left: 2rem;
}
hr {
  margin: 2rem 0;
}

`;
const InnerStyles = styled.div`
  margin: 0 auto;
  width: 80%;
  padding: 4rem;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <InnerStyles>{children}</InnerStyles>
    </>
  );
}
