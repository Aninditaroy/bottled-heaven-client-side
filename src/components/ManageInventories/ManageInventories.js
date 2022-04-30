import React from 'react';
import usePerfumes from '../../hooks/usePerfumes';
import bin from '../../images/trash-bin.png';
import addItem from '../../images/plus.png';
import { useNavigate } from 'react-router-dom';
const ManageInventories = () => {
    const [perfumes] = usePerfumes();
    const navigate = useNavigate();
    const naviagteAddInventory = () => {
        navigate('/addinventories');
    }
    return (
        <div>
            <div className='flex justify-center mx-auto'>
                <button onClick={naviagteAddInventory} type="button" className=" px-12 rounded-lg text-sm py-2 mr-16 text-center mb-2  mt-3 font-bold flex justify-center items-center w-72  border  border-black">
                    <img src={addItem} alt="" className="w-5 h-5 flex mx-auto" />
                    <span> Add New Inventory Item</span>
                </button>
            </div>
            <div class="flex flex-col text-left m-10">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-60">
                        <div class="shadow-xl overflow-hidden border-b border-gray-100 sm:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-200">
                                <thead class="bg-slate-100">
                                    <tr>
                                        <th scope="col" class="px-6 py-3 text-left text-sm text-black font-bold uppercase tracking-wider">
                                            Name & Price
                                        </th>
                                        <th scope="col" class="px-6 py-3 text-left text-sm text-black font-bold uppercase tracking-wider">
                                            Quantity
                                        </th>
                                        <th scope="col" class="px-6 py-3 text-left text-sm text-black font-bold uppercase tracking-wider">
                                            Seller
                                        </th>
                                        <th scope="col" class="px-6 py-3 text-left text-sm text-black font-bold uppercase tracking-wider">
                                            Description
                                        </th>
                                        <th scope="col" class="px-6 py-3 text-right text-sm text-black font-bold uppercase tracking-wider">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                    {
                                        perfumes.map(perfume => <>
                                            <tr key={perfume._id} perfume={perfume}>
                                                <td class="px-6 py-4 whitespace-nowrap">
                                                    <div class="flex items-center">
                                                        <div class="flex-shrink-0 h-12 w-12">
                                                            <img
                                                                class="h-12 w-12 rounded-full"
                                                                src={perfume.img}
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div class="ml-4">
                                                            <div class="text-md font-semibold  text-gray-600">
                                                                {perfume.name}
                                                            </div>
                                                            <div class="text-sm text-gray-500">
                                                                ${perfume.price}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap">
                                                    <span class="text-sm text-gray-500 hover:bg-gray">{perfume.quantity}</span>
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap">
                                                    <span class="px-2 inline-flex text-sm leading-5 font-semibold rounded-full bg-green-100  text-green-800" >
                                                        {perfume.supplier_name}
                                                    </span>
                                                </td>
                                                <td class="px-6 py-4 whitespace-wrap text-sm text-gray-500">
                                                    {perfume.description}
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <button className=' bg-red-500 w-8 h-8 rounded'><img src={bin} alt="" className="w-6 h-6 flex mx-auto" /></button>
                                                </td>
                                            </tr>
                                        </>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageInventories;