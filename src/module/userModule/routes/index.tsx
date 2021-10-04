import React from 'react';
import {
	BrowserRouter as Routes,
	Route,
	Switch,
} from 'react-router-dom';

import Layout from '../components/Layout/Layout';
import NotFound from '../views/NotFound/page/NotFound';

import ROUTES from './routes';

const Router: React.FC = (): JSX.Element => {
	return (
		<Routes>
			<Layout>
				<Switch>
					{ROUTES.map(
						({ path, key, exact, component, auth }: any) => (
							<Route
								path={path}
								key={key}
								exact={exact}
								component={component}
							/>
						)
					)}
					<Route path='*' component={NotFound} />
				</Switch>
			</Layout>
		</Routes>
	);
};

export default Router;
