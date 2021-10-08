import React from 'react';
import Banner from '../components/Banner/Banner';
import Carousel from '../components/Carousel/Carousel';

import style from './home.module.css';

const HomeAnonymous: React.FC = (): JSX.Element => {
	return (
		<div className={`${style.home} size`}>
			<Banner />
			<div className={`container`}>
				<Carousel />
			</div>
		</div>
	);
};

export default HomeAnonymous;
