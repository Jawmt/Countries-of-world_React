import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const DetailCountry = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    return (
        <>
            <div>DetailCountry {id}</div>
            <button onClick={()=>navigate(-1)}>Go Back</button>
        </>

    )
}

export default DetailCountry