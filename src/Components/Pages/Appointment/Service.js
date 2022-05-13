import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max:w-96 shadow-lg text-accent">
            <div className="card-body items-center text-center">
                <h2 className="text-xl font-bold text-secondary">{name}</h2>
                <p>
                    {
                        slots.length ?
                            <span>{slots[0]}</span> :
                            <span className=' text-red-500'>Try another date</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-end">
                    <label 
                    onClick={() => setTreatment(service)}
                    disabled={slots.length === 0}
                    for="booking-modal" className="btn btn-secondary btn-sm text-white bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;