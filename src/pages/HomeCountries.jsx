import React, { useState } from 'react'
import DisplayCountry from '../features/countries/DisplayCountry'
import Filter from '../features/filters/layout/Filter';
import '../assets/styles/homeCountries.css'
/**
 * 
 * @returns Display of every countries from the API 
 */
const HomeCountries = (props) => {
    
    /**
    * useState to keep country data sent by the API
    */
    const [region,setRegion] = useState('');
    const [valueSearch, setValueSearch] = useState('');

    

    const filter = () => {
      let dataDisplay = props.data.filter(value => ((value.region).toLowerCase()).includes(region.toLowerCase()));
      dataDisplay = dataDisplay.filter(value => ((value.name.common).toLowerCase()).includes(valueSearch.toLowerCase()));
      return dataDisplay;
    }
    const handleChangeRegion = (regionValue) => {
      setRegion(regionValue);
    }

    const handleChangeSearch = (searchValue) => {
      setValueSearch(searchValue);
    }

    return (
      <>
        <h1>HomeCountries</h1>
        <Filter 
          handleChangeRegion={handleChangeRegion}
          handleChangeSearch={handleChangeSearch}
          />
        <div className='container'>
          {filter().map((country, index) => (
              <DisplayCountry country={country} key={index} />
          ))}
        </div>
        
    </>
  )
}

export default HomeCountries