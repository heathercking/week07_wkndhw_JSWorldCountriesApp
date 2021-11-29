import React from 'react';
import { ScriptHTMLAttributes } from 'react';
import './countrydetails.css';
import countryMap from './countryMap';
import RandomFact from './RandomFact';


const CountryDetails = ( {chosenCountry} ) => {

    // console.log(chosenCountry)
    if (!chosenCountry) {
        return null
      }


    // const carSide = chosenCountry.car.side;
    // const area = chosenCountry.area.toLocaleString();
    // const population = chosenCountry.population.toLocaleString();
    // const timezone = chosenCountry.timezones[0];
    // const coatArms = chosenCountry.coatOfArms.png;
    // const weekStart = chosenCountry.startOfWeek;

    // const randomFacts = [carSide, area, population, timezone, coatArms, weekStart];



    // const randomFact = () => {
    //     let value = Math.floor((Math.random() * 6));
    //     let fact = randomFacts[value]
    //     return fact;
    // }

    // const handleClick = (event) => {
    //     console.log(randomFact());
    // }


    
    return (
        <>
        <div className="country-details">
            <h2>Top facts about {chosenCountry.name.common}...</h2>
            <p>Official name: {chosenCountry.name.official} </p>
            <p>Capital City: {chosenCountry.capital}</p>
            <p>Region: {chosenCountry.region}</p>
            <p>Region: {chosenCountry.region}</p>
            <p>Week start: {chosenCountry.startOfWeek}</p>

            {/* <img src={chosenCountry.flags.png}></img> */}
            {/* <h3>Get a random fact about {chosenCountry.name.common}...</h3>
            <button onClick={handleClick}>surprise me</button> */}
            {/* <p>{randomFact}</p> */}
        </div>
        <div>
            <RandomFact country={chosenCountry}/>
        </div>
        </>
    )


}

export default CountryDetails;