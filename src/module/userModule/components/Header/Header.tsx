import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { signout } from '../../../../redux/actions/loginActions';

import { HeaderProps } from '../../interfaces/index';

import style from './header.module.css';

const {
	REACT_APP_HOME_AUTH,
	REACT_APP_HOME_NOAUTH,
	REACT_APP_HOME_LOGIN,
	REACT_APP_HOME_REGISTER,
	REACT_APP_HOME_CONTACT,
}: any = process.env;

const Header: React.FC<HeaderProps> = (
	props
): JSX.Element => {
	const handleClick = (): void => {
		props.signout();
	};

	return (
		<header className={`${style.header}`}>
			<nav className={`${style.header__navigation} container`}>
				<NavLink
					activeClassName={style.active_nav}
					className={`${style.header__navigation__item}`}
					exact
					to={
						!props.isLogged
							? REACT_APP_HOME_AUTH
							: REACT_APP_HOME_NOAUTH
					}
				>
					Inicio
				</NavLink>
				<NavLink
					activeClassName={style.active_nav}
					className={`${style.header__navigation__item}`}
					exact
					to={REACT_APP_HOME_CONTACT}
				>
					Contactenos
				</NavLink>
				{!props.isLogged ? (
					<>
						<NavLink
							activeClassName={style.active_nav}
							className={`${style.header__navigation__item}`}
							exact
							to={REACT_APP_HOME_LOGIN}
						>
							Login
						</NavLink>
						<NavLink
							activeClassName={style.active_nav}
							className={`${style.header__navigation__item}`}
							exact
							to={REACT_APP_HOME_REGISTER}
						>
							Registrar
						</NavLink>
					</>
				) : (
					<NavLink
						activeClassName={style.active_nav}
						className={`${style.header__navigation__item}`}
						exact
						to='/'
						onClick={handleClick}
					>
						Signout
					</NavLink>
				)}
			</nav>
		</header>
	);
};

const mapStateToProps = ({ loginReducer }: any) => {
	return { loginReducer };
};

const mapDispatchToProps = { signout };

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header);
