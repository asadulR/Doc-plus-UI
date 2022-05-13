import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selected, setTreatment }) => {
    const { name, slots, _id } = treatment;

    const handleBooking = event => {
        event.preventDefault()

        const date = event.target.date.value;
        const timeSlot = event.target.timeSlot.value;
        const name = event.target.name.value;
        const number = event.target.number.value;
        const email = event.target.email.value;
        // console.log(date, timeSlot, _id, name, number, email);


        // to close the modal 
        setTreatment(null);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle hover:bg-red-600 border-0 absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-secondary text-center text-lg">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-3'>
                        <input name='date' type="text" disabled value={format(selected, 'PP')} className="input input-bordered input-primary w-full max-w-sm " />
                        <select name='timeSlot' className="select select-primary w-full max-w-sm">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' required placeholder="Full Name" className="input input-bordered input-primary w-full max-w-sm " />
                        <input type="number" name='number' required placeholder="Phone Number" className="input input-bordered input-primary w-full max-w-sm " />
                        <input type="email" name='email' required placeholder="Email" className="input input-bordered input-primary w-full max-w-sm " />
                        <input type="Submit" value='SUBMIT' className=" btn btn-secondary w-full max-w-sm text-white text-lg bg-gradient-to-r from-secondary to-primary" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;