import axios from 'axios';

const api = axios.create({
    baseURL: 'http://159.89.84.226:3333',
    headers: {'Access-Control-Allow-Origin': '*'}
})

export default api