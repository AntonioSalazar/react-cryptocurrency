import React, { useEffect, useState } from 'react';
import Error from './Error';
import styled from '@emotion/styled';


//Custom Hook
import useCurrency from '../hooks/useCurrency';
import useCryptoCurrency from '../hooks/useCryptoCurrency';
import axios from 'axios';


const Button = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2f2;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;

    &:hover{
        background-color: #326AC0;
        cursor: pointer;
    }
`;

const Form = ({setCurrencyApp, setCryptoCurrencyApp}) => {

    //State of the form, will hold a list of crypto currencies

    const [ cryptoList, setCryptoList ] = useState([]);
    const [ error, setError ] = useState(false);

    const CURRENCIES = [
        { code : 'USD', name: 'US Dollar'},
        { code : 'MXN', name: 'Mexican Peso'},
        { code : 'EUR', name: 'Euro'},
        { code : 'GBP', name: 'Sterling Pound'}
    ];

    //Using UseCurrency hook
    const [ currency, SelectCurrency, setState ] = useCurrency('Chose a currency', '', CURRENCIES);

    //Using UseCryptoCurrency Hook
    const [ cryptoCurrency, SelectCryptoCoins ] = useCryptoCurrency('Choose a crypto currency', '', cryptoList );

    //API CALL
    useEffect(() => {
        const apiCall = async () => {
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`

            const result = await axios.get(url);
            setCryptoList(result.data.Data);
        }
        apiCall();
    }, []);

    //when the user hits the 'get price!' btn

    const getPrice = e => {
        e.preventDefault();

        //Check if both fields are filled
        if(currency === '' || cryptoCurrency === ''){
            setError(true);
            return
        }
        setError(false);

        //Send the data to the App component
        setCurrencyApp(currency);
        setCryptoCurrencyApp(cryptoCurrency);
    }

    return ( 
        <form
            onSubmit={getPrice}
        >
            { error ? <Error message='All the fields are required'/> : null }
            <SelectCurrency />

            <SelectCryptoCoins />

            <Button 
                type="submit"
                value='Get price!'
            />
        </form>
     );
}
 
export default Form;