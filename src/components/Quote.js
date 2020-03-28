import React from 'react';
import styled from '@emotion/styled';

const ResultDiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 20px;
`;

const Info = styled.p`
    font-size: 18px;

    span {
        font-weight: bold;
    }
`;

const PriceP = styled.p`
    font-size: 3rem;
    span{
        font-weight: bold;
    }
`;

const Quote = ({result}) => {
    if(Object.keys(result).length === 0) return null;

    return(
        <ResultDiv>
            <PriceP>The cost is: <span>{result.PRICE}</span></PriceP>
            <Info>Higuest Price: <span>{result.HIGHDAY}</span></Info>
            <Info>Lowest Price: <span>{result.LOWDAY}</span></Info>
            <Info>Price change in the last 24 hours: <span>{result.CHANGEPCT24HOUR} %</span></Info>
            <Info>Last update: <span>{result.LASTUPDATE}</span></Info>
        </ResultDiv>
    )
}

export default Quote;