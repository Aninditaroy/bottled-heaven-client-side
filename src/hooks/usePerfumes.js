
import { useEffect, useState } from 'react';

const usePerfumes = () => {
    const [perfumes,setPerfumes] = useState([]);
    useEffect( ()=>{
        fetch('https://nameless-temple-36405.herokuapp.com/perfumes')
        .then(res => res.json())
        .then(data => setPerfumes(data));
    },[perfumes]);
    return [perfumes];
};

export default usePerfumes;