import React, {useState, useEffect} from 'react';
import CountrySelector from '../components/CountrySelector';

const WorldCountries = () => {

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
        getCountries();
    }, [])

    const getCountries = function() {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }

    const handleSelectedCountry = (country) => {
        setSelectedCountry(country);
    }

    return (
        <>
            <h1>I am the WorldCountries container</h1>
            <CountrySelector allCountries={countries} onCountrySelect={handleSelectedCountry}/>
        </>
    )

}

export default WorldCountries;