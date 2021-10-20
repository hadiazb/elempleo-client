import React from 'react';

import './spinner.css';

interface SpinnerProps {
	height?: number | string;
}

const Spinner: React.FC<SpinnerProps> = ({ height }) => {
	return (
		<div
			className='spinner'
			style={{ minHeight: `${height}` }}
		>
			<div className='lds-ripple'>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default Spinner;
