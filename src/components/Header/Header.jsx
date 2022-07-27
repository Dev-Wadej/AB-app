import React from 'react';
import { ReactComponent as Logoblue } from '../../assets/logocolor.svg';
import { HeaderContainer } from './Header.styles';

const Header = ({
  title = 'Sign in to your AB Luxury account to continue',
}) => {
  return (
    <HeaderContainer>
      <Logoblue />
      <p>{title}</p>
    </HeaderContainer>
  );
};

export default Header;
