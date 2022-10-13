import React, {useEffect, useContext, useMemo} from 'react';
import {MdOutlineMoreVert} from 'react-icons/md';
import data from '../data.json';
import {UsersContext} from "../Contexts/UsersContext";

function Users({handleDetailView, search} : any) {

    const { users, setUsers } : any = useContext(UsersContext);

    useEffect(() => {
        handleUsers();
    }, [])

    const handleUsers = () => {
        setUsers(data);
    }

    const handleSearch = () => {
        if (search.length === 0) {
            return users;
        }
        return users.filter((user : any) => user.first_name.includes(search) || user.last_name.includes(search));
    }

    let searched = useMemo(handleSearch, [users, search]);

    return (
        <div className="w-full h-1/2 overflow-y-scroll scroll-gray-500 scrollbar">
            {searched.map((details : any, index : any) => {
                return(
                    <div className="w-full h-24 flex items-center text-md text-white border-b border-gray-700" key={index}>
                        <div className="w-1/4 flex items-center justify-center">
                            <img
                                className="w-14 h-14 rounded-full"
                                src={details.profile}
                                alt="profile"
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
                            id={index}
                            className="text-xl hover:text-blue-400 mr-6"
                            onClick={e => handleDetailView(e, details)}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default Users;