import Contact from '../views/Contact/page/Contact';
import Home from '../views/Home/page/Home';
import Login from '../views/Login/page/Login';

const ROUTES: Object[] = [
	{
		path: '/',
		key: 'HOME',
		exact: true,
		component: Home,
		auth: false,
	},
  {
		path: '/login',
		key: 'LOGIN',
		exact: true,
		component: Login,
		auth: false,
	},
  {
		path: '/contactenos',
		key: 'CONTACT',
		exact: true,
		component: Contact,
		auth: false,
	},
];

export default ROUTES;
