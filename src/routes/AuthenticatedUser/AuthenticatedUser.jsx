import React, { useContext } from 'react';
import Loader from '../../components/Loader/Loader';
import { UserContext } from '../../context/userContext';
import Main from '../Main/Main';

const AuthenticatedUser = () => {
  const { userFirebase } = useContext(UserContext);
  return userFirebase === null ? <Loader /> : <Main />;
};

export default AuthenticatedUser;
