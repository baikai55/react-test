import axios from "axios";
let request = axios.create({
    baseURL: "/",
    timeout: 5000,
})
request.interceptors.request.use(config => {
    // console.log(config);
    return config;
})
request.interceptors.response.use(response => {
    // console.log(response);
    return response.data;
})

export default request;