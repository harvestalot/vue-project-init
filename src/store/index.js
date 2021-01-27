import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    iframeMap: {},
    roles: [],
  },
  mutations: {
    setState(state, payload = {}) {
      Object.keys(payload).forEach((key) => {
        Vue.set(state, key, payload[key]);
      });
    },
  },
  actions: {},
  modules: {},
});
