import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L0sFbGquOMSRORHwelQOLdRt2bmPIcZpPbq0axCnnI8AeZrstuUEDTja7uFqOGIh4AE7I5Ee84L3JJsfziE3vA400SaurUASl');


const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`;
    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='px-4 my-5'>
            <div class="card w-50 max-w-lg my-6 bg-base-100 shadow-xl mx-auto">
                <div class="card-body">
                    <h2 class="card-title mb-3 font-bold">Pay for <span className='text-primary'>{appointment.treatment}</span></h2>
                    <p className='font-semibold text-accent'>Hello, <span className='text-secondary'>{appointment.patientName}</span></p>
                    <p className='font-semibold text-accent'>Your Appointment on <span className='text-secondary'>{appointment.date}</span> at <span className='text-secondary'>{appointment.timeSlot}</span></p>
                    <p className='font-semibold text-accent'>Please pay: ${appointment.price}</p>
                </div>
            </div>
            <div class="card w-50 max-w-lg my-6 bg-base-100 shadow-xl mx-auto">
                <div class="card-body ">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;