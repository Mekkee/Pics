import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 1cc0e22fe44a9a0cd964d7b56e18af68ec61568e90d5c8e3d2f0e772986d67c8'
    }
});