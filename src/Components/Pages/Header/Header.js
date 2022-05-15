import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Shared/Auth/firebase.init';
import CustomLink from '../../Shared/CustomLink/CustomLink';

const Header = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };
    return (
        <section className=' '>
            <div className=''>
                <div className="navbar shadow-lg lg:px-20 bg-base-100 fixed top-0 z-50">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex="0" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <CustomLink to='/' className='btn btn-ghost normal-case'>Home</CustomLink>
                                <CustomLink to='/appointment' className='btn btn-ghost normal-case'>Appointment</CustomLink>
                                <CustomLink to='/review' className='btn btn-ghost normal-case'>Review</CustomLink>
                                <CustomLink to='/contact' className='btn btn-ghost normal-case'>Contact </CustomLink>
                                <CustomLink to='/about' className='btn btn-ghost normal-case'>About</CustomLink>
                                {
                                    user && <CustomLink to='/dashboard' className='btn btn-ghost normal-case'>Dashboard</CustomLink>
                                }
                            </ul>
                        </div>
                        <Link to='/' className=" text-primary normal-case font-bold text-2xl">Doc +</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            <CustomLink to='/' className='btn btn-ghost normal-case'>Home</CustomLink>
                            <CustomLink to='/appointment' className='btn btn-ghost normal-case'>Appointment</CustomLink>
                            <CustomLink to='/review' className='btn btn-ghost normal-case'>Review</CustomLink>
                            <CustomLink to='/contact' className='btn btn-ghost normal-case'>Contact </CustomLink>
                            <CustomLink to='/about' className='btn btn-ghost normal-case'>About</CustomLink>
                            {
                                user && <CustomLink to='/dashboard' className='btn btn-ghost normal-case'>Dashboard</CustomLink>
                            }
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            user ?
                                <button onClick={logout} className='btn btn-ghost normal-case'>Sign-out</button> :
                                <CustomLink to='/login' className='btn btn-ghost normal-case'>Login</CustomLink>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;