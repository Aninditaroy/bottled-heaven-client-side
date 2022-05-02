import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useInventoryDetails from './../../../hooks/useInventoryDetails';

const InventoryDetails = () => {
    const { inventoryId } = useParams();
    const navigate = useNavigate();
    const [inventoryDetails] = useInventoryDetails(inventoryId);
    const [inventoryQuantity, setInventoryQuantity] = useState({});
    // const [quantites,setQuantites] = useState(0);
    const handleDelivered = id => {
        const oldQuantity = parseInt(inventoryQuantity.quantity);
        console.log(oldQuantity);
        const quantity = oldQuantity - 1;
        const inventory = { quantity };
        const url = `http://localhost:5000/perfumes/${id}`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(inventory)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                navigate('/manageinventories');
            });

    }

    return (
        <div className='my-32 flex items-center justify-center'>
            <div className="flex flex-col items-center  rounded-lg border shadow-md md:flex-row md:max-w-xl bg-gray-100 sm:w-22 sm:px-5">
                <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={inventoryDetails.img} alt="" />
                <div className="flex flex-col justify-between leading-normal my-12 mx-2">
                    <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{inventoryDetails.name}</h5>
                    <small className="text-xl">${inventoryDetails.price}</small>
                    <p className="text-sm tracking-tight text-slate-600 leading-6 py-2 pr-2">{inventoryDetails.description}</p>
                    <span className='text-md font-semibold mb-3'>Quantity: <span className="bg-gray-200/70 text-gray-800 text-sm font-semibold mr-2 px-3 py-1 rounded">{inventoryDetails.quantity} in stock</span>
                    </span>
                    <div className='flex justify-center items-center'>
                        <input type="text" name="quantity" id="quantity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-32 h-10 px-3 py-4 mt-4 font-bold " placeholder="Qty" required />
                        <button type="button" className="text-white bg-black flex mx-auto hover:bg-white hover:text-black border mr-14 hover:border-black rounded-lg text-sm px-5 py-2  text-center mb-1  mt-5 font-bold">Restock Quantity</button>
                    </div>
                    <br />
                    <small className="text-blue-400 text-sm mb-2">Supplier: {inventoryDetails.supplier_name}</small>
                    <button onClick={() => handleDelivered(inventoryId)} type="button" className="w-72 block text-white bg-black hover:bg-white hover:text-black border  hover:border-black rounded-lg text-sm py-3 mr-16 text-center mb-2  mt-3 font-bold">Delivered</button>
                </div>
            </div>
        </div>
    );
};

export default InventoryDetails;