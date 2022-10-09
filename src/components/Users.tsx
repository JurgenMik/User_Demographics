import React, {useState, useEffect} from 'react';
import {MdOutlineMoreVert} from 'react-icons/md';
import data from '../data.json';

function Users() {

    interface UserInterface {
        id: number,
        age: number,
        first_name: string,
        last_name: string,
        city: string,
        phone_nb: string,
        gender: string,
        religion: string,
        date_of_birth: string,
        disability: string
    }

    const [users, setUsers] = useState<UserInterface[]>([]);

    useEffect(() => {
        handleUsers();
    }, [])

    const handleUsers = () => {
        setUsers(data);
    }

    return (
        <div className="w-full">
            {users.map((details : any, index) => {
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