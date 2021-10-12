import axios from 'axios';
import { getToken } from '../../../utils/StorageUtil/StorageUtil';

const http = (url: string) => {
	const fetch = axios.create({
		baseURL: url,
		headers: {
			'Content-type': 'application/json',
		},
	});

	fetch.interceptors.request.use((config) => {
		const token = getToken();
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	});

	fetch.interceptors.response.use(
		(response) => response,
		(error) => {
			if (error.message === 'Network Error') {
				return Promise.reject(`Error${error.message}, Al parecer el servicio que trae el recurso no esta disponible`);
			}
			// if (error.response) {
			// 	switch (error.response.status) {
			// 		case 401:
			// 			// window.location = '/login';
			// 			break;
			// 		case 404:
			// 			return Promise.reject(error.message);
			// 		default:
			// 			return Promise.reject(error);
			// 	}
			// }
			// return Promise.reject(error);
		}
	);

	return fetch;
};

export default http;
