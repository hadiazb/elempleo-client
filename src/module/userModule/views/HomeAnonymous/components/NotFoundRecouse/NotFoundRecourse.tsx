import React from 'react';

import style from './notFoundRecourse.module.css';

interface NotFoundRecourseProps {
	text?: string;
}

const NotFoundRecourse: React.FC<NotFoundRecourseProps> = ({
	text,
}): JSX.Element => {
	return (
		<div className={style.notFoundBanner}>
			<h4 className={style.notFoundBanner__title}>
				¡Disculpa, Parece que aqui se encuentra un {text} vacio!
			</h4>
			<p className={style.notFoundBanner__paragraph}>
				Estamos trabajando para actualizar los datos
			</p>
		</div>
	);
};

export default NotFoundRecourse;
