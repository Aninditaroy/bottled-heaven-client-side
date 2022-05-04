import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../.firebase.init';
import useInventoryDetails from '../../hooks/useInventoryDetails';

const MyInventory = () => {
    const { inventoryId } = useParams();
    const [inventoryDetails] = useInventoryDetails(inventoryId);
    const [user] = useAuthState(auth)
    if(user){
        console.log(user);
    }
    return (
        <div>
            
        </div>
    );
};

export default MyInventory;