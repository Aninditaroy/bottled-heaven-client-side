import React from 'react';
import banner from '../../../images/perfumes/banner/banner.png';
import './Home.css';
const Home = () => {
    return (
        <div>
            <div class="sm:p-24 bg-gradient-to-r from-rose-100 to-amber-100/30 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-3 lg:p-0" style={{ height: '750px' }}>
                <img src={banner} alt="" className='lg:px-40 lg:w-full sm:w-80' />
                <div>
                    <h1 className='lg:px-10 text-5xl lg:text-8xl text-amber-900/70 lg:ml-11 lg:mt-60 font-bold' style={{ paddingLeft: '15px' }}>Best Perfume</h1>
                    <h4 className='lg:px-10 text-xl  text-amber-800 lg:ml-12 font-bold mt-5' style={{ paddingLeft: '15px' }}>For her, for him, for you this is a collection of fragrances coloured by the emotions to discover, love and share.We Distributes fragrances around the world for a variety of fashion brands, celebrities and lifestyles.</h4>
                </div>
            </div>
        </div>
    );
};

export default Home;