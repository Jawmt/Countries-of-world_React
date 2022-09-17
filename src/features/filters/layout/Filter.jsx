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
    props.handleChangeRegion(e.value);
  }

  const handleSearch = (searchValue) => {
    props.handleChangeSearch(searchValue);
  }


  return (
    <>
        <FilterSearch handleSearch={handleSearch}/>
        <Select options={options} onChange={handleChange} />
    </>
  )
}

export default Filter