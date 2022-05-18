import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const DoctorRow = ({ doctor, refetch }) => {
    const { name, img, email, specialty, _id } = doctor;

    const handleDelete = (email) => {
        const dltConfirmation = window.confirm('Confirm delete?');

        if (dltConfirmation === true) {
            fetch(`http://localhost:5000/doctors/${email}`, {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        // toast.success(`${name} is deleted!`)
                        refetch()
                    }
                })
        }
    }
    return (
        <>
            <tr className="hover">
                <td>
                    <div className="avatar online">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ">
                            <img src={img} alt='' />
                        </div>
                    </div>
                </td>
                <td className='font-semibold text-lg'>{name}</td>
                <td className='font-semibold text-lg'>{specialty}</td>
                <td><button onClick={() => handleDelete(email)} className='btn btn-xs btn-error'>Delete</button></td>

            </tr>
            <ToastContainer />
        </>
    );
};

export default DoctorRow;