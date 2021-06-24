import axios from "axios"

export const http = (token=null) => {
    const headers = {
        // 'Content-Type': 'multipart/form-data',
        // authorization: ''
    }
    if(token){
        headers.authorization = `Bearer ${token}`
        console.log(headers)
    }
    return axios.create({
        headers
    })
}