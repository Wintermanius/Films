import axios, { AxiosResponse, AxiosError } from 'axios';
import {StatusCodes} from 'http-status-codes';
import {toast} from 'react-toastify';
import {getToken} from './token';

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

const BACKEND_URL = 'https://11.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

const $axios = axios.create({
  baseURL: BACKEND_URL,
  timeout: REQUEST_TIMEOUT,
});

$axios.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token && config.headers) {
      config.headers['x-token'] = token;
    }

    return config;
  },
);

$axios.interceptors.response.use(
  (response) => response,
  (error: AxiosError<{error: string}>) => {
    if (error.response && shouldDisplayError(error.response)) {
      toast.warn(error.response.data.error);
    }

    throw error;
  }
);

export default $axios;
