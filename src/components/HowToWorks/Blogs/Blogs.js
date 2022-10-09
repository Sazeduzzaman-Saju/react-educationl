import React from 'react';
import './Blog.css';
import side1 from '../../../img/side-1.png';
import side2 from '../../../img/side-2.png';
import side3 from '../../../img/side-3.png';
import side4 from '../../../img/side-4.png';
import side6 from '../../../img/side-6.png';

const Blogs = () => {
    return (
        <section>
            <div className='grid grid-cols-2 structure mb-10 mt-10'>
                <div className='info'>
                    <h1 className='text-5xl font-bold mb-5'>Subscribe</h1>
                    <p className='mb-5 w-2/3'>Sign up to get full access to XYZ amount of questions library</p>
                    <button className='blog-button'>Start Free Trial</button>
                </div>
                <div className='info-image'>
                    <img src={side1} alt="" />
                </div>
            </div>
            {/* Second Blog */}
            <div className='grid grid-cols-2 structure mb-10 mt-10'>
                <div className='info-image'>
                    <img src={side2} alt="" />
                </div>
                <div className='info text-end'>
                    <h1 className='text-5xl font-bold mb-5'>Explore material</h1>
                    <p className='mb-5  info-text'>Revision mode: select questions by topic,<br /> difficulty or category or by random selection.  </p>
                    <button className='blog-button'>Start Free Trial</button>
                </div>
            </div>
            {/* Second Blog */}
            <div className='grid grid-cols-2 structure mb-10 mt-10'>
                <div className='info text-start'>
                    <h1 className='text-5xl font-bold mb-5'>You can also revise</h1>
                    <p className='mb-5 w-2/3'>by ticking off items one by one from the full UK MLA curriculum, and track your progress as you cover all the material</p>
                    <button className='blog-button'>Start Free Trial</button>
                </div>
                <div className='info-image'>
                    <img src={side3} alt="" />
                </div>
            </div>
            {/* Second Blog */}
            <div className='grid grid-cols-2 structure mb-10 mt-10'>
                <div className='info-image'>
                    <img src={side4} alt="" />
                </div>
                <div className='info text-end'>
                    <h1 className='text-5xl font-bold mb-5'>Monitor Your Progress</h1>
                    <p className='mb-5  info-text'>And receive weekly email notifications of your progress.</p>
                    <button className='blog-button'>Start Free Trial</button>
                </div>
            </div>
            {/* Second Blog */}
            <div className='grid grid-cols-2 structure mb-10 mt-10'>
                <div className='info text-start'>
                    <h1 className='text-5xl font-bold mb-5'>See Your Status</h1>
                    <p className='mb-5 w-2/3'>By ticking off items one by one from the full UK MLA curriculum,
                        and track your progress as you cover all the material.</p>
                    <button className='blog-button'>Start Free Trial</button>
                </div>
                <div className='info-image'>
                    <img src={side6} alt="" />
                </div>
            </div>
        </section >
    );
};

export default Blogs;