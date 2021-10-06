import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { login } from '../../../../../redux/actions/loginActions';
import useDecodeToken from '../../../hooks/useDecodeToken';

import style from './login.module.css';

const Login: React.FC = (props: any): JSX.Element => {
	const isLogged: boolean = useDecodeToken(
		props.loginReducer.login
	);
	const [submit, setSubmit] = useState({
		email: '',
		password: '',
	});

	const handleOnchange = (event: any) => {
		setSubmit({
			...submit,
			[event.target.name]: event.target.value,
		});
	};

	const handleOnSubmit = async (event: {
		preventDefault: () => void;
	}) => {
		event.preventDefault();
		await props.login(submit);
	};


	if (isLogged) {
		return <Redirect to='/home' />;
	} else {
		return (
			<div className={`${style.login} size`}>
				<div className={`container`}>
					<p>Login</p>
					<form onSubmit={handleOnSubmit}>
						<input
							onChange={handleOnchange}
							type='email'
							name='email'
							placeholder='email'
							value={submit.email}
						/>
						<input
							onChange={handleOnchange}
							type='password'
							name='password'
							placeholder='password'
							value={submit.password}
						/>
						<button type='submit'>Iniciar sesión</button>
					</form>
				</div>
			</div>
		);
	}
};
const mapStateToProps = ({ loginReducer }: any) => {
	return { loginReducer };
};

const mapDispatchToProps = { login };

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);
