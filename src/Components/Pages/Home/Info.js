import React from 'react';
import { BsClock, BsFillGeoAltFill, BsTelephonePlus } from "react-icons/bs";
const Info = () => {
    return (
        <section className='container mx-auto my-16'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-white px-2'>
                <div className='bg-gradient-to-r from-secondary to-primary px-5 py-8 text-center md:text-left rounded-2xl transition ease-in-out  hover:-translate-y-2 duration-700'>
                    <div className="md:flex gap-4 md:items-center">
                        <div className='mb-4'><BsClock className='text-8xl md:text-6xl font-bold mx-auto' /></div>
                        <div className=''>
                            <h3>Opening Hours</h3>
                            <p>Lorem Ipsum is simply dummy text of the pri</p>
                        </div>
                    </div>
                </div>
                <div className='bg-accent  px-5 py-8 rounded-2xl text-center md:text-left transition ease-in-out  hover:-translate-y-2 duration-700'>
                    <div className='md:flex gap-2 md:items-center'>
                        <div className='mb-4'><BsFillGeoAltFill className='text-8xl md:text-6xl mx-auto font-bold'/></div>
                        <div>
                            <h3>Visit our location</h3>
                            <p>Dhaka-1200, Bangladesh</p>
                        </div>
                    </div>
                </div>
                <div className='text-center md:text-left bg-gradient-to-r from-secondary to-primary transition ease-in-out  hover:-translate-y-2 duration-700 rounded-2xl px-5 py-8'>
                    <div className='md:flex gap-2 md:items-center'>
                        <div className='mb-4'><BsTelephonePlus className='text-8xl md:text-6xl mx-auto  font-bold' /></div>
                        <div>
                            <h3>Contact us now</h3>
                            <p>+8801908975000</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Info;