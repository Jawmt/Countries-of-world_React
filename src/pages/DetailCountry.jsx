import React from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { countriesServices } from '../services/countriesService';

const DetailCountry = (props) => {

    const {id} = useParams();
    const [idCountry, setIdCountry]= useState(id);
    const navigate = useNavigate();
    const country = props.data.find(value => idCountry === value.name.common);
    const languagesShortName = Object.keys(country.languages);
    const currencieShortName = Object.keys(country.currencies)[0];
    
    if(!country ){ return (<p>Loading</p>)}
    return (
        <>
            <div>DetailCountry {id}</div>
            <button onClick={()=>navigate(-1)}>Go Back</button>
            <img src={country.flags.png} alt={country.name.common}/>
            <h4>{country.name.common}</h4>
            {languagesShortName.map((value,index) => ( 
                   <p key={index}>{country.languages[value]} : {country.name.nativeName[value].official}</p>
                )
            )}
            <p>Population : {country.population}</p>
            <p>Region : {country.region}</p>
            <p>Capital : {country.capital}</p> 
            <p>Top Level Domain : {country.tld[0]}</p>
            <p>Currencies : {country.currencies[currencieShortName].name}</p>
            <p>
                Languages : {languagesShortName.map((value,index)=> (
                        <span key={index}>{country.languages[value]} </span>
                    )
                )}   
            </p>
            <div>
                <p>Border Countries</p>
            </div>
        </>

    )
}

export default DetailCountry