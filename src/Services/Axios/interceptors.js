import {TOKEN, AUTH_TOKEN_HEADER} from '../../Constants/constants';

export const requestHandler = request => {
  // const token = localStorage.getItem(TOKEN) || sessionStorage.getItem(TOKEN);
  // if (token) request.headers[AUTH_TOKEN_HEADER] = `${token}`;
  return request;
};

export const successResponseHandler = response => {
  return {
    ...response,
    data: response.data,
  };
};

export const errorResponseHandler = error => {
  // window.location.assign(window.location.origin + '/error')
  return Promise.reject(error);
};
