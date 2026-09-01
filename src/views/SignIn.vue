<template>
  <div class="content-box top90px">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <div class="sh-m text-center mb20">
            Sign in to an existing account
          </div>
          <p class="m text-center mb60">
            Sign in to access your existing account and <br />communicate with
            your doctor.
          </p>
          <div class="row">
            <div class="col-sm-8 offset-sm-2">
              <form @submit.prevent="processLogin">
                <div class="form-group mb40">
                  <div class="s font-medium mb12 grey">Email</div>
                  <input
                    type="email"
                    class="form-control main-form"
                    placeholder="Your registered email"
                    v-model="form.email"
                    :class="{ 'is-invalid': error.email }"
                  />
                  <div class="invalid-feedback" v-if="error.email">
                    Please insert your email address.
                  </div>
                </div>
                <div class="form-group mb40">
                  <div class="s font-medium mb12 grey">Password</div>
                  <input
                    type="password"
                    class="form-control main-form"
                    placeholder="Your password"
                    v-model="form.password"
                    :class="{ 'is-invalid': error.password }"
                  />
                  <div class="invalid-feedback" v-if="error.password">
                    Please insert your password.
                  </div>
                </div>

                <div class="row mb30">
                  <div class="col-6">
                    <div class="custom-control custom-checkbox mb12">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customCheck1"
                        v-model="form.remember"
                      />
                      <label
                        class="custom-control-label s lab-login"
                        for="customCheck1"
                        >Remember me</label
                      >
                    </div>
                  </div>
                  <div class="col-6">
                    <router-link to="/forgot-password" class="forget-pass fr">
                      Forgot password?
                    </router-link>
                  </div>
                </div>

                <div class="row m-3 text-center" v-if="errorRequest">
                  <div class="col-12">
                    <div class="invalid-feedback" style="display: block">
                      {{ errorRequest }}
                    </div>
                  </div>
                </div>

                <button type="submit" class="btn btn-solid btn-block mb15">
                  Sign in
                </button>
                <p class="s text-center">
                  Need to create a new account?
                  <router-link
                    to="/sign-up"
                    class="bold-link"
                    @click="trackEvent('Sign Up Initiated')"
                  >
                    Sign up
                  </router-link>
                </p>
              </form>
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

export default {
  name: "SignIn",
  metaInfo: {
    title: "Sign In"
  },
  data() {
    return {
      form: {
        email: null,
        password: null,
        remember: false
      },
      error: {
        email: false,
        password: false
      },
      errorRequest: null
    };
  },
  methods: {
    processLogin() {
      this.error.email =
        this.form.email === null || this.form.email == "" ? true : false;
      this.error.password =
        this.form.password === null || this.form.password == "" ? true : false;

      if (!this.error.email && !this.error.password) {
        const loader = this.$loading.show({
          container: null,
          lockScroll: true,
          opacity: 1
        });
        let param = new FormData();
        param.append("email", this.form.email);
        param.append("password", this.form.password);
        axios
          .post(`${process.env.VUE_APP_BASE_URL_API}/auth/login`, param)
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
    }
  }
};
</script>
