import { useJwt } from 'react-jwt';

const useDecodeToken = (token: string | null): boolean => {
	let tokenNew: string = '';
	if (typeof token === 'string') {
		tokenNew = token;
	}
	const { decodedToken, isExpired } = useJwt(tokenNew);
	if (decodedToken && !isExpired) {
		return true;
	}
	return false;
};

export default useDecodeToken;
