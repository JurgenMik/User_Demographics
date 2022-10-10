import React, {useContext, useState} from 'react';
import CreateNotification from "./CreateNotification";
import {UsersContext} from "../Contexts/UsersContext";

function CreateUserModal({handleCancel} : any) {

    interface UserInterface {
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
    })
    const [validate, setValidate] = useState<boolean>();
    const [toggleNotification, setNotification] = useState(false);
    const {users, setUsers} : any = useContext(UsersContext)

    const handleSave = () => {
        handleValidate();
        if (validate === false) {
            setUsers(users.concat(user));
            setNotification(true);
        } else {
            return;
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
        <div className="w-3/4 h-1/2 ml-auto mr-auto mt-6">
            {toggleNotification ? <CreateNotification /> : null}
            <div className="flex h-16 justify-center items-center text-2xl">
                {validate ? <h1 className="text-red-600 inline-block">Please fill all the fields before Saving user details</h1> :
                    <h1>Create New User</h1>}
            </div>
            <div className="w-full h-1/2 grid grid-cols-2">
                <div className="col-span-1 space-y-8">
                    <input
                        type="text"
                        name="first_name"
                        className="p-5 w-2/5 rounded-md border border-gray-500 text-black mr-4"
                        placeholder="First_name"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="last_name"
                        className="p-5 w-2/5 rounded-md border border-gray-500"
                        placeholder="Last_name"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="phone_nb"
                        className="p-5 w-3/5 rounded-md border border-gray-500 mr-4"
                        placeholder="Phone Number"
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="age"
                        className="p-5 w-1/5 rounded-md border border-gray-500"
                        placeholder="Age"
                        onChange={handleChange}
                    />
                    <input
                        type="date"
                        name="date_of_birth"
                        className="p-5 w-1/2 rounded-md border border-gray-500"
                        onChange={handleChange}
                    />
                </div>
                <div className="col-span-1 space-y-8">
                    <input
                        type="text"
                        name="gender"
                        className="p-5 w-1/4 rounded-md border border-gray-500 mr-4"
                        placeholder="Gender"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="religion"
                        className="p-5 w-1/4 rounded-md border border-gray-500 mr-4"
                        placeholder="Religion (none)"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="city"
                        className="p-5 w-1/4 rounded-md border border-gray-500"
                        placeholder="City"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="disability"
                        className="p-5 w-3/5 rounded-md border border-gray-500"
                        placeholder="Disability"
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="w-full mt-6 text-lg text-white">
                <button onClick={handleSave} className="p-3 float-right px-8 bg-blue-600 rounded-md ml-2">
                    Save
                </button>
                <button onClick={handleCancel} className="p-3 float-right px-6 bg-red-600 rounded-md">
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default CreateUserModal;