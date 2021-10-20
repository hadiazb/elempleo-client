import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../../../../redux/actions/usersActions';

import style from './home.module.css';

const HomeAuthenticate: React.FC = ({
	usersReducer,
	getUsers,
}: any): JSX.Element => {


	return (
		<div className={`${style.home} size`}>
			<div className={`container`}>
				<p className={style.home__title}>Esta es la vista del home autenticado</p>
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
