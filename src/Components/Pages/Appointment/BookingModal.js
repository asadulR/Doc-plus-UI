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


        setTreatment(null);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle hover:bg-red-600 border-0 absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-secondary text-center text-lg">Booking fpr: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-3'>
                        <input name='date' type="text" disabled value={format(selected, 'PP')} class="input input-bordered input-primary w-full max-w-sm " />
                        <select name='timeSlot' class="select select-primary w-full max-w-sm">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' required placeholder="Full Name" class="input input-bordered input-primary w-full max-w-sm " />
                        <input type="number" name='number' required placeholder="Phone Number" class="input input-bordered input-primary w-full max-w-sm " />
                        <input type="email" name='email' required placeholder="Email" class="input input-bordered input-primary w-full max-w-sm " />
                        <input type="Submit" value='SUBMIT' class=" btn btn-secondary w-full max-w-sm text-white text-lg" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;