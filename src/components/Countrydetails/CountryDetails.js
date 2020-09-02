import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const CountryDetails = () => {
     const {alpha2Code} = useParams();
      
     useEffect(()=> {
       fetch(`https://restcountries.eu/rest/v2/alpha/${alpha2Code}`)
      .then(res => res.json())
      .then(data => console.log(data))

     },[])
    return (
        <div>
            <h3>Here is your Country Details: {alpha2Code}</h3>
        </div>
    );
};

export default CountryDetails;