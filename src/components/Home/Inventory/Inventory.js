import React from 'react';

const Inventory = ({perfume}) => {
    const {name,img,description,price,quantity,supplier_name} = perfume;
    return (
        <div className='mt-5'>
            <div className="lg:mx-auto flex lg:w-96 flex-col justify-center  bg-white rounded-2xl shadow-2xl shadow-slate-200/70  hover:scale-105 ease-in duration-300">
                <img src={img} className="rounded-t-2xl object-cover" alt="" />
                <div className="p-4">
                    <h1 className="text-3xl font-medium  pb-2">{name}</h1>
                    <small className="text-xl">{price}</small>
                    <p className="text-sm tracking-tight text-slate-600 leading-6 py-2">{description}</p>
                    <span className='text-md font-semibold mb-3'>Quantity: <span class="bg-gray-200/70 text-gray-800 text-sm font-semibold mr-2 px-3 py-1 rounded">{quantity} in stock</span>
                    </span>
                    <br />
                    <small className="text-blue-400 text-sm mt-3">Supplier: {supplier_name}</small>
                    <br />
                    <button type="button" class="text-white bg-black hover:bg-white hover:text-black hover:border hover:border-black rounded-lg text-sm px-12 py-2 mr-2 text-centermb-2 mx-auto mt-3 font-bold">UPDATE</button>
                </div>
            </div>
        </div>
    );
};

export default Inventory;