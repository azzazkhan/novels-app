import axios from 'axios';

export const client = axios.create({
    baseURL: `${process.env.BACKEND_API_URL}/api`,
});
