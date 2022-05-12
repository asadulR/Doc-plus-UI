import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
    const [selected, setSelected] = useState(new Date());
    return (
        <main className='container mx-auto px-5'>
            <AppointmentBanner selected={selected} setSelected={setSelected}/>
            <AvailableAppointment selected={selected}/>
            <Footer/>
        </main>
    );
};

export default Appointment;