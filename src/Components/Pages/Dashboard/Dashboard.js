import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet } from 'react-router-dom';
import useAdmin from '../../../hooks/useAdmin';
import auth from '../../Shared/Auth/firebase.init';
import CustomLink from '../../Shared/CustomLink/CustomLink';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    // const [admin] = useAdmin(user)
    // console.log(admin)
    const admin = true;
    return (
        <section className='container mx-auto px-3 mt-16'>

            <div className="drawer drawer-mobile ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content mt-5">
                    <div className='text-right'>
                        <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                    </div>
                    {/* <!-- Page content here --> */}
                    <h2 className='text-3xl text-center font-bold text-secondary'>Your Dashboard</h2>
                    <Outlet />

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-60 bg-violet-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <CustomLink className="btn btn-ghost btn-md" to='/dashboard'>My Appointments</CustomLink>
                        <CustomLink className="btn btn-ghost btn-md" to='/dashboard/myreview'>My Review</CustomLink>
                        { admin && 
                        <>
                            <CustomLink className="btn btn-ghost btn-md" to='/dashboard/users'>All Users</CustomLink>
                            <CustomLink className="btn btn-ghost btn-md" to='/dashboard/addDoctor'>Add a Doctor</CustomLink>
                            <CustomLink className="btn btn-ghost btn-md" to='/dashboard/manageDoctors'>Manage Doctors</CustomLink>
                        </>
                        }

                    </ul>

                </div>
            </div>

            {/* <Footer/> */}
        </section>
    );
};

export default Dashboard;