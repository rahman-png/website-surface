<template>
  <div id="sign-up-page">
    <div id="m-mobile" class="container m-su top90px">
      <div class="row">
        <div class="col-lg-6 col-sm-6">
          <div class="mw500 f100">
            <div class="headingm mb60">Sign up</div>
            <div class="s grey">Step {{ step }} / 3</div>
            <div class="sh-xs mb40" v-if="step == 1">
              Tell us about yourself
            </div>
            <div class="sh-xs mb40" v-else-if="step == 2">
              Where can we reach you?
            </div>
            <div class="sh-xs mb40" v-else>
              Let’s make your account secure
            </div>
            <form id="form-sign-up">
              <template v-if="step == 1">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="box260 f100">
                      <div class="form-group mb40">
                        <div class="s font-medium mb12 grey">First name</div>
                        <input
                          type="text"
                          class="form-control main-form"
                          placeholder="Your first name"
                          v-model="form.firstName"
                          :class="{ 'is-invalid': error.firstName }"
                        />
                        <div class="invalid-feedback" v-if="error.firstName">
                          Please insert your first name.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="box260 f100">
                      <div class="form-group mb40">
                        <div class="s font-medium mb12 grey">Last name</div>
                        <input
                          type="text"
                          class="form-control main-form"
                          placeholder="Your last name"
                          v-model="form.lastName"
                          :class="{ 'is-invalid': error.lastName }"
                        />
                        <div class="invalid-feedback" v-if="error.lastName">
                          Please insert your last name.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="form-group mb40">
                  <div class="s font-medium mb12 grey">Gender</div>
                  <div
                    class="custom-control custom-radio custom-control-inline"
                  >
                    <input
                      type="radio"
                      id="customRadioInline1"
                      name="customRadioInline1"
                      class="custom-control-input"
                      value="male"
                      v-model="form.gender"
                    />
                    <label class="custom-control-label" for="customRadioInline1"
                      >Male</label
                    >
                  </div>
                  <div
                    class="custom-control custom-radio custom-control-inline"
                  >
                    <input
                      type="radio"
                      id="customRadioInline2"
                      name="customRadioInline1"
                      class="custom-control-input"
                      value="female"
                      v-model="form.gender"
                    />
                    <label class="custom-control-label" for="customRadioInline2"
                      >Female</label
                    >
                  </div>
                  <div
                    class="custom-control custom-radio custom-control-inline"
                  >
                    <input
                      type="radio"
                      id="customRadioInline3"
                      name="customRadioInline1"
                      class="custom-control-input"
                      value="other"
                      v-model="form.gender"
                    />
                    <label class="custom-control-label" for="customRadioInline3"
                      >Other</label
                    >
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-6">
                    <div class="box260 f100">
                      <div class="form-group mb40">
                        <div class="s font-medium mb12 grey">Date of birth</div>
                        <input
                          type="date"
                          class="form-control main-form"
                          placeholder="DD / MM / YYYY"
                          :max="futureDate"
                          v-model="form.birthDate"
                          :class="{ 'is-invalid': error.birthDate }"
                        />
                        <div class="invalid-feedback" v-if="error.birthDate">
                          Please insert valid birth day.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row mb25">
                  <div class="col-7">
                    <button
                      type="button"
                      @click="nextStep(2)"
                      class="btn btn-solid btn-block"
                    >
                      Next step
                      <img src="/img/arrow.svg" class="arrow-link white" />
                    </button>
                  </div>
                </div>
              </template>
              <template v-else-if="step == 2">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-group mb40">
                      <div class="s font-medium mb12 grey">Email address</div>
                      <input
                        type="text"
                        class="form-control main-form"
                        placeholder="Your email"
                        v-model="form.email"
                        :class="{ 'is-invalid': error.email }"
                      />
                      <div class="invalid-feedback" v-if="error.email">
                        Please insert your valid email address.
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-12">
                    <div class="form-group mb40">
                      <div class="s font-medium mb12 grey">Phone</div>
                      <input
                        type="number"
                        step="1"
                        min="0"
                        class="form-control main-form"
                        placeholder="Your phone number"
                        v-model="form.phone"
                        :class="{ 'is-invalid': error.phone }"
                      />
                      <div class="invalid-feedback" v-if="error.phone">
                        Please insert your phone number.
                      </div>
                    </div>
                  </div>
                </div>

                <div class="custom-control custom-checkbox mb80">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="customCheck1"
                    v-model="form.subscribe"
                  />
                  <label
                    class="custom-control-label s lab-login"
                    for="customCheck1"
                    >Keep me informed about products and offers</label
                  >
                </div>

                <div class="row mb25">
                  <div class="col-6">
                    <button
                      type="button"
                      @click="step = 1"
                      class="btn btn-solid btn-block"
                    >
                      <img
                        src="/img/arrow.svg"
                        class="arrow-link white rotate180 mr-2"
                      />
                      Previous step
                    </button>
                  </div>
                  <div class="col-6">
                    <button
                      type="button"
                      @click="nextStep(3)"
                      class="btn btn-solid btn-block"
                    >
                      Next step
                      <img src="/img/arrow.svg" class="arrow-link white" />
                    </button>
                  </div>
                </div>
              </template>
              <template v-else>
                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-group mb40">
                      <div class="s font-medium mb12 grey">New password</div>
                      <input
                        type="password"
                        class="form-control main-form"
                        placeholder="Your password"
                        v-model="form.password"
                        :class="{
                          'is-invalid':
                            error.password ||
                            error.confirmPassword ||
                            error.passwordLength
                        }"
                      />
                      <div class="invalid-feedback" v-if="error.password">
                        Please insert your password.
                      </div>
                      <div class="invalid-feedback" v-if="error.passwordLength">
                        Password Min 8 Character.
                      </div>
                      <div
                        class="invalid-feedback"
                        v-if="error.confirmPassword"
                      >
                        Your password not match with confirm password.
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-12">
                    <div class="form-group mb40">
                      <div class="s font-medium mb12 grey">
                        Confirm password
                      </div>
                      <input
                        type="password"
                        class="form-control main-form"
                        placeholder="Confirm password"
                        v-model="form.confirmPassword"
                      />
                    </div>
                  </div>
                </div>

                <div class="custom-control custom-checkbox mb80">
                  <input
                    id="customCheck1"
                    type="checkbox"
                    class="custom-control-input"
                    v-model="acceptTnC"
                  />
                  <label
                    class="custom-control-label s lab-login"
                    for="customCheck1"
                    >I accept the terms and conditions</label
                  >
                </div>

                <div class="row mb20" v-if="errorRequest">
                  <div class="col-12">
                    <p class="text-danger text-center">{{ errorRequest }}</p>
                  </div>
                </div>

                <div class="row mb80">
                  <div class="col-6">
                    <button
                      type="button"
                      @click="step = 2"
                      class="btn btn-solid btn-block"
                    >
                      <img
                        src="/img/arrow.svg"
                        class="arrow-link white rotate180 mr-2"
                      />
                      Previous step
                    </button>
                  </div>
                  <div class="col-6">
                    <button
                      type="button"
                      @click="nextStep(4)"
                      class="btn btn-solid btn-block"
                      :disabled="!acceptTnC"
                    >
                      Sign up
                    </button>
                  </div>
                </div>
              </template>

              <p class="s mb40">
                Already have an account?
                <router-link to="/sign-in" class="bold-link">
                  Sign in
                </router-link>
              </p>

              <p class="s btn-mm">
                Read more about
                <router-link to="/privacy-policy" class="link-blue">
                  Privacy
                </router-link>
                and
                <router-link to="/term-of-service" class="link-blue">
                  Terms & conditions
                </router-link>
              </p>
            </form>
          </div>
        </div>
        <div class="col-lg-6 col-sm-6">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/img/Sign-Up.jpeg" class="d-block w-100" alt="..." />
              </div>
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
                  Sign Up Success
                </div>
                <p class="s mb40">
                  Please check your inbox to activate your account before you
                  sign in.
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

      <div
        class="popup-content-overlay green-bg"
        :class="{ 'overlay-show': toForgotPassword }"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-6 offset-lg-3">
              <div class="box-popup">
                <div class="l mb15">Hai {{ form.firstName }}!</div>
                <p class="s mb40">
                  Because you are an existing Surface customer, we have
                  automatically created an account for you. Please click here to
                  set your password.
                </p>
                <div class="row">
                  <div class="col-sm-12">
                    <router-link
                      to="/forgot-password"
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

      <div
        class="popup-content-overlay green-bg"
        :class="{ 'overlay-show': toLoginPage }"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-6 offset-lg-3">
              <div class="box-popup">
                <div class="l mb15">Hai {{ form.firstName }}!</div>
                <p class="s mb40">
                  Looks like you already have an account with us! Please go to
                  login page or to forgot password page to set your password
                </p>
                <div class="row">
                  <div class="col-sm-6">
                    <router-link
                      to="/sign-in"
                      class="btn btn-solid btn-block btn-mm"
                    >
                      Login
                    </router-link>
                  </div>
                  <div class="col-sm-6">
                    <router-link
                      to="/forgot-password"
                      class="btn btn-solid btn-block btn-mm"
                    >
                      Forgot Password
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
import moment from "moment";

