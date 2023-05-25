import { useState, useEffect } from 'react';

const useInventoryDetails = inventoryId => {
    const [inventoryDetails, setInventoryDetails] = useState({});
    useEffect(() => {
        const url = `https://bottled-heaven-server-side.vercel.app/perfumes/${inventoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventoryDetails(data));
    }, [inventoryDetails]);
    return [inventoryDetails, setInventoryDetails];
};

export default useInventoryDetails;