import http from '../http-common';

const url: string = 'http://localhost:8000/';

const getAll = () => {
	return http(url).get('/universities');
};

const getById = (id: string) => {
	return http(url).get(`/universities/${id}`);
};

const createUser = (data: Object) => {
	return http(url).post(`/universities/`, data);
};

const UniversitiesService = {
	getAll,
	getById,
	createUser,
};

export default UniversitiesService;
