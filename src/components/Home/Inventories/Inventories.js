import React from 'react';
import Loading from '../../Loading/Loading';
import Inventory from '../Inventory/Inventory';
import usePerfumes from './../../../hooks/usePerfumes';

const Inventories = () => {
    const [perfumes,setPerfumes,isLoading] = usePerfumes();
    return (
        <>
        {
        isLoading && <Loading />}
            <div className="relative flex min-h-screen flex-col justify-center bg-gradient-to-r from-rose-100 to-amber-100/50">
                <div className="lg:mx-auto xl:mx-auto 2xl:mx-auto md:mx-auto mt-11">
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 mb-20 md:gap-3 sm:gap-y-3 lg:px-10'>
                     {
                         perfumes.map(perfume => <Inventory key={perfume._id} perfume={perfume}/>)
                     }
                    </div>
                </div>
            </div>
        
        </>
    );
};

export default Inventories;