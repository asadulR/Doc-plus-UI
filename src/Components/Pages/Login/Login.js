import React from 'react';
import auth from '../../Shared/Auth/firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
const Login = () => {



    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if(user){
        console.log(user);
        console.log(user.email);
    }
    return (
        <section className='container mx-auto px-3'>
            <div className='flex h-screen justify-center items-center'>
                <div class="card max:w-96 shadow-xl">
                    <div class="card-body">
                        <h2 class="text-center text-accent text-lg font-bold">Login</h2>
                        <form>
                            <input type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />
                        </form>

                        <div class="divider">OR</div>
                        <button onClick={() => signInWithGoogle()} class="btn btn-outline btn-primary hover:text-white font-bold">Continue with Google</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;