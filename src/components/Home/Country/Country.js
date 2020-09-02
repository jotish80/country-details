import React from 'react';
import { Link } from 'react-router-dom';
import CountryDetails from '../../Countrydetails/CountryDetails';
const Country = (props) => {
       const {name,capital,region,flag,numericCode, alpha2Code} = props.country;
      const countryStyle = {
           border: "1px solid purple",
           margin: "20px",
           padding: "20px",
           borderRadius: "20px"
       }
    return (
        <div style = {countryStyle}>
             <img src={flag} alt=""/>
             <h2>Name:<Link to={`/about/${alpha2Code}`}>{name}</Link> {name}</h2>
              {/* <h2><Link to={`/about/${alpha2Code}`}>About</Link></h2> */}
             <h2>Capital: {capital}</h2>
             <h2>Region: {region}</h2>
              <p>Code: {numericCode} </p> 

              
        </div>
    );
};

export default Country;