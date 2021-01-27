import Vue from 'vue';
import './plugins/axios';
import ElementUI from 'element-ui';
import App from './App.vue';
import store from './store';
import router from './router';

Vue.use(ElementUI, {
  size: 'mini',
});

Vue.config.productionTip = false;
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
