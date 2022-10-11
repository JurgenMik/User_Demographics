import React, {useContext, useState} from 'react';
import {UsersContext} from "../Contexts/UsersContext";
import {UserInterface} from "../Interfaces/UserInterface";

function CreateUserModal({handleCancel} : any) {

    const [user, setUser] = useState<UserInterface>({
        age: 0,
        first_name: '',
        last_name: '',
        city: '',
        phone_nb: '',
        gender: '',
        religion: '',
        date_of_birth: '',
        disability: '',
        profile: '',
    })
    const [validate, setValidate] = useState<boolean>();
    const {users, setUsers} : any = useContext(UsersContext);

    const handleSave = () => {
        handleValidate();
        if (validate === false) {
            setUsers(users.concat(user));
        } else {
            return null;
        }
    }

    const handleValidate = () => {
        Object.entries(user).map((property) => {
            if (property[1].toString().length === 0) {
                setValidate(true);
            } else {
                setValidate(false);
            }
        })
    }

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
       setUser({...user, [e.target.name] : e.target.value});
    }

    return (
        <div className="w-3/4 h-1/2 ml-auto mr-auto mt-6 rounded-md">
            <div className="flex h-16 justify-center items-center text-2xl">
                {validate ? <h1 className="text-red-600 inline-block">Please fill all the fields before Saving user details</h1> :
                    <h1>Create New User</h1>}
            </div>
            <div className="w-full h-1/2 my-12 flex flex-col justify-center ml-6">
                <div className="space-y-8">
                    <input
                        type="text"
                        name="first_name"
                        className="p-5 w-1/4 rounded-md border border-gray-600 text-black mr-4"
                        placeholder="First_name"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="last_name"
                        className="p-5 w-1/4 rounded-md border border-gray-600"
                        placeholder="Last_name"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="phone_nb"
                        className="p-5 w-1/3 rounded-md border border-gray-600 ml-4"
                        placeholder="Phone Number"
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="age"
                        className="p-5 w-1/5 rounded-md border border-gray-600"
                        placeholder="Age"
                        onChange={handleChange}
                    />
                    <input
                        type="date"
                        name="date_of_birth"
                        className="p-5 w-1/3 rounded-md border border-gray-600 ml-4"
                        onChange={handleChange}
                    />
                </div>
                <div className="space-y-8">
                    <input
                        type="text"
                        name="gender"
                        className="p-5 w-1/5 rounded-md border border-gray-600 mr-4"
                        placeholder="Gender"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="religion"
                        className="p-5 w-1/4 rounded-md border border-gray-600 mr-4"
                        placeholder="Religion (none)"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="city"
                        className="p-5 w-1/4 rounded-md border border-gray-600"
                        placeholder="City"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="disability"
                        className="p-5 w-1/3 rounded-md border border-gray-600"
                        placeholder="Disability"
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="w-full mt-24 text-lg text-white flex justify-center space-x-6">
                <button onClick={handleSave} className="p-2 px-10 bg-blue-600 rounded-md ml-4">
                    Save
                </button>
                <button onClick={handleCancel} className="p-2 px-8 bg-red-600 rounded-md">
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default CreateUserModal;