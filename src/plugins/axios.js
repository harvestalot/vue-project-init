/* eslint-disable */
import Vue from 'vue';
import axios from 'axios';
import { Message } from 'element-ui';

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';

const baseConfig = {
  baseURL: '/api',
  timeout: 60 * 1000,
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(baseConfig);

_axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor
_axios.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response.data;
    }
    return response;
  },
  (error) => {
    Message.error(error.response);
    return Promise.reject(error);
  }
);
_axios.upload = (url, data) => {
  const form = new FormData();
  Object.keys(data).forEach((val) => {
    form.append(val, data[val]);
  });
  return _axios.post(url, form, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
// eslint-disable-next-line no-unused-vars
Plugin.install = function axiosFunc(vue, options) {
  vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(vue.prototype, {
    axios: {
      get() {
        return _axios;
      },
    },
    $axios: {
      get() {
        return _axios;
      },
    },
  });
};
Vue.use(Plugin);
export default Plugin;
