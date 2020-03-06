import React, { Fragment, useState } from 'react';

const useCurrency = (label, initialState, currenciesOptions) => {
     
    //state from our custom hook
    const [state, setState] = useState(initialState)

    const Select = () => (
        <Fragment>
            <label>{label}</label>
                <select
                    onChange={ e => setState(e.target.value)}
                    value={state}
                >
                    <option value=''>-- Select --</option>
                    { currenciesOptions.map( option => (
                        <option  key={option.code} value={option.code}>{option.name}</option>
                    ))}
                </select>
            
        </Fragment>
    )

    //Return the state, what it, gets displayed and the function that modifies the state
    return [ state, Select]
}
 
export default useCurrency;