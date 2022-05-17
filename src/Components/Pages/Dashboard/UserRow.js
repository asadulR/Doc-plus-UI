import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const UserRow = ({ user, refetch, index }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    toast.error('Faild to maike an admin!')
                }
               return res.json()})
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success(`Successfully made an admin!`)
                }
            })
    }
    return (
        <tr className="hover">
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
            <td><button className='btn btn-xs bg-red-700 hover:bg-red-500 border-0'>Remove</button></td>
            <ToastContainer/>
        </tr>
    );
};

export default UserRow;