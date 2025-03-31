import axios from "axios";


import React from 'react'

export const axiosInstance = axios.create({
    baseURL:"http://localhost:5001/",
    withCredentials: true
})
export default axios
