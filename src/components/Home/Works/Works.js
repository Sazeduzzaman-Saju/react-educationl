import React from 'react';
import './Works.css';
import Access from '../../../img/icons/access.png';
import Check from '../../../img/icons/check.png';
import Question from '../../../img/icons/question.png';
import SignUp from '../../../img/icons/sign-up.png';
const Works = () => {
    return (
        <div className='works'>
            <div className=" text-gray-100">
                <div className="py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-extrabold sm:text-4xl">How It Works</h2>
                        <p className="mt-4 text-lg dark:text-gray-400">Pellentesque viverra, leo id euismod laoreet,<br /> nunc risus molestie orci, vel faucibus quam justo id mauris.</p>
                    </div>
                    <div className="works-items container mt-12 space-y-5 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
                        <div className="flex flex-col">
                            <div className='works-icons'>
                                <img src={SignUp} alt="" />
                            </div>
                            <div className="">
                                <dt className="text-lg font-medium">Sign Up</dt>
                                <div className='flex justify-start items-center'>
                                    <hr />
                                    <span class="dot"></span>
                                    <hr />
                                </div>
                                <dd className="mt-2 dark:text-gray-400">Montes vivamus curae quisque et primis pretium nullam.</dd>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className='works-icons'>
                                <img src={Access} alt="" />
                            </div>
                            <div className="">
                                <dt className="text-lg font-medium">Get access</dt>
                                <div className='flex justify-start items-center'>
                                    <hr />
                                    <span class="dot"></span>
                                    <hr />
                                </div>
                                <dd className="mt-2 dark:text-gray-400">Access to question bank of over 2000 questions</dd>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className='works-icons'>
                                <img src={Question} alt="" />
                            </div>
                            <div className="">
                                <dt className="text-lg font-medium">Practice questions</
                                dt>
                                <div className='flex justify-start items-center'>
                                    <hr />
                                    <span class="dot"></span>
                                    <hr />
                                </div>
                                <dd className="mt-2 dark:text-gray-400">Prepare for the MLA exam in multiple modes of revision</dd>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className='works-icons'>
                                <img src={Check} alt="" />
                            </div>
                            <div className="">
                                <dt className="text-lg font-medium">Get Result</dt>
                                <div className='flex justify-start items-center'>
                                    <hr />
                                    <span class="dot"></span>
                                    <hr />
                                </div>
                                <dd className="mt-2 dark:text-gray-400">Compare your results with your peers' with advanced analytics</dd>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Works;