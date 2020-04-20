import axios from "axios";
import { getToken } from "./auth.js";

const api = axios.create({
    baseURL: "https://localhost/aplicacao",
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
});

api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;