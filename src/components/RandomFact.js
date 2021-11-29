import React, {useState} from 'react';


const RandomFact = ( {country} ) => {

    const [selectedFact, setSelectedFact] = useState(null);

    const carSide = country.car.side;
    const area = country.area.toLocaleString();
    const population = country.population.toLocaleString();
    const timezone = country.timezones[0];
    const coatArms = country.coatOfArms.png;
    const weekStart = country.startOfWeek;

    const randomFacts = [`In country they drive on the carSide of the road`, area, population, timezone, coatArms, weekStart];



    const randomFact = () => {
        let value = Math.floor((Math.random() * 6));
        let fact = randomFacts[value]
        return fact;
    }

    const handleClick = (event) => {
        // console.log(randomFact());
        setSelectedFact(randomFact());
    }


    return (
        <>
            {/* <p>I am the RANDOM FACT!!</p> */}
            <h3>Get a random fact about {country.name.common}...</h3>
            <button onClick={handleClick}>surprise me</button>
            <p>The fact: {selectedFact}</p>
        </>
    )
}


export default RandomFact;