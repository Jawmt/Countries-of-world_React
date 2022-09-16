import React from 'react'
import { useState } from 'react'

const FilterSearch = (props) => {

    const [searchValue, setSearchValue] = useState("");

    const handleChange = (e) => {
        setSearchValue(e.target.value);
        props.handleSearch(e.target.value);
    }

    return (
        <input type="text" value={searchValue} onChange={handleChange}/>
    )
}

export default FilterSearch