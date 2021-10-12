import { MdError } from 'react-icons/md';

import './errorMessage.css';

const ErrorMessage = ({ error }: any) => {
	return (
		<div className='error'>
			<p className='error__message'>Error: {error}</p>
			<MdError />
		</div>
	);
};

export default ErrorMessage;
