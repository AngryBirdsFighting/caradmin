import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store/";
import iView from 'iview';
import { Tree } from 'element-ui';
import "iview/dist/styles/iview.css";
import 'element-ui/lib/theme-chalk/index.css'
import 'babel-polyfill';
require('es6-promise').polyfill();
import 'fetch-detector';
import 'fetch-ie8';

Vue.component("eTree", Tree);

Vue.directive('has', {
  bind (el, binding, vnode) {
      // let name = vnode.context.$route.name;
      // let name = vnode.context.$route.name;
      debugger
      let rules = vnode.context.$route.meta.rules
      if (!rules.includes(binding.value)) {
          el.parentNode.removeChild(el);
      }
  }
});
Vue.config.productionTip = false;
Vue.use(iView)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
