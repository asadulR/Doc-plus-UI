import React from 'react';
import doctor from '../../../assets/images/doctor-small.png';
import appointment from '../../../assets/images/appointment.png';
const HomeAppointment = () => {
    return (
        <section className=" md:mt-60">
            <div className=' block md:flex items-center' style={{
                background: `url(${appointment})`
            }}>
                <div className='flex-1 px-3'>
                    <img className='md:mt-[-200px]' src={doctor} alt="" />
                </div>
                <div className='flex-1 px-3'>
                    <h4 className='text-primary mb-4 text-xl font-semibold'>Appointment</h4>
                    <h2 className='text-3xl font-bold text-white mb-4'>Make an appointment Today</h2>
                    <p className='mb-4 text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-700">Get Started</button>

                </div>
            </div>
        </section>
    );
};

export default HomeAppointment;