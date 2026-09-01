<template>
  <div class="content-box top90px">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <div class="sh-m text-center mb20">
            Reset Password
          </div>
          <p class="m text-center mb60">
            Please update your account password below.
          </p>
          <div class="row">
            <div class="col-sm-8 offset-sm-2">
              <form @submit.prevent="processReset">
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

                <div class="form-group mb40">
                  <div class="s font-medium mb12 grey">Confirm Password</div>
                  <input
                    type="password"
                    class="form-control main-form"
                    placeholder="Confirm password"
                    v-model="form.confirm_password"
                    :class="{ 'is-invalid': error.confirm_password }"
                  />
                  <div class="invalid-feedback" v-if="error.confirm_password">
                    Please insert your confirm password.
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
                  Reset Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        class="popup-content-overlay green-bg"
        :class="{ 'overlay-show': successRequest }"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-6 offset-lg-3">
              <div class="box-popup">
                <div class="l mb15">
                  Reset Password Successful!
                </div>
                <p class="s mb40">
                  Please sign in to the Surface mobile app using your new
                  password
                </p>
                <div class="row">
                  <div class="col-sm-12">
                    <template v-if="isMobileBrowser">
                      <a
                        class="btn btn-solid btn-block btn-mm"
                        href="surface://open-app"
                        >OK</a
                      >
                    </template>
                    <template v-else>
                      <router-link
                        to="/home"
                        class="btn btn-solid btn-block btn-mm"
                      >
                        OK
                      </router-link>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import MobileDetect from "mobile-detect";

export default {
  name: "ResetPassword",
  metaInfo: {
    title: "Reset Password"
  },
  data() {
    return {
      form: {
        password: null,
        confirm_password: null
      },
      error: {
        password: false,
        confirm_password: false
      },
      errorRequest: null,
      successRequest: false
    };
  },
  computed: {
    isMobileBrowser() {
      const md = new MobileDetect(window.navigator.userAgent);
      if (md.mobile()) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    processReset() {
      this.error.password =
        this.form.password === null || this.form.password == "" ? true : false;

      this.error.confirm_password =
        this.form.confirm_password === null || this.form.confirm_password == ""
          ? true
          : false;

      if (!this.error.password && !this.error.confirm_password) {
        const loader = this.$loading.show({
          container: null,
          lockScroll: true,
          opacity: 1
        });
        let param = new FormData();
        param.append("password", this.form.password);
        param.append("confirmPassword", this.form.confirm_password);
        axios
          .post(
            `${process.env.VUE_APP_BASE_URL_API}/auth/reset-password/${this.$route.params.token}`,
            param
          )
          .then(response => {
            console.log(response.data);
            this.successRequest = true;
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
    }
  }
};
</script>
