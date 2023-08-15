import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

export default function UpdateExam() {

    let navigate = useNavigate()

    const { id } = useParams()

    const [exams, setExams] = useState({
        examDate: "",
        examDescription: "",
        examType: "",
        examPassMarks: "",
        examTotalQuestions: "",
        courseId: "",
        subjectId: ""
    });

    const { examDate, examDescription, examType, examPassMarks, examTotalQuestions, courseId, subjectId } = exams;

    const onInputChange = (e) => {
        setExams({ ...exams, [e.target.name]: e.target.value });
    };

    const onSubmitForm = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8082/exams", exams)
        navigate("/exam")
    }

    useEffect(() => {
        loadExam()
    }, [])

    const loadExam = async () => {
        const result = await axios.get(`http://localhost:8082/exams/${id}`)
        setExams(result.data)
    }

    //Load Courses
    useEffect(() => {
        loadCourses()
    }, [])

    const [courses, viewCourses] = useState([]);

    const loadCourses = async () => {
        const result = await axios.get(`http://localhost:8081/courses`)
        viewCourses(result.data)
    }

    //Load Subjects
    useEffect(() => {
        loadSubjects()
    }, [])

    const [subjects, viewSubjects] = useState([]);

    const loadSubjects = async () => {
        const result = await axios.get(`http://localhost:8081/subjects`)
        viewSubjects(result.data)
    }

    return (
        <div>
            <div className='py-5'>
                <div className="py-5 text-center">
                    <header className="bg-white shadow">
                        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Schedule New Exam</h1>
                        </div>
                    </header>

                    <div className="container my-4 py-5">
                        <div>
                            <form onSubmit={(e) => onSubmitForm(e)}>
                                <div className="overflow-hidden shadow sm:rounded-md">
                                    <div className="bg-white px-4 py-5 sm:p-6">
                                        <div className="grid grid-cols-6 gap-6">

                                            <div className="col-span-6 sm:col-span-3 text-left">
                                                <label className="block text-sm font-medium text-gray-700">Exam Title</label>
                                                <input type="text" className="bg-gray-50 my-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-gray-600 placeholder-gray-400 text-dark focus:ring-blue-500 focus:border-blue-500" placeholder="Exam Title" name='examDescription' value={examDescription} onChange={(e) => onInputChange(e)} required></input>
                                            </div>

                                            <div className="col-span-6 sm:col-span-3 text-left">
                                                <label className="block text-sm font-medium text-gray-700">Exam Date</label>
                                                <input type="text" className="bg-gray-50 my-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-gray-600 placeholder-gray-400 text-dark focus:ring-blue-500 focus:border-blue-500" placeholder="Exam Date" name='examDate' value={examDate} onChange={(e) => onInputChange(e)} required></input>
                                            </div>

                                            <div className="col-span-4 sm:col-span-2 text-left">
                                                <label className="block text-sm font-medium text-gray-700">Exam Type</label>
                                                <input type="text" className="bg-gray-50 my-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-gray-600 placeholder-gray-400 text-dark focus:ring-blue-500 focus:border-blue-500" placeholder="Exam Type" name='examType' value={examType} onChange={(e) => onInputChange(e)} required></input>
                                            </div>

                                            <div className="col-span-4 sm:col-span-2 text-left">
                                                <label className="block text-sm font-medium text-gray-700">Pass Mark</label>
                                                <input type="text" className="bg-gray-50 my-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-gray-600 placeholder-gray-400 text-dark focus:ring-blue-500 focus:border-blue-500" placeholder="Pass Mark" name='examPassMarks' value={examPassMarks} onChange={(e) => onInputChange(e)} required></input>
                                            </div>

                                            <div className="col-span-4 sm:col-span-2 text-left">
                                                <label className="block text-sm font-medium text-gray-700">Total Questions</label>
                                                <input type="text" className="bg-gray-50 my-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-gray-600 placeholder-gray-400 text-dark focus:ring-blue-500 focus:border-blue-500" placeholder="Total Questions" name='examTotalQuestions' value={examTotalQuestions} onChange={(e) => onInputChange(e)} required></input>
                                            </div>

                                            <div className="col-span-4 sm:col-span-3 text-left">
                                                <label className="block text-sm font-medium text-gray-700">Select Course</label>
                                                <select className="rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" name='courseId' id='courseId' value={courseId} onChange={(e) => onInputChange(e)} required>
                                                    <option value="">Choose...</option>
                                                    {
                                                        courses.map((courseResult, index) => (
                                                            <option value={courseResult.id}>{courseResult.name}</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>

                                            <div className="col-span-4 sm:col-span-3 text-left">
                                                <label className="block text-sm font-medium text-gray-700">Select Subject</label>
                                                <select className="rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" name='subjectId' id='subjectId' value={subjectId} onChange={(e) => onInputChange(e)} required>
                                                    <option value="">Choose...</option>
                                                    {
                                                        subjects.map((subjectResult, index) => (
                                                            <option value={subjectResult.id}>{subjectResult.name}</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>

                                        </div>
                                        <div className="text-right py-5">
                                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Update Exam</button>
                                            <Link className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" to="/exam">Cancel</Link>
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
