import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('https://doc-plus-server.herokuapp.com/doctors', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
    }).then(res => res.json()));
    // console.log(doctors)
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='px-3'>
            <h2 className='text-2xl mt-4 font-bold text-primary'>Manage All Doctors {doctors.length}</h2>
            <div className="overflow-x-auto mt-6">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className='font-bold text-secondary'>Avatar</th>
                            <th className='font-bold text-secondary'>Name</th>
                            <th className='font-bold text-secondary'>Speciality</th>
                            <th className='font-bold text-secondary'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <>
                            {
                                doctors?.map(doctor => <DoctorRow
                                    key={doctor._id}
                                    doctor={doctor}
                                    refetch={refetch}
                                ></DoctorRow>)
                            }
                        </>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;