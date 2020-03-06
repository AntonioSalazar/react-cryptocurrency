import React from 'react';
import styled from '@emotion/styled';


//Custom Hook
import useCurrency from '../hooks/useCurrency';


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

    const [ currency, SelectCurrency, setState ] = useCurrency('Chose a currency', '', CURRENCIES);

    return ( 
        <form>
            <SelectCurrency />
            <Button 
                type="submit"
                value='Get price!'
            />
        </form>
     );
}
 
export default Form;