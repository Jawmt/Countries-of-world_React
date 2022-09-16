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
    const [data, setData] = useState([]);
    const [dataCountries, setDataCountries] = useState([]);
    const [region,setRegion] = useState('');
    const [valueSearch, setValueSearch] = useState('');

    /**
     * useEffect to set dataCountries with the response of the call API 
     */
    useEffect(() => {
        getAllCountries(); 
      },[])
    
    /**
     * Get All countries from the API
     */
    const getAllCountries = () => {
      countriesServices.getAllCountries()
          .then((response)=> {
              setData(response.data);
              setDataCountries(response.data);
          })     
    }

    const filterByRegion = (region,dataToFilter) => {
        return dataToFilter.filter( value => ((value.region).toLowerCase()).includes(region.toLowerCase()));
    }

    const filterByValue = (searchValue, dataToFilter) => {
        return dataToFilter.filter( value => ((value.name.common).toLowerCase()).includes(searchValue.toLowerCase()));
    }

    /**
     * Filter the data on change 
     */
    const getCountriesByRegion = (region) => {
        let dataTemp = filterByRegion(region,data);
        dataTemp = filterByValue(valueSearch,dataTemp);
        setDataCountries(dataTemp);
        setRegion(region);
    }

    const searchCountry = (searchValue) => {
      let dataTemp = filterByRegion(region,data);
      dataTemp = filterByValue(searchValue,dataTemp);
      setDataCountries(dataTemp);
      setValueSearch(searchValue);
    }
    
    
    return (
      <>
        <h1>HomeCountries</h1>
        <Filter 
          getCountriesByRegion={getCountriesByRegion} 
          getAllCountries={getAllCountries} 
          searchCountry={searchCountry}
        />
        {dataCountries.map((country, index) => (
            <DisplayCountry country={country} key={index} />
        ))}
    </>
  )
}

export default HomeCountries