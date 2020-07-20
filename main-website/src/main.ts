import Vue from "vue";
import App from "./App.vue";
import "animate.css";
import VueObserveVisibility from "vue-observe-visibility";

//import Hotjar from "vue-hotjar";

//checks if we're in production
// const isProduction = process.env.NODE_ENV === "production" || false;

// Vue.use(Hotjar, {
//   id: "1908646",
//   isProduction: isProduction,
// });

Vue.use(VueObserveVisibility);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
