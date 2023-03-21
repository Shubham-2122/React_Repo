import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from "./reducer/users";
const GetStoreData = () => {
    const users = useSelector(selectUser);
    return (
        <div>
            {JSON.stringify(users)}
            home page data
        </div>
    );
};

export default GetStoreData;