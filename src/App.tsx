import React from 'react';
import {FaUserPlus} from 'react-icons/fa';
import {MdSearch} from "react-icons/md";
import Users from './components/Users';

function App() {

  return (
    <div className="w-full min-h-screen grid grid-cols-5">
        <div className="w-full h-full col-span-1 bg-slate-800">
            <div className="w-full h-24 flex items-center space-x-2 ml-6 text-white">
                <MdSearch className="text-3xl" />
                <input
                    name="userSearch"
                    className="w-3/4 text-lg py-2 pl-1 bg-slate-800 border border-gray-600 rounded-lg"
                    placeholder="Search for a user..."
                />
            </div>
            <Users />
            <div className="w-full flex justify-center">
                <button className="flex items-center p-3 bg-blue-600 mt-6 rounded-md text-white">
                    <FaUserPlus className="mr-2"/>
                    Add User
                </button>
            </div>
        </div>
        <div className="w-full h-full col-span-4">

        </div>
    </div>
  );
}

export default App;
