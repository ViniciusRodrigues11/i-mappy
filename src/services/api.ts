import axios from 'axios';

const api = axios.create({
    baseURL: 'https://nlw-happy-deploy.herokuapp.com',
})

export default api