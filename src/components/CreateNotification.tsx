import React from 'react';
import {FaUserPlus} from 'react-icons/fa';

function CreateNotification() {
    return(
        <div className="w-1/5 h-12 flex items-center justify-center bg-green-700 rounded-md">
            <FaUserPlus className="text-white text-2xl mr-2"/>
            <h1 className="text-white text-xl">
                User created Successfully
            </h1>
        </div>
    )
}

export default CreateNotification;