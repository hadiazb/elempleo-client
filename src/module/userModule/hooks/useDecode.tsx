import { useJwt } from 'react-jwt';

const useDecode = (token: string | null): any => {
	let tokenNew: string = '';
	let isLogged: boolean = false;
	if (typeof token === 'string') {
		tokenNew = token;
	}
	const { decodedToken, isExpired } = useJwt(tokenNew);
	if (decodedToken !== null && !isExpired) {
		isLogged = true;
	}
	return { isLogged, decodedToken };
};

export default useDecode;
