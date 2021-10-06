import React from 'react';
import { connect } from 'react-redux';

import style from './home.module.css';

const HomeAnonymous: React.FC = (): JSX.Element => {
	return (
		<div className={`${style.home} size`}>
			<div className={`container`}>
				<p className={style.home__title}>Esta es la vista del home anonimo</p>
			</div>
		</div>
	);
};

const mapStateToProps = ({ usersReducer }: any) => {
	return { usersReducer };
};

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeAnonymous);
