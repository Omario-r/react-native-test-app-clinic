import axios from 'axios';

const API_URL = 'https://admin.kelinda.tk';
const ACCESS_TOKEN = '?access_token=NWU0ZDlmZTIwZTgyYWY1NjU4ZGFmOGQ0YjY0YmRkMTU0ODA5YTQ5N2JmMzI1MGRjNmJhMGEyZjBjZThjM2ZkZA';

export const getDoctorsList = () => axios.get(`${API_URL}/api/v1/doctors${ACCESS_TOKEN}`);

export const addDoctor = (payload) => axios.post(`${API_URL}/api/v1/doctors${ACCESS_TOKEN}`, payload);

export const getSpecialisations = () => axios.get(`${API_URL}/api/v1/doctorspecialisations${ACCESS_TOKEN}`);

export const removeDoctor = (id) => axios.delete(`${API_URL}/api/v1/doctors/${id}${ACCESS_TOKEN}`);

export const updateDoctor = (id) => axios.post(`${API_URL}/api/v1/doctors/${id}${ACCESS_TOKEN}`);
