import React, {
	Fragment,
	useState,
	useEffect,
} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
	AiFillEyeInvisible,
	AiFillEye,
} from 'react-icons/ai';

import { login } from '../../../../../redux/actions/loginActions';
import useDecode from '../../../hooks/useDecode';

import style from './login.module.css';

const Login: React.FC = (props: any): JSX.Element => {
	const { isLogged } = useDecode(props.loginReducer.login);
	const [submit, setSubmit] = useState({
		email: '',
		password: '',
	});
	const [type, setType] = useState(true);
	const [focus, setFocus] = useState(true);
	const [mount, setMount] = useState(false);

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
		setSubmit({
			email: '',
			password: '',
		});
	};

	const handleLook = (): void => {
		setType(!type);
		if (submit.password) {
			setFocus(!focus);
		}
	};

	useEffect(() => {
		setMount(true);
		return () => {
			setMount(false);
		};
	}, []);

	return (
		<Fragment>
			{isLogged && mount ? (
				<Redirect to='/home' />
			) : (
				<div className={`${style.login} size`}>
					<div className={`${style.login__container} container`}>
						<p className={style.login__container__title}>Login</p>
						<form
							onSubmit={handleOnSubmit}
							className={style.login__container__form}
						>
							<input
								className={style.input}
								onChange={handleOnchange}
								type='email'
								name='email'
								placeholder='email'
								value={submit.email}
							/>
							<div className={style.continer__password}>
								<input
									className={`${style.input__password}`}
									onChange={handleOnchange}
									type={type ? 'password' : 'text'}
									name='password'
									placeholder='password'
									value={submit.password}
									style={{ letterSpacing: focus ? '0.5px' : '4px' }}
								/>
								<span
									onClick={handleLook}
									className={style.span__input}
								>
									{type ? (
										<AiFillEyeInvisible color='rgba(0, 0, 0, 0.5)' />
									) : (
										<AiFillEye color='rgba(0, 0, 0, 0.5)' />
									)}
								</span>
							</div>
							{!props.loginReducer.loading ? (
								<button className={style.submit} type='submit'>
									Iniciar sesión
								</button>
							) : (
								<button className={style.submit} type='submit'>
									Cargando...
								</button>
							)}
						</form>
					</div>
				</div>
			)}
		</Fragment>
	);
};
const mapStateToProps = ({ loginReducer }: any) => {
	return { loginReducer };
};

const mapDispatchToProps = { login };

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);
