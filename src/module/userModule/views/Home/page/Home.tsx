import React from 'react';
import axios from 'axios';

const Axios = axios.create({
	baseURL: 'http://localhost:8000/',
	timeout: 1000,
	headers: { 'Content-Type': 'application/json'},
});
Axios.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicGFzc3dvcmQiOiIkMmIkMTAkMlNNcXEvYnhsdXhaQlBxcFpIUHFIT3JvQnpEaDI0ZnAuVjlBRmtzbXgud2d3bk9BS3RDWXkiLCJlbWFpbCI6ImhhZGlhemJAdW5hbC5lZHUuY29tIiwiY3JlYXRlZEF0IjoiMjAyMS0xMC0wM1QwMzozMjoxOS4wMDBaIiwidXBkYXRlZEF0IjoiMjAyMS0xMC0wM1QwMzozMjoxOS4wMDBaIiwiaWF0IjoxNjMzMzIwMjc0LCJleHAiOjE2MzMzMjIwNzR9.aWxSH4mviDdqlVa_rcG8ABV3EtZHW1hNdppriJDfLsE`;

	return config;
});

const Home: React.FC = (): JSX.Element => {
	const fetching: any = async () => {
		await Axios({
			method: 'get',
			url: 'users',
			params: {id : 1}
		})
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	fetching();
	return (
		<div>
			<p>Home</p>
		</div>
	);
};

export default Home;
