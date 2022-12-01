import axios from 'axios';
import {baseURL} from './config'

export const customAxios = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  // headers: {'X-Custom-Header': 'foobar'}
});