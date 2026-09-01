<template>
  <div class="content-box top90px">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <div class="sh-m font-medium letter-spacing text-center mb12">
            Welcome to Surface
          </div>
          <p class="grey m text-center mb80">
            Stay connected to your skin anytime, anywhere
          </p>

          <div class="row">
            <div class="col-lg-8 offset-lg-2">
              <router-link to="/sign-up" class="btn btn-solid btn-block mb25">
                Sign up with email
              </router-link>
              <button
                type="button"
                v-google-signin-button="google_client_id"
                class="btn btn-google btn-block mb25"
              >
                <span class="google-icon">
                  <img src="/img/google.png" class="img-fluid" />
                </span>
                <span>Sign up with email </span>
              </button>
              <router-link to="/sign-in" class="btn btn-grey btn-block mb25">
                Sign In to an existing account
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookie from "js-cookie";
import GoogleSignInButton from "vue-google-signin-button-directive";

export default {
  name: "Auth",
  metaInfo: {
    title: "Auth"
  },
  directives: {
    GoogleSignInButton
  },
  methods: {
    OnGoogleAuthSuccess(idToken) {
      const loader = this.$loading.show({
        container: null,
        lockScroll: true,
        opacity: 1
      });
      // Receive the idToken and make your magic with the backend
      let param = new FormData();
      param.append("token", idToken);
      param.append("register_from", "web");
      axios
        .post(`${process.env.VUE_APP_BASE_URL_API}/auth/sign-up/google`, param)
        .then(response => {
          const result = response.data.result;
          this.setUserLogin(result);
        })
        .catch(error => {
          console.log(error);
          if (error.response !== undefined) {
            this.errorRequest = error.response.data.message;
          }
        })
        .then(() => {
          loader.hide();
        });
    },
    OnGoogleAuthFail(error) {
      console.log(error);
      this.errorRequest = "failed authenticate to google";
    },
    setUserLogin(result) {
      // save data to vuex
      this.$store.commit("SET_USERDATA", result);
      // save data to cookie
      cookie.set("userData", result, { expires: 1 });
      // login moengage
      this.$moengage.createUniqueUser(result.userId);
      // moengage track user attribute
      this.setMoengageAttribute();
      // get history survey
      this.getProfileAccountWoo();
      // set mixpanel user property
      this.identifyMixpanelUser(result);
      // redirect after login
      if (this.$store.state.recentProduct) {
        this.$router.push(`/product/${this.$store.state.recentProduct}`);
        this.$store.commit("SET_RECENT_PRODUCT", null);
      } else {
        this.$router.push("/account");
      }
    },
    getProfileAccountWoo() {
      if (this.$store.getters.wooCommereceToken !== null) {
        axios
          .get(
            `${process.env.VUE_APP_BASE_URL_API_CONTENT}/wp-json/surface/v1/account/profile`,
            {
              headers: {
                Authorization: `Bearer ${this.$store.getters.wooCommereceToken}`
              }
            }
          )
          .then(response => {
            if (response.data.status == "ok") {
              // save data to vuex
              this.$store.commit("SET_PROFILE_WOO", response.data.data);
              // save data to cookie
              cookie.set("profile_woo", response.data.data, { expires: 1 });
            }
          })
          .catch(() => {
            console.log("error get survey");
          });
      }
    }
  }
};
</script>
