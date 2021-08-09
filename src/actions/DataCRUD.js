import axios from "axios"

const BASE_URL = "http://localhost:3001/posts"

export const getData = () => {
    return axios.get(`${BASE_URL}`)
}

export const postData = (data) => {
    return axios.post(`${BASE_URL}`, data)
}

export const updateData = (id, data) => {
    return axios.put(`${BASE_URL}/${id}`, data)
}

export const deleteData = (id) => {
    return axios.delete(`${BASE_URL}/${id}`)
}