import React, { Fragment } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

interface LayoutProps {
	isLogged: boolean;
}

const Layout: React.FC<LayoutProps> = (
	props
): JSX.Element => {
	return (
		<Fragment>
			<Header isLogged={props.isLogged} />
			{props.children}
			<Footer />
		</Fragment>
	);
};

export default Layout;
