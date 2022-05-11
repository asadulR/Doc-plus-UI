import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../../Shared/CustomLink/CustomLink';

const Header = () => {
    return (
        <section className=' shadow bg-base-100' style={{position:"sticky", top:"0"}}>
            <div className='container mx-auto'>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabindex="0" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><CustomLink to='/' >Home</CustomLink></li>
                                <li><CustomLink to='/appointment' >Appointment</CustomLink></li>
                                <li><CustomLink to='/review' >Review</CustomLink></li>
                                <li><CustomLink to='/contact' >Contact </CustomLink></li>
                                <li><CustomLink to='/about' >About</CustomLink></li>
                            </ul>
                        </div>
                        <Link to='/' className=" text-primary normal-case font-bold text-2xl">Doc +</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            <li><CustomLink to='/' >Home</CustomLink></li>
                            <li><CustomLink to='/appointment' >Appointment</CustomLink></li>
                            <li><CustomLink to='/review' >Review</CustomLink></li>
                            <li><CustomLink to='/contact' >Contact </CustomLink></li>
                            <li><CustomLink to='/about' >About</CustomLink></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <CustomLink to='/login' className='btn btn-ghost normal-case'>Login</CustomLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;