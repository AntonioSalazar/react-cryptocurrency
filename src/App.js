import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import imgCrypto from './cryptomonedas.png';
import Form from './components/Form';
import Quote from './components/Quote';
import Spinner from './components/Spinner';

import Axios from 'axios';

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
  font-family: 'Bebas Neue', cursive;
  color: #FFf;
  text-align: left;
  font-weight: 700; 
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

function App() {


  const [ currencyApp, setCurrencyApp ] = useState('');
  const [ cryptoCurrencyApp, setCryptoCurrencyApp ] = useState('');
  const [ result, setResult ] = useState({});
  const [ loading, SetLoading ] = useState(false);


  //Quote of the choosed crypto currency and currency
  useEffect(() => {
    
    
    const quoteCall = async () => {
      if (currencyApp === '')   return;
      const quoteURL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrencyApp}&tsyms=${currencyApp}`;

      const quoteResult = await Axios.get(quoteURL);

      //Show the spinner
      SetLoading(true);
      //Hide de spinner and show the result
      setTimeout(() => {


        SetLoading(false);

        //save quote
        setResult(quoteResult.data.DISPLAY[cryptoCurrencyApp][currencyApp]);
      }, 3000);

    }
    quoteCall();
  }, [ currencyApp, cryptoCurrencyApp]);

  //Show the spinner or the result
  const component = (loading) ? <Spinner /> :  <Quote result={result}/>

  return (
    <Container>
      <div>
        <CryptoImg 
          src={imgCrypto}
          alt='crypto img'
        /> 

      </div>
      <div>
        <Heading>Get crypto currency prices:</Heading>

        <Form
          setCurrencyApp={setCurrencyApp}
          setCryptoCurrencyApp={setCryptoCurrencyApp}
        />

        {component}

      </div>
    </Container>
  );
}

export default App;
