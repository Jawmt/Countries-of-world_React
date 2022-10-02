import React from 'react'
import Select from 'react-select'
import FilterSearch from '../component/FilterSearch'
import '../../../assets/styles/filter.css'


const Filter = (props) => {

  const options = [
    { value: '', label:'All Countries',color: "#498205"},
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
  
  const styles = {
    control: (base, state) => ({
      ...base,
      background: "#023950",
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "yellow" : "green",
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "red" : "blue"
      }
    })
  };
  
  


  return (
    <>
      <div className="filter">
          <FilterSearch handleSearch={handleSearch}/>
          <Select 
            styles={styles}
            options={options} 
            onChange={handleChange} 
            />
      </div>
    </>
  )
}

export default Filter



