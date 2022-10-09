import React from 'react';
import './Service.css'

const Service = () => {
    return (
        <div className=''>
            <section className="container mx-auto px-4">
                <div className="mx-auto p-4 my-6 space-y-2 text-center">
                    <h2 className="text-5xl font-bold">Our Success</h2>
                    <p className="dark:text-gray-400">Libero minima optio qui</p>
                </div>
                <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-5 ">
                    <div className="flex flex-col items-center p-4 bg-gray-300 service-card mb-8">
                        <h3 className="my-3 text-3xl font-semibold">15K+</h3>
                        <div className="space-y-1 leading-tight">
                            <p>Number of students</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-gray-300 service-card mb-8">
                        <h3 className="my-3 text-3xl font-semibold">75%</h3>
                        <div className="space-y-1 leading-tight">
                            <p>Success Percentage</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-gray-300 service-card mb-8">
                        <h3 className="my-3 text-3xl font-semibold">35</h3>
                        <div className="space-y-1 leading-tight">
                            <p>Questions</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-gray-300 service-card mb-8">
                        <h3 className="my-3 text-3xl font-semibold">25+</h3>
                        <div className="space-y-1 leading-tight">
                            <p>Number of experts</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-gray-300 service-card mb-8">
                        <h3 className="my-3 text-3xl font-semibold">15+</h3>
                        <div className="space-y-1 leading-tight">
                            <p>Years of experience</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Service;