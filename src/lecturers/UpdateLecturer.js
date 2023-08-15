import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

export default function UpdateLecturer() {

    let navigate = useNavigate()

    const { id } = useParams()

    const [lecturer, setLecturer] = useState({
        firstName: "",
        lastName: "",
        address: "",
        contactNumber: "",
        emailAddress: "",
        age: "",
        nic: "",
        qualification: ""
    });

    const { firstName, lastName, address, contactNumber, emailAddress, age, nic, qualification } = lecturer;

    useEffect(() => {
        loadLecturer()
    }, [])

    const loadLecturer = async () => {
        const result = await axios.get(`http://localhost:8080/lecturers/${id}`)
        setLecturer(result.data)
    }

    const onInputChange = (e) => {
        setLecturer({ ...lecturer, [e.target.name]: e.target.value });
    };

    const onSubmitForm = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/lecturers/${id}`, lecturer)
        navigate("/lecturer")
    }

    return (
        <div>
            <div className='py-5'>
                <div className="py-5 text-center">
                    <header className="bg-white shadow">
                        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Update {lecturer.firstName}</h1>
                        </div>
                    </header>

                    <div className="container my-4 py-5">
                        <div>
                            <form onSubmit={(e) => onSubmitForm(e)}>
                                <div className="overflow-hidden shadow sm:rounded-md">
                                    <div className="bg-white px-4 py-5 sm:p-6">
                                        <div className="grid grid-cols-6 gap-6">

                                            <div className="col-span-6 sm:col-span-3 text-left">
                                                <label className="block text-sm font-medium text-gray-700">First name</label>
                                                <input type="text" className="bg-gray-50 my-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-gray-600 placeholder-gray-400 text-dark focus:ring-blue-500 focus:border-blue-500" placeholder="First Name" name='firstName' value={firstName} onChange={(e) => onInputChange(e)} required></input>
                                            </div>

                                            <div className="col-span-6 sm:col-span-3 text-left">
                                                <label className="block text-sm font-medium text-gray-700">Last name</label>
                                                <input type="text" className="bg-gray-50 my-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-gray-600 placeholder-gray-400 text-dark focus:ring-blue-500 focus:border-blue-500" placeholder="Last Name" name='lastName' value={lastName} onChange={(e) => onInputChange(e)} required></input>
                                            </div>

                                            <div className="col-span-6 sm:col-span-6 text-left">
                                                <label className="block text-sm font-medium text-gray-700">Address</label>
                                                <input type="text" className="bg-gray-50 my-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-gray-600 placeholder-gray-400 text-dark focus:ring-blue-500 focus:border-blue-500" placeholder="Address" name='address' value={address} onChange={(e) => onInputChange(e)} required></input>
                                            </div>

                                            <div className="col-span-4 sm:col-span-3 text-left">
                                                <label className="block text-sm font-medium text-gray-700">Contact Number</label>
                                                <input type="number" className="bg-gray-50 my-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-gray-600 placeholder-gray-400 text-dark focus:ring-blue-500 focus:border-blue-500" placeholder="Contact Number" name='contactNumber' value={contactNumber} onChange={(e) => onInputChange(e)} required></input>
                                            </div>

                                            <div className="col-span-4 sm:col-span-3 text-left">
                                                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                                                <input type="email" className="bg-gray-50 my-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-gray-600 placeholder-gray-400 text-dark focus:ring-blue-500 focus:border-blue-500" placeholder="Email Address" name='emailAddress' value={emailAddress} onChange={(e) => onInputChange(e)} required></input>
                                            </div>

                                            <div className="col-span-4 sm:col-span-3 text-left">
                                                <label className="block text-sm font-medium text-gray-700">Age</label>
                                                <input type="number" className="bg-gray-50 my-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-gray-600 placeholder-gray-400 text-dark focus:ring-blue-500 focus:border-blue-500" placeholder="Age" name='age' value={age} onChange={(e) => onInputChange(e)} required></input>
                                            </div>

                                            <div className="col-span-4 sm:col-span-3 text-left">
                                                <label className="block text-sm font-medium text-gray-700">NIC</label>
                                                <input type="text" className="bg-gray-50 my-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-gray-600 placeholder-gray-400 text-dark focus:ring-blue-500 focus:border-blue-500" placeholder="NIC" name='nic' value={nic} onChange={(e) => onInputChange(e)} required></input>
                                            </div>

                                            <div className="col-span-6 sm:col-span-6 text-left">
                                                <label className="block text-sm font-medium text-gray-700">Qulifications</label>
                                                <input type="text" className="bg-gray-50 my-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-gray-600 placeholder-gray-400 text-dark focus:ring-blue-500 focus:border-blue-500" placeholder="Qulifications" name='qualification' value={qualification} onChange={(e) => onInputChange(e)} required></input>
                                            </div>

                                        </div>
                                        <div className="text-right py-5">
                                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Update</button>
                                            <Link className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" to="/lecturer">Cancel</Link>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
