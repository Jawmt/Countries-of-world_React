import React, { useEffect, useState } from 'react'
import DisplayCountry from '../features/countries/DisplayCountry'
import Filter from '../features/filters/layout/Filter';
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
        getAllCountries();
      }, [])
    
    /**
     * Get All countries from the API
     */
    const getAllCountries = () => {
      countriesServices.getAllCountries()
          .then((response)=> setdataCountries(response.data));
    }

    /**
     * Retrieve countries by region from API
     */
      const getCountriesByRegion = (region) => {
        countriesServices.getCountriesByRegion(region)
          .then((response) => setdataCountries(response.data));
      }
    
    
    return (
      <>
        <h1>HomeCountries</h1>
        <Filter getCountriesByRegion={getCountriesByRegion} getAllCountries={getAllCountries} />
        {dataCountries.map((country, index) => (
            <DisplayCountry country={country} key={index} />
        ))}
    </>
  )
}

export default HomeCountries