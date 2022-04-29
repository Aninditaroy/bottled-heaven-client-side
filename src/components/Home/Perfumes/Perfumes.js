import React from 'react';
import usePerfumes from '../../../hooks/usePerfumes';
import Perfume from '../Perfume/Perfume';


const Perfumes = () => {
    const [perfumes] = usePerfumes();
    return (
        <>
            <div className="relative flex min-h-screen flex-col justify-center bg-gradient-to-r from-rose-100 to-amber-100/50">
                <div className="lg:mx-auto xl:mx-auto 2xl:mx-auto md:mx-auto mt-11">
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 mb-20 md:gap-3 sm:gap-y-3 lg:px-10'>
                     {
                         perfumes.map(perfume => <Perfume key={perfume._id} perfume={perfume}/>)
                     }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Perfumes;