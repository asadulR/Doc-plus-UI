import React from 'react';
import chair from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
const AppointmentBanner = ({ selected, setSelected }) => {

    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p>You picked {format(selected, 'PP')}.</p>;
    }
    return (
        <div className="hero min-h-screen container mx-auto" style={{
            background: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <div className="hero-content flex-col md:gap-20 lg:flex-row-reverse">
                <div className='max-w-sm mx-auto'>
                    <img src={chair} alt='' className="img-full mx-auto rounded-lg shadow-2xl" />
                </div>
                <div className=' max-w-sm mx-auto'>
                    <DayPicker className='w-full'
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}
                        footer={footer}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;