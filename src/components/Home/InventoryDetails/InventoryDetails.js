import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import useInventoryDetails from './../../../hooks/useInventoryDetails';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const InventoryDetails = () => {
    const { inventoryId } = useParams();
    const [inventoryDetails, setinventoryDetails] = useInventoryDetails(inventoryId);
    const handleInventoryDetails = (event) => {
        // console.log(event.target.id)
        event.preventDefault();
        let quantity = parseInt(inventoryDetails.quantity)
        if (event.target.id === 'delivered') {
            quantity -= 1;
            toast('One Perfume Delivered')
        }
        if (event.target.id === 'restock') {

            const restokeQuantity = parseInt(event.target.quantity.value)
            quantity += restokeQuantity;
            event.target.quantity.value = ' ';
            toast('Perfume Restocked')
        }
        const updatedUser = { quantity };

        //send data to the server
        const url = `https://nameless-temple-36405.herokuapp.com/perfumes/${inventoryId}`
        fetch(url, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                // alert("user added successfully!!")

            })
    }
    return (
        <>
            <Link to='/manageinventories' className='flex justify-center mx-auto'>
                <button className='w-80 block text-white bg-black hover:bg-white hover:text-black border border-black hover:border-blacks text-sm px-12 py-3  text-center mx-auto mt-6 font-bold'>
                    Manage Inventories
                </button>
            </Link>
            <div className='my-10 flex items-center justify-center'>
                <div className="flex flex-col items-center  rounded-lg border shadow-md md:flex-row md:max-w-xl bg-gray-100 sm:w-22 sm:px-5">
                    <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={inventoryDetails.img} alt="" />
                    <div className="flex flex-col justify-between leading-normal my-12 mx-2">
                        <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{inventoryDetails.name}</h5>
                        <small className="text-xl">${inventoryDetails.price}</small>
                        <p className="text-sm tracking-tight text-slate-600 leading-6 py-2 pr-2">{inventoryDetails.description}</p>
                        <span className='text-md font-semibold mb-3'>Quantity: <span className="bg-gray-200/70 text-gray-800 text-sm font-semibold mr-2 px-3 py-2 rounded">{inventoryDetails.quantity} in stock</span>
                        </span>

                        <form onSubmit={handleInventoryDetails} id="restock" className='flex justify-center items-center'>
                            <input type="number" name="quantity" placeholder="Qty" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-32 h-10 px-3 py-4 mt-4 font-bold " />
                            <button type="submit" className="text-white bg-black flex mx-auto hover:bg-white hover:text-black border mr-14 hover:border-black rounded-lg text-sm px-5 py-2  text-center mb-1  mt-5 font-bold">Restock Quantity</button>
                        </form>
                        <br />
                        <small className="text-blue-400 text-sm mb-2">Supplier: {inventoryDetails.supplier_name}</small>
                        <button onClick={handleInventoryDetails} type="button" id='delivered' className="w-72 block text-white bg-black hover:bg-white hover:text-black border  hover:border-black rounded-lg text-sm py-3 mr-16 text-center mb-2  mt-3 font-bold" >Delivered</button>
                        <ToastContainer/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InventoryDetails;