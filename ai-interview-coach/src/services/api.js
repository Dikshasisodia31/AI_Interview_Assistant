import axios from "axios";

const api = axios.create({
    // baseURL : "http://localhost:3000/api",
    baseURL : "https://ai-interview-assistant-5qwq.onrender.com/api",

    //baseURL: import.meta.env.VITE_API_URL,
});

export default api;