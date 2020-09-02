import React from 'react';
import { Link } from 'react-router-dom';
 
const Country = (props) => {
    const { name, capital, region, flag, alpha2Code } = props.country;

    const countryStyle = {
        border: "1px solid purple",
        margin: "20px",
        padding: "20px",
        borderRadius: "20px"
    }
    return (
        <div style={countryStyle}>
            <img src={flag} alt="" />
            <h2>Name:{name}</h2>

            <h2>Capital: {capital}</h2>
            <h2>Region: {region}</h2>
            <p>Code: <Link to={`/CountryDetails/${alpha2Code}`}>show: {alpha2Code}</Link></p>


        </div>
    );
};

export default Country;