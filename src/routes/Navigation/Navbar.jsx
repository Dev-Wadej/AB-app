import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as Hamburger } from '../../assets/hamburger.svg';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import Button from '../../components/Button/Button';

import { NavContainer } from './Navbar.styles';

const Navbar = () => {
  return (
    <>
      <NavContainer>
        <Hamburger />
        <Logo />
        <Link to={'/auth'} onClick={() => console.log('DOne')}>
          <Button title="Sign In" />
        </Link>
      </NavContainer>
      <Outlet />
    </>
  );
};

export default Navbar;
