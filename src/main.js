import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./helpers/filter";
import "./helpers/mixin";

Vue.config.productionTip = false;
import "@/assets/app.scss";

import cookie from "js-cookie";
if (cookie.getJSON("userData") !== undefined) {
  let auth = cookie.getJSON("userData");
  store.commit("SET_USERDATA", auth);
}
if (cookie.getJSON("profile_woo") !== undefined) {
  let profile = cookie.getJSON("profile_woo");
  store.commit("SET_PROFILE_WOO", profile);
}

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

import AOS from "aos";
import "aos/dist/aos.css";

import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
Vue.use(Loading);

import VueSweetalert2 from "vue-sweetalert2";
Vue.use(VueSweetalert2);

import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
Vue.use(VueAwesomeSwiper /* { default global options } */);

import VueMeta from "vue-meta";
Vue.use(VueMeta);

import Moengage from "moengage";
Vue.prototype.$moengage = new Moengage({
  appID: process.env.VUE_APP_MOENGAGE_APP_ID,
  debugMode: process.env.VUE_APP_MOENGAGE_DEBUG,
  swPath: "/moengage-sw.js",
  enableSPA: true
});

// import firebase from "firebase/app";
// import "firebase/messaging";
// firebase.initializeApp({
//   apiKey: "AIzaSyCeWUoatfVaPC984kvUpEmFjZQDVz4uToA",
//   authDomain: "surface-skin-habit.firebaseapp.com",
//   projectId: "surface-skin-habit",
//   storageBucket: "surface-skin-habit.appspot.com",
//   messagingSenderId: "910146006379",
//   appId: "1:910146006379:web:71d0fde8088fff3a90302e",
//   measurementId: "G-2S2307GVJD"
// });

// navigator.serviceWorker
//   .register("firebase-messaging-sw.js")
//   .then(registration => {
//     const messaging = firebase.messaging();
//     messaging.useServiceWorker(registration);
//   })
//   .catch(err => {
//     console.log(err);
//   });

import VueFacebookPixel from "vue-facebook-pixel";
Vue.use(VueFacebookPixel, {
  debug: process.env.VUE_APP_FACEBOOK_PIXEL_DEBUG
});
Vue.analytics.fbq.init(process.env.VUE_APP_FACEBOOK_PIXEL);

import VueGtag from "vue-gtag";
Vue.use(
  VueGtag,
  {
    config: { id: process.env.VUE_APP_GOOGLE_ANALYTICS },
    appName: "SurfaceSkinHabit",
    pageTrackerScreenviewEnabled: true
  },
  router
);

import OneSignalVue from "onesignal-vue";
Vue.use(OneSignalVue);

new Vue({
  router,
  store,
  created() {
    AOS.init({
      easing: "ease-in-sine"
    });
  },
  beforeMount() {
    this.$OneSignal.init({ appId: process.env.VUE_APP_ONE_SIGNAL_APP_ID });
  },
  render: h => h(App)
}).$mount("#app");
