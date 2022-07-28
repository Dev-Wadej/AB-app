import React from 'react';
import { createContext, useState } from 'react';

export const UserContext = createContext({
  userDetails: {},
  setUserDetails: () => {},
  userCreateDetails: {},
  setUserCreateDetails: () => {},
  clearFormFields: () => {},
  userFirebase: {},
  setUserFirebase: () => {},
});
const defaultFormFields = {
  username: '',
  email: '',
  number: '',
  password: '',
  cfrmPassword: '',
};
export const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({});
  const [userFirebase, setUserFirebase] = useState({});
  const [userCreateDetails, setUserCreateDetails] =
    useState(defaultFormFields);

  const clearFormFields = (type) => {
    if (type === 'signUp') {
      setUserCreateDetails(defaultFormFields);
    }
  };

  const value = {
    userDetails,
    setUserDetails,
    userCreateDetails,
    setUserCreateDetails,
    clearFormFields,
    userFirebase,
    setUserFirebase,
  };
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
