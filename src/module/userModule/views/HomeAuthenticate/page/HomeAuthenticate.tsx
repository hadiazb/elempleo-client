import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../../../../redux/actions/usersActions';

import style from './home.module.css';

const HomeAuthenticate: React.FC = ({
	usersReducer,
	getUsers,
}: any): JSX.Element => {
	const { loading, error, users } = usersReducer;
	const getUsersData = useCallback(() => {
		if (users.length === 0) {
			getUsers();
		}
	}, [getUsers, users.length]);

	useEffect(() => {
		getUsersData();
	}, [getUsersData]);

	return (
		<div className={`${style.home} size`}>
			<div className={`container`}>
				<p className={style.home__title}>Esta es la vista del home autenticado</p>
				<div>
					{loading ? (
						<p className={style.home__title}>Cargando</p>
					) : (
						<>
							{error && <p>Parece que ocurrio un error: {error}</p>}
							{users.map((user: any) => (
								<div
									key={user.id}
									className={style.home__container}
								>
									<p className={style.home__container__title}>
										{user.id}
									</p>
									<p className={style.home__container__title}>
										{user.username}
									</p>
									<p className={style.home__container__title}>
										{user.email}
									</p>
								</div>
							))}
						</>
					)}
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = ({ usersReducer }: any) => {
	return { usersReducer };
};

const mapDispatchToProps = {
	getUsers,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeAuthenticate);
