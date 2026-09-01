<template>
  <div class="content-box top90px">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <div class="sh-m text-center mb20">
            Forgot Password
          </div>
          <p class="m text-center mb60">
            we will send you an email to reset your password
          </p>
          <div class="row">
            <div class="col-sm-8 offset-sm-2">
              <form @submit.prevent="processForgot">
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

                <div class="row m-3 text-center" v-if="errorRequest">
                  <div class="col-12">
                    <div class="invalid-feedback" style="display: block">
                      {{ errorRequest }}
                    </div>
                  </div>
                </div>

                <button type="submit" class="btn btn-solid btn-block mb15">
                  Forgot Password
                </button>
                <p class="s text-center">
                  Already have an account?
                  <router-link to="/sign-in" class="bold-link">
                    Sign in
                  </router-link>
                </p>
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
                  Request Forgot Password Success
                </div>
                <p class="s mb40">
                  Please check your inbox to get link reset password.
                </p>
                <div class="row">
                  <div class="col-sm-12">
                    <router-link
                      to="/sign-in"
                      class="btn btn-solid btn-block btn-mm"
                    >
                      OK
                    </router-link>
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

export default {
  name: "ForgotPassword",
  metaInfo: {
    title: "Forgot Password"
  },
  data() {
    return {
      form: {
        email: null
      },
      error: {
        email: false
      },
      errorRequest: null,
      successRequest: false
    };
  },
  methods: {
    processForgot() {
      this.error.email =
        this.form.email === null || this.form.email == "" ? true : false;

      if (!this.error.email) {
        const loader = this.$loading.show({
          container: null,
          lockScroll: true,
          opacity: 1
        });
        let param = new FormData();
        param.append("email", this.form.email);
        axios
          .post(
            `${process.env.VUE_APP_BASE_URL_API}/auth/forgot-password`,
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
