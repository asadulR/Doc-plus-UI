import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../../Shared/CustomLink/CustomLink';

const Dashboard = () => {
    return (
        <div className='container mx-auto px-3'>

            <div class="drawer drawer-mobile ">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content mt-5">
                    <div className='text-right'>
                        <label for="my-drawer-2" class="btn btn-ghost drawer-button lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                    </div>
                    {/* <!-- Page content here --> */}
                    <h2 className='text-3xl text-center font-bold text-secondary'>Your Dashboard</h2>
                    <Outlet />

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-violet-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <CustomLink className="btn btn-ghost btn-sm" to='/dashboard/myreview'>Review</CustomLink>
                        <CustomLink className="btn btn-ghost btn-sm" to='/dashboard'>Dashboard</CustomLink>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;