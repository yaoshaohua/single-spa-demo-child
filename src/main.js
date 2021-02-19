import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import singleSpaVue from "single-spa-vue";

Vue.config.productionTip = false;

// 替换 new Vue
const options = {
  el: "#vue", //挂载到父应用id为vue的标签中
  render: h => h(App),
  router
};

// vueLifeCycle 返回生命周期
const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: options
});

// 协议接入 父应用会调用这些方法
export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
export default vueLifecycles;
