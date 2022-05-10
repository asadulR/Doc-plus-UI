import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../../Shared/CustomLink/CustomLink';

const Header = () => {
    return (
        <section className=' shadow-md'>
            <div className='container mx-auto'>
                <div class="navbar bg-base-100">
                    <div class="navbar-start">
                        <div class="dropdown">
                            <label tabindex="0" class="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><CustomLink to='/' >Home</CustomLink></li>
                                <li><CustomLink to='/appointment' >Appointment</CustomLink></li>
                                <li><CustomLink to='/review' >Review</CustomLink></li>
                                <li><CustomLink to='/contact' >Contact </CustomLink></li>
                                <li><CustomLink to='/about' >About</CustomLink></li>

                            </ul>
                        </div>
                        <Link to='/' class="btn btn-ghost normal-case text-xl">Doc +</Link>
                    </div>
                    <div class="navbar-center hidden lg:flex">
                        <ul class="menu menu-horizontal p-0">
                            <li><CustomLink to='/' >Home</CustomLink></li>
                            <li><CustomLink to='/appointment' >Appointment</CustomLink></li>
                            <li><CustomLink to='/review' >Review</CustomLink></li>
                            <li><CustomLink to='/contact' >Contact </CustomLink></li>
                            <li><CustomLink to='/about' >About</CustomLink></li>
                        </ul>
                    </div>
                    <div class="navbar-end">
                        <CustomLink to='/login' className='btn btn-ghost normal-case'>Login</CustomLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;