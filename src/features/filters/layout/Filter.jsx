import React from 'react'
import Select from 'react-select'
import FilterSearch from '../component/FilterSearch'


const Filter = (props) => {

  const options = [
    { value: '', label:'All Countries'},
    { value: 'Africa', label: 'Africa' },
    { value: 'Americas', label: 'Americas' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' },
  ]

  const handleChange = (e) => {
    if(e.value !== "all") props.getCountriesByRegion(e.value);
    else props.getAllCountries();
  }

  const handleSearch = (searchValue) => {
    props.searchCountry(searchValue);
  }


  return (
    <>
        <FilterSearch handleSearch={handleSearch}/>
        <Select options={options} onChange={handleChange} />
    </>
  )
}

export default Filter