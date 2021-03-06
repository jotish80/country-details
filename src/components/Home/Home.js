import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Country from './Country/Country';

const Home = () => {
    const [countries, setCountries] = useState([]);
   console.log(countries)
useEffect(() => {
     fetch("https://restcountries.eu/rest/v2/all")
     .then(res => res.json())
     .then(data => setCountries(data))
     
},[])

 
    return (
        <div>
            <h1>This is HOME</h1>
            <h3>Countries:{countries.length}</h3>
          {
              countries.map(country => <Country country ={country}></Country>)
          }
        </div>
    );
};

export default Home;