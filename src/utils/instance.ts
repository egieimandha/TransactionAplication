import axios from 'axios';
import {CORE_API} from './secrets';

const baseURL = CORE_API;

const instance = axios.create({
  baseURL,
  timeout: 30000,
});

export const defaultHeaders = {
  'Cache-Control': 'no-cache',
  'Content-Type': 'application/json',
};

instance.defaults.headers.common = defaultHeaders;

export default instance;
