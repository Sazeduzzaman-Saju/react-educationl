import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCountry from './SingleCountry/SingleCountry';

const Country = () => {
    const countries = useLoaderData();

    const countryHandleClick = (id) => {
        alert(countries.alpha2Code)
    }


    return (
        <div className='structure'>
            <div className='flex justify-center align-middle page-barcode'>
                <h1>Country We Cover</h1>
            </div>
            <div className='country grid grid-cols-3 gap-5'>
                {
                    countries.map(country => <SingleCountry
                        key={country.alpha2Code}
                        country={country}
                        countryHandleClick={countryHandleClick}
                    ></SingleCountry>)
                }
            </div>
        </div>
    );
};

export default Country;