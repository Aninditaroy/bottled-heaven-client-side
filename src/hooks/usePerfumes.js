
import { useEffect, useState } from 'react';

const usePerfumes = () => {
    const [perfumes, setPerfumes] = useState([]);
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://bottled-heaven-server-side.vercel.app/perfumes')
            .then(res => res.json())
            .then(data => {
                setPerfumes(data)
                setLoading(false)
            });
    }, [perfumes]);
    return [perfumes, setPerfumes, isLoading];
};

export default usePerfumes;