import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({ selected }) => {
    let footer;;
    if (selected) {
        footer = <>{format(selected, 'PP')}.</>;
    }

    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);


    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);

    // console.log(services)
    return (
        <section className='mb-12 mt-4'>
            <h2 className='text-center text-secondary font-semibold text-2xl'>Available Appointments on {footer}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12'>
                {
                    services.map(service => <Service
                    key={service._id}
                    service={service}
                    setTreatment = {setTreatment}
                    ></Service>)

                }
            </div>
                {treatment && <BookingModal 
                selected={selected} 
                treatment = {treatment} 
                setTreatment={setTreatment}
                />}
        </section>
    );
};

export default AvailableAppointment;