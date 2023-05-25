import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import auth from '../../.firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddInventories = () => {
    const { handleSubmit, register } = useForm();
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const onSubmit = data => {
        const url = `https://bottled-heaven-server-side.vercel.app/perfumes`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast('New Inventory Added');
            });
    }
    return (
        <div>
            <div className='flex items-center justify-center mt-8 mb-16'>
                <div className='lg:m-10 lg:p-10 sm:w-44 md:w-96 lg:w-96 2xl:w-96  shadow-xl bg-gray-100 rounded-lg'>
                    <p className='text-xl text-center font-bold mb-10 mt-4'>New Inventory</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mx-auto w-80 relative mb-5">
                            <input type="email" name="email"  {...register("email")} value={user?.email} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-black focus:border-black block w-full p-2.5" placeholder="Email" />
                        </div>
                        <div className="mx-auto w-80 relative mb-5">
                            <input type="text" name="name"  {...register("name")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-black focus:border-black block w-full p-2.5" placeholder="Name" />
                        </div>
                        <div className="mx-auto w-80 relative mb-5">
                            <input type="text" name="img"  {...register("img")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-black focus:border-black block w-full p-2.5" placeholder="Photo URL" />
                        </div>
                        <div className="mx-auto w-80 relative mb-5">
                            <textarea type="text" name="description"  {...register("description")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-black focus:border-black block w-full p-2.5" placeholder="Description" required />
                        </div>
                        <div className="mx-auto w-80 relative mb-5">
                            <input type="number" name="price"  {...register("price")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-black focus:border-black block w-full p-2.5" placeholder="Price" required />
                        </div>
                        <div className="mx-auto w-80 relative mb-5">
                            <input type="number" name="quantity"  {...register("quantity")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-black focus:border-black block w-full p-2.5" placeholder="Quantity" />
                        </div>
                        <div className="mx-auto w-80 relative mb-5">
                            <input type="text" name="supplier_name"  {...register("supplier_name")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-black focus:border-black block w-full p-2.5" placeholder="Supplier Name" />
                        </div>
                        <input type='submit' className="w-80 block text-white bg-black hover:bg-white hover:text-black border hover:border-black text-sm px-12 py-3  text-center mb-5 mx-auto mt-3 font-bold" value="Add" />
                    </form>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default AddInventories;