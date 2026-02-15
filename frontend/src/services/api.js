import axios from 'axios'

const api = axios.create({
    // baseURL: "http://localhost:5000/api"
    baseURL: "https://real-state-backend-xj2z.onrender.com/api"
})

export default api

// https://real-state-backend-xj2z.onrender.com