import axios from 'axios';

import config from '../config';

/**
 * HTTP Utility
 */
const http = axios.create({
  baseURL: config.backendAPI.baseURI,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default http;
