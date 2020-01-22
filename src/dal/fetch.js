import axios from 'axios';

const API_URL = 'https://admin.kelinda.tk';
const ACCESS_TOKEN = '?access_token=NWU0ZDlmZTIwZTgyYWY1NjU4ZGFmOGQ0YjY0YmRkMTU0ODA5YTQ5N2JmMzI1MGRjNmJhMGEyZjBjZThjM2ZkZA';

export const getDoctorsList = () => axios.get(`${API_URL}/api/v1/doctors${ACCESS_TOKEN}`);