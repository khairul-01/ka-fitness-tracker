import axios from "axios";


const useAxiosSecure = () => {
    const axiosSecure = axios.create({
        baseURL: "http://localhost:5000",
    })
    // request interceptors to add authorization header for every secure call to the api
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token');
        // console.log('request stopped by interceptors before adding token', token);
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    // Add a response interceptor
    // interceptors for 401 and 403 status
    axiosSecure.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    });

    return axiosSecure;
};

export default useAxiosSecure;