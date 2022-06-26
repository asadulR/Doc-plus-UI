import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Shared/Auth/firebase.init';
import Loading from '../../Shared/Loading/Loading';

const MyAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    useEffect(() => {
        setLoading(true)
        if (user) {
            fetch(`https://doc-plus-server.herokuapp.com/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res =>{ 
                    if(res.status === 401 || res.status === 403){
                        navigate('/');
                        signOut(auth)
                        localStorage.removeItem('accessToken');
                    }
                    return res.json()
                })
                .then(data => {
                    setAppointments(data)
                    setLoading(false)
                });
        }
    }, [user, navigate]);


    return (
        <div className='mt-8 px-1'>
            <>
                {
                    loading ? (<Loading></Loading>) :
                        <div>
                            <h2 className='font-semibold text-primary mb-3'>Your Appointments {appointments.length}</h2>
                            <div className="overflow-x-auto">
                                <table className="table w-full">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th className='text-secondary'>Name</th>
                                            <th className='text-secondary'>Treatment</th>
                                            <th className='text-secondary'>Date</th>
                                            <th className='text-secondary'>Time</th>
                                            <th className='text-secondary'>Payment</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            appointments.map((a, index) => <tr className="hover" key={index}>
                                                <td>{index + 1}</td>
                                                <td>{a.patientName}</td>
                                                <td>{a.treatment}</td>
                                                <td>{a.date}</td>
                                                <td>{a.timeSlot}</td>
                                                <td>{(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}> <button className='btn btn-sm btn-success'>Pay</button></Link>}</td>
                                                <td>{(a.price && a.paid) && <span className='text-success'>Paid</span>}</td>
                                            </tr>)
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                }

            </>
        </div>
    );
};

export default MyAppointments;