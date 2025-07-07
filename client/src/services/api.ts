import axios from 'axios'

//const API_URL = import.meta.env.VITE_API_URL;
const API_URL = 'http://localhost:3000'

export const instance = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json'
	}
})
