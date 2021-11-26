import React from 'react';

const FilterCountries = ( { allCountries, chosenFilter } ) => {

    if (!chosenFilter) {
        return null
      }

    const filteredLandlocked = allCountries.filter((country) => country.landlocked === true)

    return(
        <>
            <h3>Filtered countries...</h3>
            <ul>
                {filteredLandlocked.map((country, index) => {
                    return (
                        <li key={index}>
                            {country.name.common}</li>
                    )
                })}
            </ul>
        </>
    )
}


export default FilterCountries;