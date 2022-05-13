import React from 'react';
import cavity from '../../../assets/images/cavity.png';
import fluoridd from '../../../assets/images//fluoride.png';
import whitening from '../../../assets/images/whitening.png';
import treatment from '../../../assets/images/treatment.png';
import './Home.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Services = () => {
    return (
        <section>
            <div className="container mx-auto ">
                <h5 className='text-center text-secondary mb-1 font-semibold'>OUR SERVICES</h5>
                <h2 className='text-center text-3xl font-semibold'>Services We Provide</h2>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-16 px-2'>
                    <div className=' text-center p-6 shadow-lg rounded-lg' data-aos="flip-right" data-aos-duration="1500">
                        <img className=' w-24 mb-6 mx-auto' src={fluoridd} alt="" />
                        <h4 className='text-accent font-bold mb-4 transition hover:text-secondary'>Fluoride Treatment</h4>
                        <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                    </div>
                    <div className=' text-center p-6 shadow-lg rounded-lg'data-aos="flip-up" data-aos-duration="1500">
                        <img className='w-24 mb-6 mx-auto' src={cavity} alt="" />
                        <h4 className='text-accent font-bold mb-4 transition hover:text-secondary'>Cavity Filling</h4>
                        <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                    </div>
                    <div className=' text-center p-6 shadow-lg rounded-lg' data-aos="flip-left" data-aos-duration="1500">
                        <img className='w-24 mb-6 mx-auto' src={whitening} alt="" />
                        <h4 className='text-accent font-bold mb-4 transition hover:text-secondary'>Teeth Whitening</h4>
                        <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                    </div>
                </div>


                <div className='my-20 max-w-5xl px-3 mx-auto'>
                    <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-12">
                        <div className='p-6' data-aos="flip-left" data-aos-duration="1500">
                            <img className='rounded-lg' src={treatment} alt="" />
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="1500">
                            <h2 className=' text-accent text-4xl mb-4 font-bold'>Exceptional Dental Care, on Your Terms</h2>
                            <p className='mb-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-700">Get Started</button>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;