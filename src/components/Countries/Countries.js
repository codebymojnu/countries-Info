import React, { useEffect, useState } from 'react';
import CartArea from '../CartArea/CartArea';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])

    const handleAddCountries = country => {
        const newCart = [...carts, country];
        setCarts(newCart);
    }
    return (
        <div className="countries-area">
            <h2 style={{textAlign: 'center'}}>Total Country: {countries.length}</h2>
            {
                countries.length === 0 && <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div className="loader">

                    </div>
                </div>
            }
            <CartArea carts={carts} ></CartArea>
            {
                countries.map(country => <Country country={country} key={country.name} handleAddCountries={handleAddCountries}></Country>)
            }
        </div>
    );
};

export default Countries;