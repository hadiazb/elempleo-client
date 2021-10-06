import http from '../http-common';

const url: string = 'http://localhost:8000/';

const getAll = () => {
	return http(url).get('/users');
};

const getById = (id: string) => {
	return http(url).get(`/users/${id}`);
};

const createUser = (data: Object) => {
	return http(url).post(`/users/signup`, data);
};

const UserService = {
	getAll,
  getById,
	createUser
};

export default UserService;
