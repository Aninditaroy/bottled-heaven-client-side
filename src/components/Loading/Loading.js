import React from 'react';
import loading from '../../images/loading/perfume-loading.gif';
const Loading = () => {
    return (
        <div className='relative flex  flex-col justify-center bg-transparent'>
            <div className="flex justify-center mx-auto my-2  bg-transparent">
                <img src={loading} alt="" className='w-20 h-20 bg-transparent' />
            </div>
        </div>
    );
};

export default Loading;