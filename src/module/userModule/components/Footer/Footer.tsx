import React from 'react';

import style from './footer.module.css';

const Footer: React.FC = (): JSX.Element => {
	return (
		<footer className={`${style.footer}`}>
			<div className={`${style.footer__container} container`}>
				<p className={style.footer__container__title}>Footer</p>
			</div>
		</footer>
	);
};

export default Footer;
