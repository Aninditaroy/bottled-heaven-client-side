import React, { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import google from '../../../images/social/google.png';
import auth from './../../../.firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef('');
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const passwordRef = useRef('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail, passwordSending, passwordError] = useSendPasswordResetEmail(auth);
    let errorElement;
    if (user || googleUser) {
        navigate(from, { replace: true });
    }
    if (error) {
        errorElement =
            <p className='text-red-600/100 text-center'>Error: {error?.message}</p>
    }
    const navigateRegister = () =>{
        navigate('/register');
    }
    const resetPassword = async() =>{
        const email = emailRef.current.value;
        if(email){
            sendPasswordResetEmail(email);
            toast('Send Email');
        }
        else{
            toast('Please enter your email address');
        }
        
    }
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email,password);
    }
    return (
        <div>
            <div className='flex items-center justify-center'>
                <div className='lg:m-10 lg:p-10 sm:m-0 sm:w-52 sm:p-0 md:w-96 lg:w-96 2xl:w-96  shadow-xl bg-gray-100'>
                    <p className='text-2xl text-center font-bold mb-6 mt-4'>Login</p>
                    <form onSubmit={handleSubmit}>
                        <div className="mx-auto w-80 relative mb-5">
                            <input ref={emailRef} type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-black focus:border-black block w-full p-2.5" placeholder="Email" required/>
                        </div>
                        <div className="mx-auto w-80 relative mb-5">
                            <input ref={passwordRef} type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-black focus:border-black block w-full p-2.5" placeholder="Password" required />
                        </div>
                        <button onClick={resetPassword}><p className='text-sm text-slate-500 hover:text-amber-800 hover:underline my-5'>Forget your password?</p></button>
                        <input type='submit' className="w-80 block text-white bg-black hover:bg-white hover:text-black hover:border hover:border-black text-sm px-12 py-3  text-center mb-5 mx-auto mt-3 font-bold" value="Login" />
                    </form>
                    {errorElement}
                    <div className='flex items-center mt-10 sm:p-16 lg:p-0'>
                        <div className='border border-b-1  border-black mb-2 w-40  mx-auto mt-3'></div>
                        <span className='ml-2 mr-2 text-sm font-bold text-slate-600'>OR</span>
                        <div className='border border-b-1  border-black mb-2 w-40 mx-auto mt-3'></div>
                    </div>
                    <br />
                    <button onClick={() => signInWithGoogle()} className='flex items-center mx-auto py-2.5 px-5  mb-2 text-sm bg-black border  text-slate-200'>
                        <img style={{ width: "25px", height: "25px" }} src={google} alt="" />
                        <span className='pl-2'>Continue with Google</span>
                    </button>
                    <div className='text-sm text-center mb-10 mt-4'><p>Don't have an account? <span className='hover:underline hover:text-amber-800 cursor-pointer' onClick={navigateRegister}>Create an account</span></p></div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};
export default Login;