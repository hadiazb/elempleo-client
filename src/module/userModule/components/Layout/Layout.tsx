import React, { Fragment } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

interface LayoutProps {
	isLogged: boolean;
	role: number | null;
	children: any;
}

const Layout: React.FC<LayoutProps> = ({
	isLogged,
	role,
	children,
}): JSX.Element => {
	return (
		<Fragment>
			<Header isLogged={isLogged} role={role} />
			{children}
			<Footer />
		</Fragment>
	);
};

export default Layout;
