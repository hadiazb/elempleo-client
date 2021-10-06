import React from 'react';

import style from './contact.module.css'

const Contact: React.FC = (): JSX.Element => {
	return (
		<div className={`${style.contact} size`}>
			<div className={`container`}>
				<p>Contact</p>
			</div>
		</div>
	);
};

export default Contact;
