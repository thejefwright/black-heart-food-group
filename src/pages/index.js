import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import '@fontsource/nunito-sans/700.css';

// import { useStaticQuery, graphql } from "gatsby";
// import parse from "html-react-parser";

const HomeStyles = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  text-align: center;
  .wrapper {
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
  }

  .button {
    /* font-family: 'Nunito Sans'; */
    background-color: #ffb3ab;
    color: #f8423a;
    line-height: 1em;
    font-size: 3rem;
    border: 1px solid #f8423a;
    border-radius: 15px;
    padding: 1rem 3rem;
    margin: 2rem;
    text-decoration: none;
    transition: all 500ms;

    &:hover {
      border: 1px solid #ffb3ab;
      color: #ffb3ab;
      background-color: #f8423a;
    }
  }
`;

export default function IndexPage() {
  return (
    <HomeStyles>
      <div>
        <h1>Jef Wright</h1>
        <h2>I'm working on it</h2>
        <div className="wrapper">
          <Link to="/firstDraft" className="button">
            CROWN JEWEL - V1.0
          </Link>
          {/* <Link to="/vinaigrette" className="button">I'm Melissa</Link>
        <Link to="/menu" className="button">I'm Erica</Link> */}
        </div>
      </div>
    </HomeStyles>
  );
}
