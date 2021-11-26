import React from 'react';

const FilterSelector = ( {onFilterSelect} ) => {

    const handleChange = (event) => {
        onFilterSelect(event.target.value)
        console.log(event.target.value)
    }



    return (
        <>
        <h2>Or select to view countries that...</h2>
            {/* <select defaultValue="" onChange={handleChange}>
                <option value="" selected>Choose filter</option>
                <option value="right">...drive on the right</option>
                <option value="landlocked">...are landlocked</option>
            </select> */}
            <div>
                <button onClick={handleChange} type="submit" name="filter" value="landlocked">...are landlocked</button>
                {/* <button onClick={handleChange} type="submit" name="filter" value="right">...drive on the right</button> */}
                <button onClick={handleChange} type="submit" name="filter" value="left">...drive on the left</button>
                <button onClick={handleChange} type="submit" name="filter" value="population">...have population less than 10,000</button>
            </div>
        </>
    )
}

export default FilterSelector;