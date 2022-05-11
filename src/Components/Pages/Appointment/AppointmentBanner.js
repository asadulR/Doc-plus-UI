import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
const AppointmentBanner = () => {
    const [selected, setSelected] = useState(new Date());
    return (
        <div class="hero min-h-screen" style={{
            background: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <div class="hero-content flex-col md:gap-20 lg:flex-row-reverse">
                <img src={chair} alt='' class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <DayPicker 
                    mode="single"
                    selected={selected}
                    onSelect={setSelected}/>
                    {/* <p>You have selected: {format(selected, 'pp')}</p> */}
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;