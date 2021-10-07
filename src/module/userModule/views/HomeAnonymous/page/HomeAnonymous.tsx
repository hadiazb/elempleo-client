import React from 'react';
import Banner from '../components/Banner/Banner';

import style from './home.module.css';

const HomeAnonymous: React.FC = (): JSX.Element => {
	return (
		<div className={`${style.home} size`}>
			<Banner />
			<div className={`container`}></div>
		</div>
	);
};

export default HomeAnonymous;
