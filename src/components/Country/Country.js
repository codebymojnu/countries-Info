import React from 'react';
import './Country.css';

const Country = (props) => {
    const {flag, name, region, population, currencies} = props.country;
    
    let currency = '';
    if(currencies !== undefined){
        currency = currencies[0].name;
    }
    return (
        <div className="country-area">
            <div>
                <img src={flag} alt={name}/>
            </div>
            <h2 className="text-center">{name}</h2>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Currency: {currency}</p>
            <button onClick={() => props.handleAddCountries(props.country)}>Add</button>
        </div>
    );
};

export default Country;