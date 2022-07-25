import React, {useContext, useState} from 'react';
import {AuthContext, AuthProvider} from './authContext';
import {TOKEN} from '../../Constants/constants';
import LocalStorage from '../../Services/LocalStorage/localStorage';

const AuthContextContainer = ({children}) => {
  const defaultAuthState = {
    isAuthenticated: false,
    token: '',
  };
  const [state, setState] = useState(defaultAuthState);
  const authenticateUser = token => {
    LocalStorage.SetItem(TOKEN, token);

    setState(prev => {
      return {
        ...prev,
        isAuthenticated: true,
        token: token,
      };
    });
  };

  const logoutUser = () => {
    LocalStorage.RemoveItem(TOKEN);

    setState(prev => {
      return {
        ...prev,
        isAuthenticated: false,
      };
    });
  };
  const checkAuthentication = () => {
    return !!LocalStorage.GetItem(TOKEN);
    // return true;
  };
  return (
    <AuthProvider
      value={{
        isAuthenticated: state.isAuthenticated,
        authenticateUser,
        logoutUser,
        checkAuthentication,
      }}>
      {children}
    </AuthProvider>
  );
};
export default AuthContextContainer;

export const useAuthContext = () => {
  return useContext(AuthContext);
};
