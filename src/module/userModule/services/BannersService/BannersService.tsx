import http from '../http-common';

const url: string = 'http://localhost:8000/';

const getAll = () => {
	return http(url).get('/banner');
};

const getById = (id: string) => {
	return http(url).get(`/banner/${id}`);
};

const createUser = (data: Object) => {
	return http(url).post(`/banner/`, data);
};

const BannerService = {
	getAll,
  getById,
	createUser
};

export default BannerService;
