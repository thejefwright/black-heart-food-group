import React from 'react';
import styled from 'styled-components';

const HelloStyles = styled.div`
  h1 {
    background: #ffb3ab;
    color: #ffb3ab;
  }
`;

export default function Hello() {
  return (
    <HelloStyles>
      <h1>Hell0</h1>
    </HelloStyles>
  );
}
