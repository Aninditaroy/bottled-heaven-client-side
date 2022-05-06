import React from 'react';
import loading from '../../images/loading/perfume-loading.gif';
const Loading = () => {
    return (
        <div>
            <div class="flex justify-center mx-auto my-40">
                <img src={loading} alt="" className='w-20 h-20' />
            </div>
        </div>
    );
};

export default Loading;