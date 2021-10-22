import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import DropDown from '../DropDown/DropDown';

import { signout } from '../../../../redux/actions/loginActions';

import Logo from '../../../../assets/logos/logo.svg';

import style from './header.module.css';

const {
  REACT_APP_HOME_AUTH,
  REACT_APP_HOME_NOAUTH,
  REACT_APP_HOME_LOGIN,
  REACT_APP_HOME_CONTACT,
}: any = process.env;

const Header: React.FC<HeaderProps> = ({ signout, isLogged, role }): JSX.Element => {
  const handleClick = (): void => {
    signout();
  };

  return (
    <header className={`${style.header}`}>
      <nav className={`${style.header__navigation} container`}>
        <NavLink
          activeClassName={style.active_nav}
          className={style.header__navigation__logo}
          exact
          to={!isLogged ? REACT_APP_HOME_AUTH : REACT_APP_HOME_NOAUTH}
        >
          <img src={Logo} alt="Logo" className={style.logo} />
          <span className={style.name}>Lucho's Bike</span>
        </NavLink>
        <div className={style.header__navigation__list}>
          <NavLink
            activeClassName={style.active_nav}
            className={`${style.header__navigation__item}`}
            exact
            to={REACT_APP_HOME_CONTACT}
          >
            Contactenos
          </NavLink>
          {!isLogged ? (
            <NavLink
              activeClassName={style.active_nav}
              className={`${style.header__navigation__item}`}
              exact
              to={REACT_APP_HOME_LOGIN}
            >
              Login
            </NavLink>
          ) : (
            <DropDown onClick={handleClick} role={role} />
          )}
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = ({ loginReducer }: any) => {
  return { loginReducer };
};

const mapDispatchToProps = { signout };

export default connect(mapStateToProps, mapDispatchToProps)(Header);

export interface loginReducer {
  login: string | null;
  error: string;
  loading: boolean;
}
export interface HeaderProps {
  isLogged: boolean;
  role: number | null;
  loginReducer: loginReducer;
  signout: () => any;
}
