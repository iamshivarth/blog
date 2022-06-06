import React, { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import './Layout.scss';
import logo from '../../assets/crown.svg';
import { UserContext } from '../../context/UserContext';

import { signOutUser } from '../../utils/firebase/firebase.utils';

const Layout = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <header className="navbar">
        <Link className="logo__container" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="nav_links__container">
          <Link className="nav_link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav_link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav_link" to="/signin">
              SIGNIN
            </Link>
          )}
        </div>
      </header>
      <Outlet />
      <footer>&copy;Copyright @2022-23</footer>
    </Fragment>
  );
};

export default Layout;
