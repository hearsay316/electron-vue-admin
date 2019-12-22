import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
/*
 * 从模块引包
 * */
Vue.config.productionTip = false; // 是不是开发模式

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
