import axios from 'axios';

const api = axios.create({
    baseURL: 'https://mappinfection.vinirodrigues.com',
    headers: {'Access-Control-Allow-Origin': '*'}
})

export default api