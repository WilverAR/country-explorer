import axios from 'axios';
const API_URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const http = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: `Client-ID ${API_KEY}`
    }
});

export class ApiFakeService {
    async getImageUrl(countryName) {
        return await http.get(`/photos`, {
            params: {
                query: countryName,
                size: 'small'
            }
        });
    }
}