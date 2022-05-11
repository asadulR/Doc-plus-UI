import React from 'react';
import img from '../../../assets/images/chair.png'
import './Home.css'
const Banner = () => {
    return (
        <div className=' container mx-auto banner-section-home px-3'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12 items-center">
                <div>
                    <h1 className="text-5xl font-bold max-w-lg text-accent">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-700">Get Started</button>
                </div>
                <img src={img} alt='' className=" w-full rounded-lg banner-image" />

            </div>
        </div>
    );
};

export default Banner;