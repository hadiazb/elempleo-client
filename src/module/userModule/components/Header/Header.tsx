import React from 'react';
import { NavLink } from 'react-router-dom';



const Header: React.FC = (): JSX.Element => {
	return (
		<div>
			<NavLink to='/' >Inicio</NavLink>
			<NavLink to='/contactenos' >Contactenos</NavLink>
			<NavLink to='/login' >Login</NavLink>
		</div>
	);
};

export default Header;
