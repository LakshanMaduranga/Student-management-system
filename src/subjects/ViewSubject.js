import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

export default function ViewSubject() {

    let navigate = useNavigate()

    const { id } = useParams()

    const [subjects, setSubject] = useState({
        name: "",
        credit: "",
        lecturerId:""
    });

    useEffect(() => {
        loadSubjects()
    }, [])

    const [lecturers, setLecturer] = useState({
        lecturerId:"",
        firstName: "",
        lastName: ""
    });

    const loadSubjects = async () => {
        const result = await axios.get(`http://localhost:8081/subjects/${id}`)
        setSubject(result.data)
        
        const lecId = result.data.lecturerId
        const resultLec = await axios.get(`http://localhost:8080/lecturers/${lecId}`)
        setLecturer(resultLec.data)
    }

    return (
        <div>
            <div className='py-5'>
                <div className="py-5 text-center">
                    <header className="bg-white shadow">
                        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{subjects.name}</h1>
                        </div>
                    </header>

                    <div className="container my-4 py-5">
                        <div>
                            <form>
                                <div className="overflow-hidden shadow sm:rounded-md">
                                    <div className="bg-white px-4 py-5 sm:p-6">
                                        <div className="grid grid-cols-6 gap-6">

                                            <div className="col-span-6 sm:col-span-6 text-left">
                                                <label className="block text-sm font-medium text-gray-700">Subject Name</label>
                                                <input type="text" className="bg-gray-50 my-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-gray-600 placeholder-gray-400 text-dark focus:ring-blue-500 focus:border-blue-500" placeholder="Subject Name" name='name' value={subjects.name} disabled></input>
                                            </div>

                                            <div className="col-span-4 sm:col-span-6 text-left">
                                                <label className="block text-sm font-medium text-gray-700">Credit</label>
                                                <input type="number" className="bg-gray-50 my-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-gray-600 placeholder-gray-400 text-dark focus:ring-blue-500 focus:border-blue-500" placeholder="Credit" name='credit' value={subjects.credit} disabled></input>
                                            </div>
                                            
                                            <div className="col-span-6 sm:col-span-6 text-left">
                                                <label className="block text-sm font-medium text-gray-700">Lecturer</label>
                                                <input type="text" className="bg-gray-50 my-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-gray-600 placeholder-gray-400 text-dark focus:ring-blue-500 focus:border-blue-500" placeholder="Lecturer" name='lecturerId' value={lecturers.firstName} disabled></input>
                                            </div>
                                        </div>
                                        <div className="text-right py-5">
                                            <Link className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" to="/subject">Back</Link>
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
