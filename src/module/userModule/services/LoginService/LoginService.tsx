import http from '../http-common';

const url: string = 'http://localhost:8000/';

const login = (data: Object) => {
	return http(url).post('/login', data);
};

const LoginService = {
	login,
};

export default LoginService;
