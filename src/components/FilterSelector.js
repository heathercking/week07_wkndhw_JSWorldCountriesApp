import React from 'react';

const FilterSelector = ( {onFilterSelect} ) => {

    const handleChange = (event) => {
        onFilterSelect(event.target.value)
        console.log(event.target.value)
    }


    return (
        <>
        <h2>Or select to view countries that...</h2>
            <select defaultValue="" onChange={handleChange}>
                <option value="" selected>Choose filter</option>
                <option value="right">...drive on the right</option>
                <option value="landlocked">...are landlocked</option>
            </select>
        </>
    )
}

export default FilterSelector;