import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';


const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const SelectInput = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`;

const useCryptoCurrency = (label, initialState, currenciesOptions) => {
     
    //state from our custom hook
    const [state, setState] = useState(initialState)

    const SelectCryptoCoin = () => (
        <Fragment>
            <Label>{label}</Label>
                <SelectInput
                    onChange={ e => setState(e.target.value)}
                    value={state}
                >
                    <option value=''>-- Select --</option>
                    { currenciesOptions.map( option => (
                        <option  key={option.CoinInfo.Id} value={option.CoinInfo.Name}>{option.CoinInfo.FullName}</option>
                    ))}
                </SelectInput>
            
        </Fragment>
    )

    //Return the state, what it, gets displayed and the function that modifies the state
    return [ state, SelectCryptoCoin]
}
 
export default useCryptoCurrency;