import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import google from '../../../images/social/google.png';
import auth from '../../../.firebase.init';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    }
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
        navigate('/home');
    }
    return (
        <div>
            <div className='flex items-center justify-center'>
                <div className='lg:m-10 lg:p-10  sm:w-64 md:w-96 lg:w-96 2xl:w-96  shadow-xl bg-gray-100'>
                    <p className='text-2xl text-center font-bold mb-6 mt-4'>Register</p>
                    <form onSubmit={handleRegister}>
                        <div className="mx-auto w-80 relative mb-5">
                            <input type="text" name="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-black focus:border-black block w-full p-2.5" placeholder="Name" required />
                        </div>
                        <div className="mx-auto w-80 relative mb-5">
                            <input type="email" name="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-black focus:border-black block w-full p-2.5" placeholder="Email" required />
                        </div>
                        <div className="mx-auto w-80 relative mb-5">
                            <input type="password" name="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-black focus:border-black block w-full p-2.5" placeholder="Password" required />
                        </div>
                        <div className="mx-auto w-80 relative mb-5">
                            <input type="password" name="confirm-password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-black focus:border-black block w-full p-2.5" placeholder="Confirm Password" required />
                        </div>
                        <input type='submit' className="w-80 block text-white bg-black hover:bg-white hover:text-black hover:border hover:border-black text-sm px-12 py-3  text-center mb-5 mx-auto mt-3 font-bold" value="Register" />
                    </form>
                    <div className='flex items-center mt-10'>
                        <div className='border border-b-1  border-black mb-2 w-40 mx-auto mt-3'></div>
                        <span className='ml-2 mr-2 text-sm font-bold text-slate-600'>OR</span>
                        <div className='border border-b-1  border-black mb-2 w-40 mx-auto mt-3'></div>
                    </div>
                    <br />
                    <button onClick={() => signInWithGoogle()} className='flex items-center mx-auto py-2.5 px-5  mb-2 text-sm bg-black border  text-slate-200'>
                        <img style={{ width: "25px", height: "25px" }} src={google} alt="" />
                        <span className='pl-2'>Continue with Google</span>
                    </button>
                    <div className='text-sm text-center mb-10 mt-4'><p>Already registered?  <span className='text-md hover:underline hover:text-amber-800 cursor-pointer' onClick={navigateLogin}> Please Login</span></p></div>
                </div>
            </div>
        </div>
    );
};

export default Register;