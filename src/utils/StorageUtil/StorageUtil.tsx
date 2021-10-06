const TOKEN: string = 'TOKEN__AUTH';

export const setToken = (token: string): void => {
	localStorage.setItem(TOKEN, token);
};

export const getToken = (): string | null => {
	return localStorage.getItem(TOKEN);
};

export const deleteToken = (): void => {
	localStorage.removeItem(TOKEN);
};
