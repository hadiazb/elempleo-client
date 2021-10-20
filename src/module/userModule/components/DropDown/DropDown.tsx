import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './dropDown.css';

const DropDown: React.FC<DropDownProps> = ({
	onClick,
	role,
}) => {
	const [flag, setFlag] = useState(false);
	const handleClick = () => {
		setFlag(!flag);
	};

	const RegularUser = () => {
		return (
			<ul className='profile__list'>
				<li className='profile__list__item'>
					<NavLink className='anchor' exact to='/perfil'>
						Ver Perfil
					</NavLink>
				</li>
				<li className='profile__list__item'>
					<NavLink className='anchor' exact to='/'>
						Usuario
					</NavLink>
				</li>
				<li className='profile__list__item' onClick={onClick}>
					<NavLink className='anchor' exact to='/'>
						Cerrar Sesión
					</NavLink>
				</li>
			</ul>
		);
	};

	const AdminUser = () => {
		return (
			<ul className='profile__list'>
				<li className='profile__list__item'>
					<NavLink className='anchor' exact to='/perfil'>
						Ver Perfil
					</NavLink>
				</li>
				<li className='profile__list__item'>
					<NavLink className='anchor' exact to='/'>
						Administrador
					</NavLink>
				</li>
				<li className='profile__list__item' onClick={onClick}>
					<NavLink className='anchor' exact to='/'>
						Cerrar Sesión
					</NavLink>
				</li>
			</ul>
		);
	};

	const putContent = (role: null | number) => {
		switch (role) {
			case 1:
				return <AdminUser />;
			case 0:
				return <RegularUser />;
			default:
				return <RegularUser />;
		}
	};

	return (
		<div className='profile'>
			<p onClick={handleClick} className='profile__option'>
				Perfil
			</p>
			{flag && putContent(role)}
		</div>
	);
};

export default DropDown;

interface DropDownProps {
	onClick?: () => void;
	role: number | null;
}
