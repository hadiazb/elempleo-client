import React from 'react';

import style from './notFoundBanner.module.css';

const NotFoundBanner: React.FC = (): JSX.Element => {
	return (
		<div className={style.notFoundBanner}>
			<h4 className={style.notFoundBanner__title}>
				¡Disculpa, Parece que aqui se encuentra un Banner vacio!
			</h4>
			<p className={style.notFoundBanner__paragraph}>
				Estamos trabajando para actualizar los datos
			</p>
		</div>
	);
};

export default NotFoundBanner;
