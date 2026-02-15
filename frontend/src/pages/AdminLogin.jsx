import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'
const AdminLogin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();


        try {

            const response = await api.post('/admin/login', {
                email, password
            })

            if (response.data.success) {
                localStorage.setItem('admin', 'true')
                navigate('/admin/dashboard')
            }

        } catch (error) {
            alert("Invalid credentials");

        }
    }

    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleLogin}
                className="bg-white p-10 rounded-xl shadow-lg w-96"
            >
                <h2 className="text-3xl font-bold mb-6 text-center">
                    Admin Login
                </h2>

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full mb-4 p-3 border rounded-lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full mb-6 p-3 border rounded-lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800">
                    Login
                </button>
            </form>
        </div>
    )
}

export default AdminLogin