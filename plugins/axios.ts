import { Plugin } from '@nuxt/types';

const axiosPlugin: Plugin = ({ $axios, store }) => {
  $axios.onRequest((config) => {
    if (store.state.auth && store.state.auth.user) {
      config.headers.Authorization = `Bearer ${store.state.auth.user.token}`;
    }
  });
};

export default axiosPlugin;
