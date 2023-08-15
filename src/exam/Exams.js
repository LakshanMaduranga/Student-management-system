import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";


export default function Exams() {

    const [exams, setExams] = useState([]);

    useEffect(() => {
        loadExams();
    }, []);

    const loadExams = async () => {
        const result = await axios.get("http://localhost:8082/exams");
        setExams(result.data);
        console.log(result.data)
    }

    const deleteExam = async (id) => {
        await axios.delete(`http://localhost:8082/exams/${id}`)
        loadExams()
    }

    return (
        <div>
            <nav className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <img className="block h-8 w-auto lg:hidden" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"></img>
                                <img className="hidden h-8 w-auto lg:block" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"></img>
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>

                                    <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to={'/student'}>Student</Link>

                                    <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to={'/course'}>Course</Link>

                                    <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to={'/subject'}>Subjects</Link>

                                    <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to={'/lecturer'}>Lectures</Link>

                                    <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to={'/exam'}>Exam</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 py-5">Exams</h1>
                </div>
            </header>
            <div className='px-4 py-5 text-left'>
                <a href="/new_exam" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">Schedule New Exam</a>
            </div>
            <div className='py-5 px-5'>
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <table className="w-full text-lg text-center text-blue-100 dark:text-blue-100">
                        <thead className="text-xxs text-white uppercase bg-red-600 dark:text-white">
                            <tr>
                                <th scope="col" className="py-3 px-6">#</th>
                                <th scope="col" className="py-3 px-6">Exam</th>
                                <th scope="col" className="py-3 px-6">Exam Date</th>
                                <th scope="col" className="py-3 px-6">Exam Type</th>
                                <th scope="col" className="py-3 px-6">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-xxs">
                            {
                                exams.map((examResult, index) => (
                                    <tr className="bg-white-500 border-b border-vlack-400 dark:hover:bg-gray-200">
                                        <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-black" key={index}>{index + 1}</th>
                                        <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-black">{examResult.examDescription}</td>
                                        <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-black">{examResult.examDate}</td>
                                        <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-black">{examResult.examType}</td>
                                        <td>
                                            <Link className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' to={`/view_exam/${examResult.examId}`}>View</Link>
                                            <Link className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700' to={`/update_exam/${examResult.examId}`}>Update</Link>
                                            <Link className='text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900' onClick={() => deleteExam(examResult.examId)}>Delete</Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}