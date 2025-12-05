import axios, { AxiosInstance } from 'axios';

export const instancia: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api',
});

instancia.interceptors.request.use(
    (config: any) => {
        const token = localStorage.getItem('token');
        console.log('interceptor');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
