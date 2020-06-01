import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

const token =  localStorage.getItem('access_token');

instance.defaults.headers.common['Authorization'] = token;

export default instance;