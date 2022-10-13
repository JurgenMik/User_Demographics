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
    })
    const [validate, setValidate] = useState<boolean>();
    const {users, setUsers} : any = useContext(UsersContext);

    const handleSave = () => {
        handleValidate();
        if (validate === false) {
            setUsers(users.concat(user));
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
        <div className="w-3/4 h-1/2 ml-auto mr-auto mt-6 rounded-md">
            <div className="flex h-16 justify-center items-center text-3xl">
                {validate ? <h1 className="text-red-600 inline-block">Please fill all the fields before Saving user details</h1> :
                    <h1>Create New User</h1>}
            </div>
            <div className="w-full h-1/2 my-6 grid grid-cols-3 gap-4 justify-center ml-6">
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
                        type="text"
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
                        type="date"
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
            </div>
            <div className="w-full mt-44 text-lg flex justify-center text-white space-x-6">
                <button onClick={handleSave} name="save" className="p-2 px-10 bg-blue-600 rounded-md ml-4">
                    Save
                </button>
                <button onClick={handleCancel} name="cancel" className="p-2 px-8 bg-red-600 rounded-md">
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default CreateUserModal;