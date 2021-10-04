import React, { Fragment } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout: React.FC = ({ children }): JSX.Element => {
	return (
		<Fragment>
			<Header />
			{children}
			<Footer />
		</Fragment>
	);
};

export default Layout;
