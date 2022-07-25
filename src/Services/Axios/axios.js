import axios from 'axios';
import {ContentType} from '../../Enums/enums';
import {
  requestHandler,
  successResponseHandler,
  errorResponseHandler,
} from './interceptors';

export const getAxiosInstance = (
  config = {
    headers: {contentType: ContentType.json},
  },
) => {
  const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {
      'Content-Type': config.headers.contentType || ContentType.json,
    },
  });

  instance.interceptors.request.use(requestHandler);
  instance.interceptors.response.use(
    successResponseHandler,
    errorResponseHandler,
  );

  return instance;
};

export default getAxiosInstance();
