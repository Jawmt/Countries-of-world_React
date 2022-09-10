import React, { useEffect, useState } from 'react'
import DisplayCountry from '../features/countries/DisplayCountry'
import { countriesServices } from '../services/countriesService';

/**
 * 
 * @returns Display of every countries from the API 
 */
const HomeCountries = () => {
    
    /**
    * useState to keep country data sent by the API
    */
    const [dataCountries, setdataCountries] = useState([]);


    /**
     * useEffect to set dataCountries with the response of the call API 
     */
    useEffect(() => {
        countriesServices.getAllCountries()
          .then((response)=> setdataCountries(response.data));
          
      }, [])
    
      console.log(dataCountries);
    
    return (
      <>
        <h1>HomeCountries</h1>
        {dataCountries.map((country, index) => (
            <DisplayCountry country={country} key={index} />
        ))}
    </>
  )
}

export default HomeCountries