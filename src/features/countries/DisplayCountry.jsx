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
    <div className='card dark' onClick={()=>navigate(`/countries/${country.name.common}`)}>
      <img src={country.flags.png} alt={country.name.common} />
      <div className="description">
        <h4>{country.name.common}</h4>
        <p><span className="title">Population : </span>{country.population}</p>
        <p><span className="title">Region : </span>{country.region}</p>
        <p><span className="title">Capital : </span>{country.capital}</p>
      </div>
    </div>
  )
}

export default DisplayCountry;