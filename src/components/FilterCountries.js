import React from 'react';
import './filteredcountries.css'

const FilterCountries = ( { allCountries, chosenFilter } ) => {

    if (!chosenFilter) {
        return null
      }

    // const filteredCountries = allCountries.filter((country) => country.landlocked === true)

    const filterCountries = () => {
        if (chosenFilter === "landlocked") {
            const results = allCountries.filter(country => country.landlocked === true)
            return results;
        }
        if (chosenFilter === "right") {
            const results = allCountries.filter(country => country.car.side === "right")
            return results;
        }
        if (chosenFilter === "left") {
            const results = allCountries.filter(country => country.car.side === "left")
            return results;
        }
        if (chosenFilter === "population") {
            const results = allCountries.filter(country => country.population < 10000)
            return results;
        }
        if (chosenFilter === "all") {
            const results = allCountries.filter(country => country)
            return results;
        }
        
    }

    const filteredCountries = filterCountries();

    return(
        <>
            <div id="filtered">
                <h3>Filtered countries</h3>
                <ul>
                    {filteredCountries.map((country, index) => {
                        return (
                            <li key={index}>
                                {country.name.common}</li>
                        )
                    })}
                </ul>
            </div>

        </>
    )
}


export default FilterCountries;