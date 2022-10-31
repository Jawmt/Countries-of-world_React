import React from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import "../assets/styles/detailCountry.css"

const DetailCountry = (props) => {

    const {id} = useParams();
    const [idCountry, setIdCountry]= useState(id);
    const navigate = useNavigate();
    const country = props.data.find(value => idCountry === value.name.common);
    const languagesShortName = Object.keys(country.languages);
    const currencieShortName = Object.keys(country.currencies)[0];
    
    if(!country ){ return (<p>Loading</p>)}

    return (
        <div className='description'>
            <button className="btn-goBack" onClick={()=>navigate(-1)}>Go Back</button>
            
            <div className="container-info">
                <div className="img-flag">
                    <img className="flag" src={country.flags.png} alt={country.name.common} />
                </div>
                <div className="country-info">
                    <h4>{country.name.common}</h4>
                    <div className="infos-country">
                        <div className="country-info-right">

                            {languagesShortName.map((value, index) => (
                                <p key={index}>
                                    <span className='title'>Language : </span>
                                    {country.languages[value]} : {country.name.nativeName[value].official}</p>
                            )
                            )}
                            <p><span className='title'>Population : </span>{country.population}</p>
                            <p><span className='title'>Region : </span> {country.region}</p>
                            <p>
                                <span className='title'>Capital : </span> 
                                {country.capital}</p>
                            <p>
                                <span className='title'>Top Level Domain : </span>
                                {country.tld[0]}
                            </p>
                        </div>
                        <div>
                            <p><span className='title'>Currencies : </span> {country.currencies[currencieShortName].name}</p>
                            <p>
                                <span className='title'>Languages : </span>{languagesShortName.map((value, index) => (
                                    <span key={index}>{country.languages[value]} </span>
                                )
                                )}
                            </p>
                        </div>
                    </div>
                    </div>
                    
             </div>
                
        </div>

    )
}

export default DetailCountry