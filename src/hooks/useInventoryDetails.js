import { useState, useEffect } from 'react';

const useInventoryDetails = inventoryId => {
    const [inventoryDetails, setInventoryDetails] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/perfumes/${inventoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventoryDetails(data));
    }, [inventoryId]);
    return [inventoryDetails];
};

export default useInventoryDetails;