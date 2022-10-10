import React, {useEffect, useContext} from 'react';
import {MdOutlineMoreVert} from 'react-icons/md';
import data from '../data.json';
import {UsersContext} from "../Contexts/UsersContext";

function Users() {

    const { users, setUsers } : any = useContext(UsersContext);

    useEffect(() => {
        handleUsers();
    }, [])

    const handleUsers = () => {
        setUsers(data);
    }

    return (
        <div className="w-full h-1/2 overflow-y-scroll scroll-gray-500 scrollbar">
            {users.map((details : any, index : number) => {
                return(
                    <div className="w-full h-24 flex items-center text-md text-white border-b border-gray-700" key={index}>
                        <div className="w-1/4 flex items-center justify-center">
                            <img
                                className="w-14 h-14 rounded-full"
                                src={details.profile}
                                alt="profileImg"
                            />
                        </div>
                        <div className="w-3/4 flex space-x-6">
                            <h1>
                                {details.first_name}
                            </h1>
                            <h1>
                                {details.last_name}
                            </h1>
                            <h1>
                                Age: {details.age}
                            </h1>
                        </div>
                        <MdOutlineMoreVert
                            className="text-xl hover:text-blue-400 mr-6"
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default Users;