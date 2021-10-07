import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { signout } from '../../../../redux/actions/loginActions';
import { ROUTES } from '../../routes/routes';
import { config } from '../../../../config';
// import { filterRoute } from '../../../../utils/FilterRoute/FilterRoute';

import { HeaderProps } from '../../interfaces/index';

import style from './header.module.css';

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
							? ROUTES.filter(
									(route) =>
										route.key === config.routes.noAuth[0].key
							  )[0].path
							: ROUTES.filter(
									(route) => route.key === config.routes.auth[0].key
							  )[1].path
					}
				>
					Inicio
				</NavLink>
				<NavLink
					activeClassName={style.active_nav}
					className={`${style.header__navigation__item}`}
					exact
					to='/contactenos'
				>
					Contactenos
				</NavLink>
				{!props.isLogged ? (
					<>
						<NavLink
							activeClassName={style.active_nav}
							className={`${style.header__navigation__item}`}
							exact
							to={
								ROUTES.filter((route) => route.key === 'login')[0]
									.path
							}
						>
							Login
						</NavLink>
						<NavLink
							activeClassName={style.active_nav}
							className={`${style.header__navigation__item}`}
							exact
							to={ROUTES[3].path}
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
