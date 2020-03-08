import React from 'react';
import styled from '@emotion/styled';


//Custom Hook
import useCurrency from '../hooks/useCurrency';
import useCryptoCurrency from '../hooks/useCryptoCurrency';


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

const Form = () => {

    const CURRENCIES = [
        { code : 'USD', name: 'US Dollar'},
        { code : 'MXN', name: 'Mexican Peso'},
        { code : 'EUR', name: 'Euro'},
        { code : 'GBP', name: 'Sterling Pound'}
    ];

    //Using UseCurrency hook
    const [ currency, SelectCurrency, setState ] = useCurrency('Chose a currency', '', CURRENCIES);

    //Using UseCryptoCurrency Hook
    const [ cryptoCurrency, SelectCryptoCoins ] = useCryptoCurrency('Choose a crypto currency', '' );

    return ( 
        <form>
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