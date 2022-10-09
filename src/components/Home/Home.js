import React from 'react';
import './Home.css'
import Service from './Service/Service';
import Support from './Support/Support';
import Works from './Works/Works';

const Home = () => {
    return (
        <div className=''>
            <section className="text-white hero-bg">
                <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                    <h1 className="text-4xl font-bold leading-none sm:text-5xl capitalize">Take student experience<br />
                        <span className="dark:text-violet-400"> to the next </span>level
                    </h1>
                    <p className="px-8 mt-8 mb-12 text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <div className="flex flex-wrap justify-center">
                        <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-800 text-white started-btn">Get started</button>
                    </div>
                </div>
            </section>
            <Service></Service>
            <Works></Works>
            <Support></Support>
        </div >
    );
};

export default Home;