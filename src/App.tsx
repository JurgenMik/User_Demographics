import React, {useState} from 'react';
import {FaUserPlus} from 'react-icons/fa';
import {MdSearch} from "react-icons/md";
import Users from './components/Users';
import CreateUserModal from "./components/CreateUserModal";
import { UsersContext } from "./Contexts/UsersContext";

function App() {

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
    const [createUser, setCreateUser] = useState<boolean>(false);

    const handleCreate = () => {
        setCreateUser(true);
    }

    const handleCancel = () => {
        setCreateUser(false);
    }

  return (
    <div className="w-full min-h-screen grid grid-cols-5">
        <div className="w-full h-full xl:col-span-1 col-span-2 bg-slate-800">
            <div className="w-full h-24 flex items-center space-x-2 ml-6 text-white">
                <MdSearch className="text-3xl" />
                <input
                    name="userSearch"
                    className="w-3/4 text-lg py-2 pl-1 bg-slate-800 border border-gray-600 rounded-lg"
                    placeholder="Search for a user..."
                />
            </div>
            <UsersContext.Provider value={{users, setUsers}}>
                <Users />
            </UsersContext.Provider>
            <div className="w-full flex justify-center">
                <button onClick={handleCreate} className="flex items-center p-3 bg-blue-600 mt-6 rounded-md text-white">
                    <FaUserPlus className="mr-2"/>
                    Add User
                </button>
            </div>
        </div>
        <div className="w-full h-full xl:col-span-4 col-span-3">
            <UsersContext.Provider value={{users, setUsers}}>
                {createUser ? <CreateUserModal handleCancel={handleCancel}/> : null}
            </UsersContext.Provider>
        </div>
    </div>
  );
}

export default App;
