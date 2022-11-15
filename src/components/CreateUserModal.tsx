import React, {useContext, useState} from 'react';
import {UsersContext} from "../Contexts/UsersContext";
import {UserInterface} from "../Interfaces/UserInterface";
import axios from 'axios';

function CreateUserModal({handleCancel} : any) {

    const [user, setUser] = useState<UserInterface>({
        age: 0,
        first_name: '',
        last_name: '',
        city: '',
        phone_nb: 0,
        gender: '',
        religion: '',
        date_of_birth: '',
        disability: '',
    })
    const {users, setUsers} : any = useContext(UsersContext);

    const handleSave = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        axios.post("http://localhost:3001/user-info", user)
            .then(response => {
                setUsers(users.concat(response.data));
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
       setUser({...user, [e.target.name] : e.target.valueAsNumber || e.target.value});
    }

    return (
        <div className="w-3/4 h-1/2 ml-auto mr-auto mt-6 rounded-md">
            <form onSubmit={handleSave} className="w-full h-1/2 my-6 grid grid-cols-3 gap-4 justify-center ml-6">
                <div className="col-span-6 col-span-3 space-y-8">
                    <input
                        type="text"
                        name="first_name"
                        className="p-4 w-1/3 rounded-md border border-gray-600 text-black mr-4"
                        placeholder="First_name"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="last_name"
                        className="p-4 w-1/3 rounded-md border border-gray-600"
                        placeholder="Last_name"
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="phone_nb"
                        className="p-4 w-1/3 rounded-md border border-gray-600 mr-4"
                        placeholder="Phone Number"
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="age"
                        className="p-4 w-1/6 rounded-md border border-gray-600 mr-4"
                        placeholder="Age"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="date_of_birth"
                        className="p-4 w-1/4 rounded-md border border-gray-600"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="gender"
                        className="p-4 w-1/4 rounded-md border border-gray-600"
                        placeholder="Gender"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="religion"
                        className="p-4 w-1/4 rounded-md border border-gray-600 ml-4"
                        placeholder="Religion (none)"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="city"
                        className="p-4 w-1/4 rounded-md border border-gray-600 ml-4"
                        placeholder="City"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="disability"
                        className="p-4 w-2/5 rounded-md border border-gray-600"
                        placeholder="Disability"
                        onChange={handleChange}
                    />
                </div>
                <div className="w-full mt-44 text-lg flex justify-center text-white space-x-6">
                    <button name="save" className="p-2 px-10 bg-blue-600 rounded-md ml-4" type="submit">
                    Save
                    </button>
                    <button onClick={handleCancel} name="cancel" className="p-2 px-8 bg-red-600 rounded-md">
                    Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateUserModal;