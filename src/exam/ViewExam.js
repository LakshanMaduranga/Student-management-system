import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

export default function ViewExam() {

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

    useEffect(() => {
        loadExams()
    }, [])

    const [courses, setCourse] = useState({
        id: "",
        name: "",
        description: "",
        courseCode: ""
    });

    const [subjects, setSubject] = useState({
        id: "",
        name: "",
        credit: "",
        lecturerId: ""
    });

    const loadExams = async () => {
        const result = await axios.get(`http://localhost:8082/exams/${id}`)
        setExams(result.data)
        console.log(result.data)

        const courseId = result.data.courseId
        const resultCourse = await axios.get(`http://localhost:8081/courses/${courseId}`)
        setCourse(resultCourse.data)

        const subjectId = result.data.subjectId
        const resultDubject = await axios.get(`http://localhost:8081/subjects/${subjectId}`)
        setSubject(resultDubject.data)
    }

    return (
        <div>
            <div className='py-5'>
                <div className="py-5 text-center">
                    <header className="bg-white shadow">
                        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{exams.examDescription}</h1>
                        </div>
                    </header>

                    <div className="container my-4 py-5">
                        <div>
                            <form>
                                <div className="overflow-hidden shadow sm:rounded-md">
                                    <div className="bg-white px-4 py-5 sm:p-6">
                                        <div className="grid grid-cols-6 gap-6">

                                            <div className="col-span-6 sm:col-span-3 text-left">
                                                <label className="block text-sm font-medium text-gray-700">Exam Title</label>
                                                <input type="text" className="bg-gray-50 my-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-gray-600 placeholder-gray-400 text-dark focus:ring-blue-500 focus:border-blue-500" placeholder="Exam Title" name='examDescription' value={exams.examDescription} disabled></input>
                                            </div>

                                            <div className="col-span-6 sm:col-span-3 text-left">
                                                <label className="block text-sm font-medium text-gray-700">Exam Date</label>
                                                <input type="text" className="bg-gray-50 my-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-gray-600 placeholder-gray-400 text-dark focus:ring-blue-500 focus:border-blue-500" placeholder="Exam Date" name='examDate' value={exams.examDate} disabled></input>
                                            </div>

                                            <div className="col-span-4 sm:col-span-2 text-left">
                                                <label className="block text-sm font-medium text-gray-700">Exam Type</label>
                                                <input type="text" className="bg-gray-50 my-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-gray-600 placeholder-gray-400 text-dark focus:ring-blue-500 focus:border-blue-500" placeholder="Exam Type" name='examType' value={exams.examType} disabled></input>
                                            </div>

                                            <div className="col-span-4 sm:col-spaclassNamen-2 text-left">
                                                <label className="block text-sm font-medium text-gray-700">Pass Mark</label>
                                                <input type="text" className="bg-gray-50 my-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-gray-600 placeholder-gray-400 text-dark focus:ring-blue-500 focus:border-blue-500" placeholder="Pass Mark" name='examPassMarks' value={exams.examPassMarks} disabled></input>
                                            </div>

                                            <div className="col-span-4 sm:col-span-2 text-left">
                                                <label className="block text-sm font-medium text-gray-700">Total Questions</label>
                                                <input type="text" className="bg-gray-50 my-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-gray-600 placeholder-gray-400 text-dark focus:ring-blue-500 focus:border-blue-500" placeholder="Total Questions" name='examTotalQuestions' value={exams.examTotalQuestions} disabled></input>
                                            </div>

                                            <div className="col-span-4 sm:col-span-2 text-left">
                                                <label className="block text-sm font-medium text-gray-700">Course</label>
                                                <input type="text" className="bg-gray-50 my-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-gray-600 placeholder-gray-400 text-dark focus:ring-blue-500 focus:border-blue-500" placeholder="Course" name='courseCode' value={courses.courseCode} disabled></input>
                                            </div>

                                            <div className="col-span-4 sm:col-span-2 text-left">
                                                <label className="block text-sm font-medium text-gray-700">Subject</label>
                                                <input type="text" className="bg-gray-50 my-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-gray-600 placeholder-gray-400 text-dark focus:ring-blue-500 focus:border-blue-500" placeholder="Subject" name='name' value={subjects.name} disabled></input>
                                            </div>

                                        </div>
                                        <div className="text-right py-5">
                                            <Link className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" to="/exam">Back</Link>
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
