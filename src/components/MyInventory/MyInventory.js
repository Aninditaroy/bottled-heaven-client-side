import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../.firebase.init';
import usePerfumes from '../../hooks/usePerfumes';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MyInventory = () => {
    const [user] = useAuthState(auth);
    const [myInventoryLists, setMyInventoryLists] = useState([]);
    const navigate = useNavigate();
    const [perfumes, setPerfumes] = usePerfumes();
    useEffect(() => {
        const url = `https://nameless-temple-36405.herokuapp.com/perfumes?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyInventoryLists(data))
    }, [myInventoryLists, user]);
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://nameless-temple-36405.herokuapp.com/perfumes/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    toast(data);
                    const remaining = perfumes.filter(perfume => perfume._id !== id);
                    setPerfumes(remaining);
                })
        }
    }
    return (
        <div>
            {
                myInventoryLists.map(myInventoryList => <>
                    <div key={myInventoryList._id} myInventiryList={myInventoryList} className='flex'>
                        <div class="w-2/4 flex flex-col mx-auto bg-white shadow-lg rounded-lg overflow-hidden border-t my-5">
                            <div class="flex justify-between px-6 py-4">
                                <div class="bg-blue-500 text-xs  px-2 py-2.5 rounded border border-gray-200 text-white font-bold">My Inventory</div>
                                <div class=" bg-blue-500 text-xs px-2 py-2.5 rounded border border-gray-200 text-gray-200 font-bold">{myInventoryList.email}</div>
                            </div>
                            <div class="px-6 py-4 border-t border-gray-200 w-screen">
                                <div class="border rounded-lg p-4 bg-gray-100">
                                    <div class="w-full lg:w-1/2 p-3">
                                        <div class="flex flex-col lg:flex-row-reverse rounded overflow-hidden h-auto w-full border  shadow-lg">
                                            <img class="block h-auto w-full lg:w-48 flex-none bg-cover" src={myInventoryList.img} alt='' />
                                            <div class="bg-gray-100 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                                <p class="text-black font-bold text-2xl leading-tight mt-5">{myInventoryList.name}</p>
                                                <p class="text-black font-bold text-xl leading-tight mt-5">${myInventoryList.price}</p>
                                                <p class="text-grey-darker text-base">{myInventoryList.description}</p>
                                                <span class="text-md font-bold  my-2">Quantity: {myInventoryList.quantity}</span>
                                                <span class="text-sm font-bold text-blue-600  my-2">Supplier: {myInventoryList.supplier_name}</span>
                                            </div>
                                        </div>
                                        <button onClick={() =>handleDelete(myInventoryList._id)} type="button" class="mt-5 inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs  uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Delete </button>
                                        <p class="text-gray-500 mb-6 text-xs my-3">Once you delete, you will lose all data associated with it.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ToastContainer/>
                    </div>
                </>
                )
            }
        </div>
    );
};

export default MyInventory;
