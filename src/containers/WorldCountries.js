import React, {useState, useEffect} from 'react';
import BubbleChart from '../components/BubbleChart';
import CountryDetails from '../components/CountryDetails';
import CountrySelector from '../components/CountrySelector';
import FilterCountries from '../components/FilterCountries';
import FilterSelector from '../components/FilterSelector';
import './worldcountries.css'

const WorldCountries = () => {

    const [countries, setCountries] = useState([]);
    const [selectedCountryName, setSelectedCountryName] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('');

    useEffect(() => {
        getCountries();
    }, [])

    const getCountries = function() {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }

    const handleSelectedCountry = (country) => {
        setSelectedCountryName(country);
        console.log(selectedCountryName);
    }

    const handleSelectedFilter = (filter) => {
        setSelectedFilter(filter);
        console.log(selectedFilter);
    }

    const selectedCountry = countries.find((country) => country.name.common === selectedCountryName)
    

    return (
        <>
            <h1>countries of the world</h1>
            {/* <h1 id="world">WORLD</h1> */}
            <BubbleChart allCountries={countries} />
            <section class="options">
                <div class="container grid">
                    <div class="card">
                        <CountrySelector allCountries={countries} onCountrySelect={handleSelectedCountry} />
                        <CountryDetails chosenCountry={selectedCountry} />
                    </div>
                    <div class="card">
                        <FilterSelector onFilterSelect={handleSelectedFilter} />
                        <FilterCountries allCountries={countries} chosenFilter={selectedFilter} />
                    </div>
                </div>
            </section>


        </>
    )

}

export default WorldCountries;