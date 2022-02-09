import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import '@fontsource/nunito-sans/700.css';
import buttonImage from '../images/crownJewel.png';

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

  .cj-button {
    background-color: #f8423a;
    color: #f8423a;
    /* line-height: 1em; */
    /* font-size: 3rem; */
    border: 3px solid #f8423a;
    border-radius: 15px;
    padding: 0 2rem;
    margin: 2rem;
    text-decoration: none;
    transition: all 500ms;

    &:hover {
      border: 3px solid #f8423a;
      color: #f8423a;
      background-color: #f8423a;
      transform: scale(1.05);
      box-shadow: 1px 1px 5px 1px #ffb3ab, -1px -1px 5px 1px #ffb3ab;
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
          <Link to="/firstDraft" className="cj-button">
            <img src={buttonImage} alt="Crown Jewel" width="225px" />
          </Link>
          {/* <Jokes /> */}
          {/* <Link to="/vinaigrette" className="button">
            I'm Melissa
          </Link> */}
          {/* <Link to="/menu" className="button">I'm Erica</Link> */}
        </div>
      </div>
    </HomeStyles>
  );
}
