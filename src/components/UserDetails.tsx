import React, { useContext, useEffect, useState } from 'react';
import {FaEdit} from 'react-icons/fa';
import {MdDelete} from 'react-icons/md';
import { UserInterface } from "../Interfaces/UserInterface";
import { UsersContext } from "../Contexts/UsersContext";
import axios from 'axios';

function UserDetails({info, setViewUser} : any) {

    const [editUser, setEdit] = useState<UserInterface>({...info});
    const { users, setUsers } : any = useContext(UsersContext);

    useEffect(() => {
        setEdit({...info});
    }, [info])

    const handleChange = (e :  React.ChangeEvent<HTMLInputElement>) => {
        setEdit({...editUser, [e.target.name] : e.target.value});
    }

    const handleEdit = () => {
        axios.put(`http://localhost:3000/user-info/${info.id}`, editUser)
            .then(response => {
                setUsers(users.filter((user : any) => user.id !== info.id).concat(response.data));
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleDelete = () => {
        axios.delete(`http://localhost:3000/user-info/${info.id}`)
            .then(() => {
                setUsers(users.filter((user : any) => user.id !== info.id));
            })
            .catch(error => {
                console.log(error)
            })
        setViewUser(false);
    }

    return (
        <div className="w-3/4 h-1/2 ml-auto mr-auto mt-16 bg-slate-800 rounded-md">
            <div className="w-full h-1/4 flex items-center">
                <div className="w-1/5 flex justify-center mt-2">
                    <img className="w-24 h-24 rounded-full" src={info.profile} alt="profileImg" />
                </div>
                <div className="w-2/5 text-xl text-white">
                    <div className="flex space-x-6">
                        <h1>
                            {info.first_name}
                        </h1>
                        <h1>
                            {info.last_name}
                        </h1>
                        <h1 className="text-lg">
                            ID: {info.id}
                        </h1>
                    </div>
                    <div className="block text-lg mt-2">
                        <h1>
                            Age: {info.age}
                        </h1>
                    </div>
                </div>
                <div className="w-2/5 flex justify-center space-x-6 text-lg text-white">
                    <button onClick={handleEdit} name="edit" className="p-2 px-10 bg-blue-600 rounded-md flex items-center">
                        <FaEdit />
                        Edit
                    </button>
                    <button onClick={handleDelete} name="delete" className="p-2 px-8 bg-red-600 rounded-md flex items-center">
                        <MdDelete />
                        Delete
                    </button>
                </div>
            </div>
            <div className="w-full h-3/4 mt-6">
                <div className="ml-8 text-gray-500 flex flex-row space-x-2">
                    <div className="flex flex-col">
                        <label className="text-gray-400">First Name:</label>
                        <input
                            className="w-full text-lg p-4 bg-slate-800 border border-gray-600 rounded-lg"
                            type="text"
                            name="first_name"
                            value={editUser.first_name}
                            onChange={handleChange}

                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-gray-400">Last Name:</label>
                        <input
                            className="w-full text-lg p-4 bg-slate-800 border border-gray-600 rounded-lg"
                            name="last_name"
                            type="text"
                            value={editUser.last_name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-gray-400">Gender:</label>
                        <input
                            className="w-4/5 text-lg p-4 bg-slate-800 border border-gray-600 rounded-lg"
                            name="gender"
                            type="text"
                            value={editUser.gender}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-gray-400">Date of Birth:</label>
                        <input
                            className="w-4/5 text-lg p-4 bg-slate-800 border border-gray-600 rounded-lg mr-4"
                            type="text"
                            name="date_of_birth"
                            value={editUser.date_of_birth}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-gray-400">City:</label>
                        <input
                            className="w-4/5 text-lg p-4 bg-slate-800 border border-gray-600 rounded-lg"
                            type="text"
                            name="city"
                            value={editUser.city}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="text-gray-500 mt-6 ml-8 space-y-6 block">
                    <div className="flex flex-col">
                        <label className="text-gray-400">Phone_nb:</label>
                        <input
                            className="w-1/2 text-lg p-4 bg-slate-800 border border-gray-600 rounded-lg"
                            type="text"
                            name="phone_nb"
                            value={editUser.phone_nb}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-row">
                        <div className="flex flex-col">
                            <label className="text-gray-400">Religion:</label>
                            <input
                                className="w-3/4 text-lg p-4 bg-slate-800 border border-gray-600 rounded-lg"
                                type="text"
                                name="religion"
                                value={editUser.religion}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-400">Age:</label>
                            <input
                                className="w-1/2 text-lg p-4 bg-slate-800 border border-gray-600 rounded-lg"
                                type="number"
                                name="age"
                                value={editUser.age}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-400">Disability:</label>
                            <input
                                className="w-full text-lg p-4 bg-slate-800 border border-gray-600 rounded-lg"
                                type="text"
                                name="disability"
                                value={editUser.disability}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetails;