import React from 'react';
import { useForm } from "react-hook-form";

import auth from '../../Shared/Auth/firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)

    };

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (user) {
        console.log(user);
        console.log(user.email);
    }
    return (
        <section className='container mx-auto px-3 my-10'>
            <div className='h-screen justify-center items-center'>
                <div className="card max-w-lg mx-auto shadow-xl">
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
                            <input className='btn w-full ' type="submit" value='Login'/>
                        </form>

                        <div className="divider text-xs">OR</div>
                        <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-primary hover:text-white font-bold">Continue with Google</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;