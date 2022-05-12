import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div class="card lg:max:w-96 shadow-lg text-accent">
            <div class="card-body items-center text-center">
                <h2 class="card-title text-secondary">{name}</h2>
                <p>
                    {
                        slots.length ?
                            <span>{slots[0]}</span> :
                            <span className=' text-red-500'>Try another date</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div class="card-actions justify-end">
                    <label 
                    onClick={() => setTreatment(service)}
                    disabled={slots.length === 0}
                    for="booking-modal" class="btn btn-secondary text-white">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;