export default {
  name: "SignUp",
  metaInfo: {
    title: "Sign Up"
  },
  data() {
    return {
      step: 1,
      form: {
        firstName: null,
        lastName: null,
        gender: "male",
        birthDate: null,
        email: null,
        phone: null,
        subscribe: false,
        password: null,
        confirmPassword: null
      },
      error: {
        firstName: false,
        lastName: false,
        birthDate: false,
        email: false,
        phone: false,
        password: false,
        confirmPassword: false,
        passwordLength: false
      },
      acceptTnC: false,
      successRequest: false,
      errorRequest: null,
      toForgotPassword: false,
      toLoginPage: false
    };
  },
  mounted() {
    this.trackEvent("Sign Up Initiated", {
      timestamp: moment()
        .format("DD MMMM YYYY H:mm:ss")
        .toString()
    });
    // mixpanel tracking
    this.trackMixPanelEvent("Sign Up Initiated", {
      source: "web",
      timestamp: moment()
        .format("DD MMMM YYYY H:mm:ss")
        .toString(),
      user_id: this.uniqueId
    });
  },
  computed: {
    futureDate() {
      return moment().format("YYYY-MM-DD");
    },
    uniqueId() {
      return moment().unix();
    }
  },
  methods: {
    async nextStep(step) {
      switch (step) {
        case 2:
          this.error.firstName =
            this.form.firstName === null || this.form.firstName == ""
              ? true
              : false;
          this.error.lastName =
            this.form.lastName === null || this.form.lastName == ""
              ? true
              : false;
          this.error.birthDate =
            this.form.birthDate === null || this.form.birthDate == ""
              ? true
              : false;

          if (!this.error.birthDate) {
            this.error.birthDate = moment(this.form.birthDate).isAfter(
              this.futureDate,
              "YYYY-MM-DD"
            )
              ? true
              : false;
          }

          if (
            !this.error.firstName &&
            !this.error.lastName &&
            !this.error.birthDate
          ) {
            this.step = 2;
            this.trackEvent("Sign Up Enter Name", {
              timestamp: moment()
                .format("DD MMMM YYYY H:mm:ss")
                .toString()
            });
            // mixpanel tracking
            this.trackMixPanelEvent("Sign Up Enter Name", {
              source: "web",
              timestamp: moment()
                .format("DD MMMM YYYY H:mm:ss")
                .toString(),
              user_id: this.uniqueId
            });
            this.trackMixPanelEvent("Sign Up Birthday", {
              source: "web",
              timestamp: moment()
                .format("DD MMMM YYYY H:mm:ss")
                .toString(),
              user_id: this.uniqueId
            });
            this.trackMixPanelEvent("Sign Up Gender", {
              source: "web",
              timestamp: moment()
                .format("DD MMMM YYYY H:mm:ss")
                .toString(),
              user_id: this.uniqueId
            });
          }
          break;
        case 3:
          this.error.email =
            this.form.email === null || this.form.email == "" ? true : false;
          this.error.phone =
            this.form.phone === null || this.form.phone == "" ? true : false;

          this.error.email = this.form.email.match(
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
          )
            ? false
            : true;

          if (!this.error.email && !this.error.phone) {
            const check = await this.checkEmailAccount();
            if (check == 1) {
              // lanjutkan proses registrasi
              this.step = 3;
              this.trackEvent("Sign Up Contact Info", {
                timestamp: moment().format("DD MMMM YYYY H:mm:ss")
              });
              this.trackMixPanelEvent("Sign Up Enter Email", {
                source: "web",
                timestamp: moment()
                  .format("DD MMMM YYYY H:mm:ss")
                  .toString(),
                user_id: this.uniqueId
              });
            } else if (check == 2) {
              // show popup untuk ke login page
              this.toLoginPage = true;
            } else {
              // show popup untuk ke forgot password
              this.toForgotPassword = true;
            }
          }
          break;
        case 4:
          this.error.password =
            this.form.password === null || this.form.password == ""
              ? true
              : false;
          this.error.confirmPassword =
            this.form.confirmPassword !== this.form.password ? true : false;
          this.error.passwordLength =
            this.form.password.length < 8 ? true : false;

          if (
            !this.error.password &&
            !this.error.confirmPassword &&
            !this.error.passwordLength
          ) {
            this.trackEvent("Sign Up Enter Password", {
              timestamp: moment().format("DD MMMM YYYY H:mm:ss")
            });
            this.trackMixPanelEvent("Sign Up Password", {
              source: "web",
              timestamp: moment()
                .format("DD MMMM YYYY H:mm:ss")
                .toString(),
              user_id: this.uniqueId
            });
            this.signUp();
          }
          break;
        default:
          break;
      }
    },
    signUp() {
      const loader = this.$loading.show({
        container: null,
        lockScroll: true,
        opacity: 1
      });
      let param = new FormData();
      param.append("firstname", this.form.firstName);
      param.append("lastname", this.form.lastName);
      param.append("email", this.form.email);
      param.append("phone", this.form.phone);
      param.append("password", this.form.password);
      param.append("gender", this.form.gender);
      param.append("birthDate", this.form.birthDate);
      param.append("register_from", "web");
      axios
        .post(`${process.env.VUE_APP_BASE_URL_API}/auth/register`, param)
        .then(response => {
          console.log(response.data);
          this.successRequest = true;
          this.trackEvent("Account Created", {
            timestamp: moment().format("DD MMMM YYYY H:mm:ss")
          });
          this.trackFacebookPixelEvent("CompleteRegistration", {
            content_category: "sign_up",
            status: true,
            firtname: this.form.firtName,
            lastname: this.form.lastName,
            email: this.form.email,
            phone: this.form.phone,
            gender: this.form.gender,
            birth_date: this.form.birthDate
          });
          this.trackMixPanelEvent("Account Created", {
            source: "web",
            timestamp: moment()
              .format("DD MMMM YYYY H:mm:ss")
              .toString(),
            user_id: this.uniqueId
          });
        })
        .catch(error => {
          if (error.response !== undefined) {
            this.errorRequest = error.response.data.message;
          } else {
            this.errorRequest = "please try again later";
          }
        })
        .then(() => {
          loader.hide();
        });
    },
    async checkEmailAccount() {
      const loader = this.$loading.show({
        container: null,
        lockScroll: true,
        opacity: 1
      });
      let param = new FormData();
      param.append("email", this.form.email);
      return axios
        .post(`${process.env.VUE_APP_BASE_URL_API}/auth/check-email`, param)
        .then(response => {
          loader.hide();
          const result = response.data.result;
          if (result.status == "verified") {
            // user sudah ada dan password sudah di set, redirect ke login
            return 2;
          } else {
            // user sudah ada tapi password belum di set, redirect ke forgot password
            return 3;
          }
        })
        .catch(() => {
          loader.hide();
          // lanjutkan registrasi
          return 1;
        });
    }
  }
};
</script>
