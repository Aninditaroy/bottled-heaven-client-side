import React from 'react';
import banner from '../../../images/perfumes/banner/banner.png';
import './Home.css';
import usePerfumes from './../../../hooks/usePerfumes';
import Inventory from '../Inventory/Inventory';
import { Link } from 'react-router-dom';
const Home = () => {
    const [perfumes] = usePerfumes();
    return (
        <>
            <div>
                <div className="sm:p-24 bg-gradient-to-r from-rose-100 to-amber-100/30 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-3 lg:p-0" style={{ height: '750px' }}>
                    <img src={banner} alt="" className='lg:px-40 lg:w-full sm:w-80 lg:m-20 lg:p-0 md:p-0 sm:p-0' />
                    <div>
                        <h1 className='lg:px-10 text-5xl lg:text-8xl text-amber-900/70 lg:ml-11 lg:mt-60 font-bold' style={{ paddingLeft: '15px' }}>Best Perfume</h1>
                        <h4 className='lg:px-10 text-xl  text-amber-800 lg:ml-12 font-bold mt-5' style={{ paddingLeft: '15px' }}>For her, for him, for you this is a collection of fragrances coloured by the emotions to discover, love and share.We Distributes fragrances around the world for a variety of fashion brands, celebrities and lifestyles.</h4>
                    </div>
                </div>
                <div className=''>
                    <h1 className='lg:px-10 text-5xl lg:text-5xl text-amber-900/70 lg:ml-11 lg:mt-11 lg:mb-10 font-bold text-center mt-16 sm:mt-16'><span className='border-amber-900 
                             border-b-2'>Our Perfumes</span></h1>
                    <div className="lg:mx-auto xl:mx-auto 2xl:mx-auto md:mx-auto ">
                        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 mb-20 md:gap-3 sm:gap-y-3 lg:px-10 '>
                            {
                                perfumes.slice(0, 6).map(perfume => <Inventory key={perfume._id} perfume={perfume} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-12 text-center relative overflow-hidden bg-no-repeat bg-cover mix-blend-overlay"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1527903789995-dc8ad2ad6de0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80')", height: "650px" }}>
                <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                    <div className="flex justify-center items-center h-full">
                        <div className="text-black">
                            <h2 className="font-bold text-7xl mb-4 lg:uppercase">Fragrance</h2>
                            <h4 className="font-semibold text-2xl mb-6">Enhance your charm with our Bottled Heaven!</h4>
                            <Link to="/about"><button className="w-80 block text-black bg-transparent border-black hover:bg-black hover:text-white border  text-sm px-12 py-3  text-center mb-5 mx-auto mt-3 font-bold">Know More</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;