import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

export default function () {

    const [userName, setUserName] = useState('')

    const [password, setPassword] = useState('')

    const [userRole, setUserRole] = useState('')

    const initialvalue = { userName: "", password: "", userRole: "" };

    const [formValue, serFormValue] = useState(initialvalue);

    const navigate = useNavigate();

    const handleUserName = (e) => {
        setUserName(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleUserRole = (e) => {
        setUserRole(e.target.value)
    }

    const handleApi = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/login-users', {
            userName: userName,
            password: password,
            userRole: userRole
        })
            .then(result => {
                console.log(result.data)
                if (result.data.userRole != userRole) {
                    alert('Login Informations are incorrect')
                } else {
                    if (result.data.userRole == "Admin") {
                        navigate('/admin')
                    }
                    if (result.data.userRole == "Lecturer") {
                        e.preventDefault();
                        navigate(`/lecturer_home/${result.data.userId}`)
                    }
                    if (result.data.userRole == "Student") {
                        e.preventDefault();
                        navigate(`/student_home/${result.data.userId}`)
                    }
                }
            }).catch(error => {
                alert('Login Informations are incorrect')
            })
    }

    return (
        <div>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"></img>
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
                    </div>
                    <form className="mt-8 space-y-6">
                        <input type="hidden" name="remember" value="true"></input>
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label for="userName" className="sr-only">UserName</label>
                                <input id="userName" name="userName" type="text" value={userName} onChange={handleUserName} required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="User Name"></input>
                            </div>
                            <div>
                                <label for="password" className="sr-only">Password</label>
                                <input id="password" name="password" type="password" value={password} onChange={handlePassword} autocomplete="current-password" required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password"></input>
                            </div>
                            <div className="col-span-4 sm:col-span-2 text-left">
                                <select name="userRole" type="text" value={userRole} onChange={handleUserRole} className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" required>
                                    <option value="">Choose...</option>
                                    <option value="Admin">Admin</option>
                                    <option value="Lecturer">Lecturer</option>
                                    <option value="Student">Student</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <button type="submit" onClick={handleApi} className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
