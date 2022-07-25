export const defaultAuthContext = {
  isAuthenticated: false,
  authenticateUser: token => {},
  logoutUser: () => {},
  checkAuthentication: () => false,
};
