import React from 'react';
import Blogs from './Blogs/Blogs';
import './HowToWorks.css'

const HowToWorks = () => {
    return (
        <div>
            <div className='flex justify-center align-middle page-barcode'>
                <h1>How It Works</h1>
            </div>
            <Blogs></Blogs>
        </div>
    );
};

export default HowToWorks;