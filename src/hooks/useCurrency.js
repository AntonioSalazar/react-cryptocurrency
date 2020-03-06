import React, { Fragment, useState } from 'react';

const useCurrency = () => {
     
    //state from our custom hook
    const [state, setState] =useState('')

    const Select = () => (
        <Fragment>
            <label>Currency</label>
                <select>
                    <option value='MXN'>Mexican Peso</option>
                </select>
            
        </Fragment>
    )

    //Return the state, what it, gets displayed and the function that modifies the state
    return [ state, Select, setState]
}
 
export default useCurrency;