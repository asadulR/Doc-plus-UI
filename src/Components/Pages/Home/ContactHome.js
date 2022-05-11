import React from 'react';
import img from '../../../assets/images/appointment.png'
const ContactHome = () => {
    return (
        <section className='my-20' style={{
            background:`url(${img})`
        }}>
            <div className=' py-20 px-3'>
                <h5 className='text-center text-lg font-semibold text-primary'>Contact Us</h5>
                <h2 className='text-center font-semibold text-white mb-12 text-2xl'>Stay connected with us</h2>
                <form className=' max-w-xl mx-auto'>
                    <div className='mb-6'><input required type="email" placeholder="Your email" className="input input-bordered input-primary w-full " /></div>
                    <div className='mb-6'><input required type="text" placeholder="Subject" className="input input-bordered input-primary w-full " /></div>
                    <div className='mb-6'><textarea required className="textarea textarea-primary w-full" placeholder="Your message"></textarea>
                    </div>
                    <div className='text-center'><input type="submit" value='Send' className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-700 w-40 mx-auto"/></div>

                </form>
            </div>
        </section>
    );
};

export default ContactHome;