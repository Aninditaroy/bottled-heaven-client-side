import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import google from '../../../images/social/google.png';
import auth from '../../../.firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import useToken from './../../../hooks/useToken';

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
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
    const [token] = useToken(user || googleUser);
    if(token){
        navigate(from, { replace: true })
    }
    const handleRegister = async event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        if (password !== confirmPassword) {
            return swal("Error!", "Passwords didn't match!", "error");
        }
        await createUserWithEmailAndPassword(email, password);
        navigate('/home');
    }
    return (
        <div>
            <div className='flex items-center justify-center'>
                <div className='lg:m-10 lg:p-10  sm:w-64 md:w-96 lg:w-96 2xl:w-96  shadow-xl bg-gray-100'>
                    <p className='text-2xl text-center font-bold mb-6 mt-4'>Register</p>
                    <form onSubmit={handleRegister}>
                        <div className="mx-auto w-80 relative mb-5">
                            <input type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-black focus:border-black block w-full p-2.5" placeholder="Name" />
                        </div>
                        <div className="mx-auto w-80 relative mb-5">
                            <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-black focus:border-black block w-full p-2.5" placeholder="Email" required />
                        </div>
                        <div className="mx-auto w-80 relative mb-5">
                            <input type="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-black focus:border-black block w-full p-2.5" placeholder="Password" required />
                        </div>
                        <div className="mx-auto w-80 relative mb-5">
                            <input type="password" name="confirmPassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-black focus:border-black block w-full p-2.5" placeholder="Confirm Password" />
                        </div>
                        <input type='submit' className="w-80 block text-white bg-black hover:bg-white hover:text-black border hover:border-black text-sm px-12 py-3  text-center mb-5 mx-auto mt-3 font-bold" value="Register" />
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