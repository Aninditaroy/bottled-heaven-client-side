import React from 'react';
import { useParams } from 'react-router-dom';
import useInventoryDetails from './../../../hooks/useInventoryDetails';

const InventoryDetails = () => {
    const {inventoryId} = useParams();
    const [inventoryDetails] = useInventoryDetails(inventoryId);
    return (
        <div className='my-32 flex items-center justify-center'>
        <div class="flex flex-col items-center  rounded-lg border shadow-md md:flex-row md:max-w-xl bg-gray-100 ">
            <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={inventoryDetails.img} alt="" />
            <div class="flex flex-col justify-between leading-normal my-12">
                <h5 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{inventoryDetails.name}</h5>
                <small className="text-xl">{inventoryDetails.price}</small>
                    <p className="text-sm tracking-tight text-slate-600 leading-6 py-2 pr-2">{inventoryDetails.description}</p>
                    <span className='text-md font-semibold mb-3'>Quantity: <span className="bg-gray-200/70 text-gray-800 text-sm font-semibold mr-2 px-3 py-1 rounded">{inventoryDetails.quantity} in stock</span>
                    </span>
                    <small className="text-blue-400 text-sm mb-2">Supplier: {inventoryDetails.supplier_name}</small>
                    <button type="button" className="text-white bg-black flex mx-auto hover:bg-white hover:text-black border mr-14 hover:border-black rounded-lg text-sm px-6 py-2  text-center mb-2  mt-3 font-bold">Delivered</button>
            </div>
        </div>
    </div>
    );
};

export default InventoryDetails;