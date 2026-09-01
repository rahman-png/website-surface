import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: null,
    showCartRightBar: false,
    modalDownloadApp: false,
    recentProduct: null,
    profileWooCommerce: null
  },
  mutations: {
    SET_USERDATA(state, payload) {
      state.userData = payload;
    },
    SET_PROFILE_WOO(state, payload) {
      state.profileWooCommerce = payload;
    },
    SHOW_CART(state, payload) {
      state.showCartRightBar = payload;
    },
    SHOW_MODAL_DOWNLOAD(state, show) {
      state.modalDownloadApp = show;
    },
    SET_RECENT_PRODUCT(state, productId) {
      state.recentProduct = productId;
    }
  },
  getters: {
    wooCommereceToken(state) {
      return state.userData && state.userData.wooCommerece
        ? state.userData.wooCommerece.token
        : null;
    },
    surfaceToken(state) {
      return state.userData ? state.userData.token : null;
    }
  },
  actions: {},
  modules: {}
});
