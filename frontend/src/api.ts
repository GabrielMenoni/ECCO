import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3000', // Replace with your backend URL
  withCredentials: true, // Include if your requests need to send cookies or authorization headers
})

/*
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Replace with your backend URL
  withCredentials: true // Include if your requests need to send cookies or authorization headers
});

export default api;

*/
