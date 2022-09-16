import React from 'react'
import Select from 'react-select'


const Filter = (props) => {

  const options = [
    { value: 'all', label:'All Countries'},
    { value: 'africa', label: 'Africa' },
    { value: 'americas', label: 'Americas' },
    { value: 'asia', label: 'Asia' },
    { value: 'europe', label: 'Europe' },
    { value: 'oceania', label: 'Oceania' },
  ]

  const handleChange = (e) => {
    if(e.value !== "all") props.getCountriesByRegion(e.value);
    else props.getAllCountries();
  }


  return (
    <>
        <Select options={options} onChange={handleChange} />
    </>
  )
}

export default Filter