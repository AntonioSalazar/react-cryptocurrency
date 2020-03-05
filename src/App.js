import React from 'react';
import styled from '@emotion/styled';
import imgCrypto from './cryptomonedas.png';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 2rem;
  }
`;


const CryptoImg = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`

`;

function App() {
  return (
    <Container>
      <div>
        <CryptoImg 
          src={imgCrypto}
          alt='crypto img'
        /> 

      </div>
      <div>

      </div>
    </Container>
  );
}

export default App;
