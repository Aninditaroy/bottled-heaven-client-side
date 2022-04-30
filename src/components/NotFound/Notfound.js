import React from 'react';
import { useNavigate } from 'react-router-dom';

const Notfound = () => {
    const navigate = useNavigate();
    const navigateHomePage = () =>{
        navigate('/home');
    }
    return (
        <div className='text-center my-52'>
            <h4 className='text-3xl font-bold mb-5'>Ooops! Error 404</h4>
            <p className='text-sm font-medium mb-5'>Sorry, But the page you are looking for doesn't exist!</p>
            <button onClick={navigateHomePage} className='w-80 block text-white bg-black hover:bg-white hover:text-black hover:border hover:border-black text-sm px-12 py-3  text-center mb-5 mx-auto mt-3 font-bold'>Go to home page</button>
        </div>
    );
};

export default Notfound;