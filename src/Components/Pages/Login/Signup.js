import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";

import auth from '../../Shared/Auth/firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';
import { Link, useNavigate } from 'react-router-dom';



import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const onSubmit = async data => {
        // console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data?.name });
    };
    const navigate = useNavigate();
    let signInErrorMessage;

    useEffect(() => {
        if (user || guser) {
            navigate('/appointment');
        };
    }, [user, guser, navigate]);
    if (loading || gloading || updating) {
        return <Loading />
    }

    if (error || gerror || updateError) {
        signInErrorMessage = <p className='text-red-700'><small>{error?.message || gerror?.message || updateError?.message}</small></p>
    }


    return (
        <section className='container mx-auto px-3 my-10'>
            <div className='h-screen justify-center items-center'>
                <div className="card max-w-lg mx-auto shadow-xl" data-aos="fade-up"
                    data-aos-duration="1500">
                    <div className="card-body">
                        <h2 className="text-center text-secondary text-xl font-bold">Sign Up</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Enter your name" className="input input-bordered w-full input-primary "
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "Name is Required"
                                        }
                                    })}

                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-700">{errors.name.message}</span>}
                                </label>
                            </div>
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
                            <input className='btn w-full ' type="submit" value='Sign up' />
                        </form>
                        <p className='text-center text-accent'><small>Already have an account? <Link to='/login' className='text-secondary text-semibold'>Please Login</Link></small></p>
                        {signInErrorMessage}
                        <div className="divider text-xs">OR</div>
                        <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-primary hover:text-white font-bold">Continue with Google</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signup;