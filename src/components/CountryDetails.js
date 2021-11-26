import React from 'react';

const CountryDetails = ( {chosenCountry} ) => {

    // console.log(chosenCountry)
    if (!chosenCountry) {
        return null
      }
    
    return (
        <>
            <p>I am the CountryDetails container</p>
            <p>Official name: {chosenCountry.name.official} </p>
            <p>Capital City: {chosenCountry.capital}</p>
            <p>Region: {chosenCountry.region}</p>
            <img src={chosenCountry.flags.png}></img>
        </>
    )


}

export default CountryDetails;