import React from 'react';
import {defaultAuthContext} from './authInterface';

export const AuthContext = React.createContext(defaultAuthContext);
export const AuthProvider = AuthContext.Provider;
export const AuthConsumer = AuthContext.Consumer;
