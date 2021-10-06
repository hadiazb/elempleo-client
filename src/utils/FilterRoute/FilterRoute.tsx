import { Auth } from '../../module/userModule/interfaces/index';

export const filterRoute = (
	config: Auth[],
	key: string
): string =>
	config.filter((route) => route.key === key)[0].path;
