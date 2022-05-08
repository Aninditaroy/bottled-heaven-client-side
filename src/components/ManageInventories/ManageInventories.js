import React from 'react';
import usePerfumes from '../../hooks/usePerfumes';
import bin from '../../images/trash-bin.png';
import addItem from '../../images/plus.png';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Loading/Loading';
const ManageInventories = () => {
    const [perfumes, setPerfumes] = usePerfumes();
    const navigate = useNavigate();
    const naviagteAddInventory = () => {
        navigate('/addinventories');
    }
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
        <>
            <div className='flex justify-center mx-auto'>
                <button onClick={naviagteAddInventory} type="button" className=" px-12 rounded-lg text-sm py-2 mr-16 text-center mb-2  mt-3 font-bold flex justify-center items-center w-72  border  border-black">
                    <img src={addItem} alt="" className="w-5 h-5 flex mx-auto" />
                    <span> Add New Inventory Item</span>
                </button>
            </div>
            <div className="flex flex-col text-left m-10">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-60">
                        <div className="shadow-xl overflow-hidden border-b border-gray-100 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-slate-100">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-sm text-black font-bold uppercase tracking-wider">
                                            Name & Price
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-sm text-black font-bold uppercase tracking-wider">
                                            Quantity
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-sm text-black font-bold uppercase tracking-wider">
                                            Seller
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-sm text-black font-bold uppercase tracking-wider">
                                            Description
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-right text-sm text-black font-bold uppercase tracking-wider">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {
                                        perfumes.map(perfume => <>
                                            <tr key={perfume._id} perfume={perfume}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0 h-12 w-12">
                                                            <img
                                                                className="h-12 w-12 rounded-full"
                                                                src={perfume.img}
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="ml-4">
                                                            <div className="text-md font-semibold  text-gray-600">
                                                                {perfume.name}
                                                            </div>
                                                            <div className="text-sm text-gray-500">
                                                                ${perfume.price}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className='text-sm text-gray-500 hover:bg-gray'>Quantity: <span className="text-sm text-gray-500 hover:bg-gray">{
                                                        perfume.quantity <= 0 ? <span className="text-red-600 text-sm  hover:bg-gray">Stock Out</span> :
                                                            perfume.quantity
                                                    }
                                                    </span>
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="px-2 inline-flex text-sm leading-5 font-semibold rounded-full bg-green-100  text-green-800" >
                                                        {perfume.supplier_name}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-wrap text-sm text-gray-500">
                                                    {perfume.description}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <button onClick={() => handleDelete(perfume._id)} className=' bg-red-500 w-10 h-10 rounded-full'><img src={bin} alt="" className="w-6 h-6 flex mx-auto" /></button>
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
            <ToastContainer />
        </>
    );
};

export default ManageInventories;