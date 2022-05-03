
import { useEffect, useState } from 'react';

const usePerfumes = () => {
    const [perfumes,setPerfumes] = useState([]);
    useEffect( ()=>{
        fetch('https://bottled-heaven.herokuapp.com/perfumes')
        .then(res => res.json())
        .then(data => setPerfumes(data));
    },[]);
    return [perfumes];
};

export default usePerfumes;