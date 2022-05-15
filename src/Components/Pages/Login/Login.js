import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";

import auth from '../../Shared/Auth/firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
    };
    let signInErrorMessage;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    useEffect(() => {
        if (user || guser) {
            // console.log(user || guser);
            navigate(from, { replace: true });
        }
    }, [user, guser, from, navigate])
    if (loading || gloading) {
        return <Loading />
    }

    if (error || gerror) {
        signInErrorMessage = <p className='text-red-700'><small>{error?.message || gerror?.message}</small></p>
    }


    return (
        <section className='container mx-auto px-3 mt-28 mb-10'>
            <div className='h-screen justify-center items-center'>
                <div className="card max-w-lg mx-auto shadow-xl" data-aos="fade-up"
                    data-aos-duration="1500">
                    <div className="card-body">
                        <h2 className="text-center text-secondary text-xl font-bold">Login</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Enter your email" className="input input-bordered w-full input-primary "
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "Email is Required"
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })}

                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}

                                </label>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Enter your Password" className="input input-bordered w-full input-primary"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: "Password is Required"
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    })}

                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-700">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-700">{errors.password.message}</span>}

                                </label>
                            </div>
                            <input className='btn w-full ' type="submit" value='Login' />
                        </form>
                        <p className='text-center text-accent'><small>New to Doc+? <Link to='/signup' className='text-secondary text-semibold'>Create new account</Link></small></p>
                        {signInErrorMessage}
                        <div className="divider text-xs">OR</div>
                        <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-primary hover:text-white font-bold">Continue with Google</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;