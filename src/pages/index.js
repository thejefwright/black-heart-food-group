import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
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
    color: white;
    font-size: 2rem;
    border: 1px solid white;
    border-radius: 15px;
    padding: 1rem 3rem;
    margin: 2rem;
    text-decoration: none;
    transition: all 500ms;
    &:visited {
      color: white;
    }
    &:hover {
      border: 1px solid var(--orange);
      color: var(--blue);
      background-color: var(--orange);
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
          {/* <Link to="/vinaigrette" className="button">I'm Melissa</Link>
        <Link to="/menu" className="button">I'm Erica</Link> */}
        </div>
      </div>
    </HomeStyles>
  );
}
