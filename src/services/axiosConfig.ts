import axios from 'axios';

const authRequest = axios.create({
    baseURL: 'http://localhost:8080/api/v1',
    headers: {
        'Content-Type': 'application/json',
    
    }
})

const publicRequest = axios.create({
    baseURL: 'http://localhost:8080/api/v1',
    headers: {
        'Content-Type': 'application/json'
    }
})


export {
    authRequest,
    publicRequest
}