import React from 'react';
import './SingleCountry.css'

const SingleCountry = ({ country, countryHandleClick }) => {
    const { name, region, flag, population, alpha2Code } = country;
    return (
        <div>
            <div className="country max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                <img src={flag} alt="" className="" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{name.slice(0, 7)}</h2>
                        <p className="dark:text-gray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                        <p><strong>Population :</strong> {population}</p>
                        <p><strong>Region :</strong> {region}</p>
                    </div>
                    <button onClick={() => countryHandleClick(alpha2Code)} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900 blog-button" data-modal-toggle="defaultModal">Read more</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCountry;