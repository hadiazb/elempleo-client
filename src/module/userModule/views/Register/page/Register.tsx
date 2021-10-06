import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { registerUser } from '../../../../../redux/actions/usersActions';

import style from './register.module.css';

const Register: React.FC = (props: any): JSX.Element => {
	const [redirect, setRedirect] = useState(false);
	const [submit, setSubmit] = useState({
		username: '',
		email: '',
		password: '',
	});

	const handleOnChange = async (event: any) => {
		setSubmit({
			...submit,
			[event.target.name]: event.target.value,
		});
	};

	const handleOnSubmit = async (event: {
		preventDefault: () => void;
	}) => {
		event.preventDefault();
		console.log('envio de data');
		props.registerUser(submit);
		setRedirect(!redirect);
	};

	if (redirect) {
		return <Redirect to='/login' />;
	} else {
		return (
			<div className={`${style.register} size`}>
				<div
					className={`${style.register__container}container`}
				>
					<p className={style.register__container__title}>
						Registrar
					</p>
					<form
						onSubmit={handleOnSubmit}
						className={style.register__container__form}
					>
						<input
							type='text'
							name='username'
							placeholder='username'
							value={submit.username}
							onChange={handleOnChange}
							className={style.input}
						/>
						<input
							type='email'
							name='email'
							placeholder='email'
							value={submit.email}
							onChange={handleOnChange}
							className={style.input}
						/>
						<input
							type='password'
							name='password'
							placeholder='password'
							value={submit.password}
							onChange={handleOnChange}
							className={style.input}
						/>
						<button type='submit' className={style.submit}>
							Registrarme
						</button>
					</form>
				</div>
			</div>
		);
	}
};

const mapStateToProps = ({
	usersReducer,
	loginReducer,
}: any) => {
	return { usersReducer, loginReducer };
};

const mapDispatchToProps = { registerUser };

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Register);
