import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const CountryDetails = () => {
     const {countryCode} = useParams();
      const [country, setCountries] = useState({});
     useEffect(()=> {
       fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)
      .then(res => res.json())
      .then(data => setCountries(data))

     },[])
  
    return (
        
        <div>
             
            <h3>Here is your Country Details: {countryCode}</h3>
            <h4>Name: {country.name}</h4>
            <h4>Capital: {country.capital}</h4>
            <h4>Region: {country.region}</h4>
            <h4>Population: {country.population}</h4>
            <img src={country.flag} alt=""/>
        </div>
    );
};

export default CountryDetails;