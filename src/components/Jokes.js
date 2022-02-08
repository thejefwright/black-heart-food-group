import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const JokeStyles = styled.div`
  text-align: center;

  p {
    font-size: 2.5rem;
    border-top: 1px solid white;
    min-height: 75vh;
    width: 75%;
    margin: auto;
    margin-bottom: 2rem;
    padding: 4rem 1rem;
  }
  button {
    padding: 1rem 3rem;
    border-radius: 20px;
    font-size: 2rem;
    color: var(--orange);
    background: var(--blue);
    border: 1px solid white;
  }
`;

export default function Jokes() {
  const [joke, setJoke] = useState();
  useEffect(() => {
    fetchJoke();
  }, []);
  async function fetchJoke() {
    const res = await fetch('https://icanhazdadjoke.com', {
      headers: {
        Accept: 'application/json',
      },
    });
    const data = await res.json();
    setJoke(data.joke);
    console.log(data.joke);
  }
  return (
    <JokeStyles>
      <h1>Jokes</h1>
      <p>{joke}</p>
      <button onClick={fetchJoke}>Get another one!</button>
    </JokeStyles>
  );
}
