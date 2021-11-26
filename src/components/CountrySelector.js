import React from 'react';

const CountrySelector = ({ allCountries, onCountrySelect}) => {

    const countryOptions = allCountries.map((country, index) => {
        return <option key={index} value={country.name.common}>{country.name.common}</option>
    })

    const handleChange = (event) => {
        onCountrySelect(event.target.value)
        console.log(event.target.value)
    }


    return (
        <>
            <select defaultValue="" onChange={handleChange}>
                <option value="" selected>Choose a Country of the World</option>
                {countryOptions}
            </select>
        </>
    )
}

export default CountrySelector;