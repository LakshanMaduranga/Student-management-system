import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

export default function AddCourseSubject() {

    let navigate = useNavigate()

    const { id } = useParams()

    const [subjects, setSubjects] = useState([])

    useEffect(() => {
        loadSubjects();
    }, []);

    const loadSubjects = async () => {
        const result = await axios.get('http://localhost:8081/subjects');
        setSubjects(result.data);
    };

    const [courses, setCourses] = useState([])

    useEffect(() => {
        loadCourses();
    }, []);

    const loadCourses = async () => {
        const result = await axios.get('http://localhost:8081/courses');
        setCourses(result.data);
    };

    const [courseSubject, setCourseSubject] = useState({
        courseId: "",
        subjectId: ""
    });

    const { courseId, subjectId } = courseSubject;

    const onInputChange = (e) => {
        setCourseSubject({ ...courseSubject, [e.target.name]: e.target.value });
    };

    const onSubmitForm = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8081/course-subjects", courseSubject)
        navigate("/course")
    }

    return (
        <div>
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 py-5">Add Subjects to Course</h1>
                </div>
            </header>
            <div className='px-4 py-5 text-left'>
                <form onSubmit={(e) => onSubmitForm(e)}>
                    <div className="overflow-hidden shadow sm:rounded-md">
                        <div className="bg-white px-4 py-5 sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-4 sm:col-span-3 text-left">
                                    <label className="block text-sm font-medium text-gray-700">Select Course and Subject</label>

                                    <select className="mt-1 mx-2 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" name='courseId' id='courseId' value={courseId} onChange={(e) => onInputChange(e)} required>
                                        <option value="">Choose...</option>
                                        {
                                            courses.map((coursesResult, indexCourse) => (
                                                <option key={indexCourse} value={coursesResult.id}>{coursesResult.name}</option>
                                            ))
                                        }
                                    </select>

                                    <select className="mt-1 mx-2 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" name='subjectId' id='subjectId' value={subjectId} onChange={(e) => onInputChange(e)} required>
                                        <option value="">Choose...</option>
                                        {
                                            subjects.map((subjectsResult, indexSubject) => (
                                                <option key={indexSubject} value={subjectsResult.id}>Credit - {subjectsResult.credit} &emsp; {subjectsResult.name}</option>
                                            ))
                                        }
                                    </select>
                                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 my-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add Subject</button>
                                    <Link className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" to="/course">Cancel</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
