import React from 'react';
import img from '../../../assets/images/chair.png'
const Banner = () => {
    return (
        <div className='container mx-auto'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} alt='' className="max-w-sm rounded-lg shadow-2xl transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-700" />
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6 max-w-3xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-700">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;