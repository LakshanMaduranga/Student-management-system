import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

export default function ViewCourseSubjects() {

    let navigate = useNavigate()

    const { id } = useParams()

    const [course, viewCourse] = useState({
        name: "",
        description: "",
        courseCode: ""
    });

    useEffect(() => {
        loadCourse()
    }, [])

    const loadCourse = async () => {
        const result = await axios.get(`http://localhost:8081/courses/${id}`)
        viewCourse(result.data)
    }

    const [courseSub, setCourseSub] = useState([])

    useEffect(() => {
        loadCourseSub();
    }, [])


    const loadCourseSub = async () => {
        const result = await axios.get(`http://localhost:8081/courses/${id}/subjectdetails`)
        setCourseSub(result.data)

    }

    return (
        <div>
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 py-5">{course.name}</h1>
                </div>
            </header>
            <div className='py-5 px-5'>
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <table className="w-full text-lg text-center text-blue-100 dark:text-blue-100">
                        <thead className="text-xxs text-white uppercase bg-red-600 dark:text-white">
                            <tr>
                                <th scope="col" className="py-3 px-6">#</th>
                                <th scope="col" className="py-3 px-6">Subject ID</th>
                                <th scope="col" className="py-3 px-6">Subject Name</th>
                            </tr>
                        </thead>
                        <tbody className="text-xxs">
                            {
                                courseSub.map((subject, index) => (
                                    <tr className="bg-white-500 border-b border-vlack-400 dark:hover:bg-gray-200">
                                        <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-black" key={index}>{index + 1}</th>
                                        <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-black">{subject[0][1]}</td>
                                        <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-black">{subject[0][0]}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className="text-right py-5">
                    <Link className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" to="/course">Back</Link>
                </div>
            </div>
        </div>
    )
}
