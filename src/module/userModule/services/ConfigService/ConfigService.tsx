import http from '../http-common';

const url: string = 'http://localhost:8000/';

const getAll = () => {
	return http(url).get('/config');
};

const getById = (id: string) => {
	return http(url).get(`/config/${id}`);
};

const createConfig = (data: Object) => {
	return http(url).post(`/config/`, data);
};

const configService = {
	getAll,
	getById,
	createConfig,
};

export default configService;
