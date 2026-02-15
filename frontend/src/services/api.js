// import axios from 'axios'

// const api = axios.create({

//     baseURL: "https://real-state-backend-xj2z.onrender.com/api",
// })

// export default api

import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "https://real-state-backend-xj2z.onrender.com/api",
})

export default api
