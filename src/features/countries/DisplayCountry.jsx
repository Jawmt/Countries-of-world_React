import React from 'react'
import { useNavigate } from 'react-router-dom';


/**
 * 
 * @param {country} country from the page HomeCountries 
 * @returns display of a country (flag, name, population, region and capital)
 */
const DisplayCountry = ({country}) => {

  const navigate = useNavigate();

  
  return (
    <div className='card' onClick={()=>navigate(`/countries/${country.name.common}`)}>
      <img src={country.flags.png} alt={country.name.common} />
      <h4>{country.name.common}</h4>
      <p>Population : {country.population}</p>
      <p>Region : {country.region}</p>
      <p>Capital : {country.capital}</p>
    </div>
  )
}

export default DisplayCountry;