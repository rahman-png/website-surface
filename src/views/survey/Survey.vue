<template>
  <div id="survey-page">
    <product-menu></product-menu>
    <cart-right-bar></cart-right-bar>
    <div class="content-box cm" v-show="!finish">
      <div class="container">
        <div class="row">
          <template v-if="step == 0">
            <div class="col-lg-6 offset-lg-3">
              <div class="headingm mb15">{{ title }}</div>
              <p class="m mb30 grey" v-html="intro"></p>
              <div class="row mb40">
                <div class="col-5 col-sm-3">
                  <p class="s grey font-medium">Date</p>
                  <p class="s">{{ today }}</p>
                </div>
                <div class="col-7 col-sm-5">
                  <p class="s grey font-medium">Doctor</p>
                  <p class="s">Dr. Amanda Rahmania</p>
                </div>
              </div>

              <form @submit.prevent="startSurvey">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="box260 f100">
                      <div class="form-group mb40">
                        <div class="s font-medium mb12 grey">First name</div>
                        <input
                          type="text"
                          class="form-control main-form"
                          placeholder="Your first name"
                          v-model="firstname"
                          required
                        />
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
                          v-model="lastname"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="custom-control custom-checkbox mb12">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="customCheck1"
                    checked
                    required
                  />
                  <label
                    class="custom-control-label s lab-login"
                    for="customCheck1"
                  >
                    I will answer the questions accordingly
                  </label>
                </div>

                <div class="custom-control custom-checkbox mb30">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="customCheck2"
                    checked
                    required
                  />
                  <label
                    class="custom-control-label s lab-login"
                    for="customCheck2"
                  >
                    I am aware and understand the treatment recommendation of
                    this service
                  </label>
                </div>

                <p class="s mb60">
                  Read more about
                  <router-link to="/privacy-policy" class="link-blue">
                    Privacy
                  </router-link>
                  and
                  <router-link to="/term-of-service" class="link-blue">
                    Terms & conditions
                  </router-link>
                </p>

                <div class="row">
                  <div class="col-sm-4">
                    <input
                      type="reset"
                      class="btn btn-grey btn-block btn-mm"
                      value="Cancel"
                      @click="
                        $router.push(`/product/${$route.params.productId}`)
                      "
                    />
                  </div>
                  <div class="col-sm-5">
                    <button type="submit" class="btn btn-solid btn-block">
                      Start visit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </template>
          <template v-else>
            <template v-if="step < survey.length + 1">
              <template v-for="(q, index) in survey">
                <div
                  class="col-lg-8 offset-lg-2"
                  :key="index"
                  v-show="step == index + 1"
                >
                  <div class="step-info">
                    <div class="m mb15 grey">
                      {{ index + 1 }} / {{ survey.length }}
                    </div>
                    <button
                      @click="showExitPopUp = true"
                      class="btn btn-step-close"
                    >
                      <img src="/img/x.svg" class="x-step" />
                    </button>
                  </div>

                  <div class="sh-s mb60">{{ q.question }}</div>
                  <form>
                    <template v-if="q.type == 'single_choice'">
                      <div
                        class="acne-choose"
                        :style="{ display: displayClass(q.answer) }"
                      >
                        <template v-for="(ans, zindex) in q.answer">
                          <template v-if="ans.img != ''">
                            <div
                              class="mr-4"
                              :key="zindex"
                              @click="
                                check(
                                  `choise_${zindex}`,
                                  `img-choise`,
                                  ans,
                                  q.question
                                )
                              "
                            >
                              <input
                                type="radio"
                                name="acne"
                                :id="`choise_${zindex}`"
                                class="input-hidden img-choise"
                              />
                              <label for="acne-1">
                                <img :src="ans.img" alt="" />
                              </label>
                              <p class="m grey">{{ ans.label }}</p>
                            </div>
                          </template>
                          <template v-else>
                            <div
                              class="custom-control custom-radio mb20"
                              :key="zindex"
                              @click="
                                setRadio(
                                  ans,
                                  q.question,
                                  'choise_question_' + index + '_' + zindex
                                )
                              "
                            >
                              <input
                                type="radio"
                                :id="'choise_question_' + index + '_' + zindex"
                                :name="'choise_question_' + index"
                                class="custom-control-input"
                              />
                              <label
                                class="custom-control-label"
                                for="customRadioInline1"
                                >{{ ans.label }}</label
                              >
                            </div>
                          </template>
                        </template>
                      </div>
                    </template>
                    <template v-else>
                      <template v-for="(ans, zindex) in q.answer">
                        <div
                          class="custom-control custom-checkbox mb12"
                          :key="zindex"
                          @click="
                            setChecked(
                              ans,
                              q.question,
                              'choise_question_' + index + '_' + zindex
                            )
                          "
                        >
                          <input
                            :name="'choise_question_' + index"
                            type="checkbox"
                            class="custom-control-input"
                            :id="'choise_question_' + index + '_' + zindex"
                          />
                          <label class="custom-control-label m lab-login">
                            {{ ans.label }}
                          </label>
                        </div>
                      </template>
                    </template>

                    <div
                      class="xs d-flex align-items-center mb60 red"
                      v-if="q.error"
                    >
                      <img src="/img/i-icon.svg" class="red-filter mr-1" />
                      Please select an option to continue
                    </div>

                    <div class="row survey-btn">
                      <div class="col-sm-3">
                        <a
                          href="#"
                          @click="backStep(index + 1)"
                          class="btn btn-grey btn-block btn-mm"
                          >Back</a
                        >
                      </div>
                      <div class="col-sm-3">
                        <a
                          href="#"
                          @click="nextStep(index + 1, q)"
                          class="btn btn-solid btn-block"
                          >Next</a
                        >
                      </div>
                    </div>
                  </form>
                </div>
              </template>
            </template>
            <template v-else>
              <div class="col-lg-8 offset-lg-2">
                <div class="step-info">
                  <div class="headingm mb40">Online Visit</div>
                  <button
                    @click="showExitPopUp = true"
                    class="btn btn-step-close"
                  >
                    <img src="/img/x.svg" class="x-step" />
                  </button>
                </div>

                <div class="box-info mb30">
                  <div class="sh-xs mb15">
                    Important information before you proceed
                  </div>
                  <p>For skincare:</p>
                  <ul>
                    <li>
                      For best result, we recommend treating skin concerns
                      separately. Please purchase one Rx skincare product at a
                      time.
                    </li>
                    <li>
                      Side effects such as dryness, redness, peeling, or
                      breakouts may happen to a small percentage of patients
                      during first days of treatments.
                    </li>
                    <li>
                      Do not use if you are pregnant.
                    </li>
                    <li>
                      Do not take if you have any allergies to the ingredients.
                    </li>
                  </ul>
                  <p>For haircare:</p>
                  <ul>
                    <li>
                      Finasteride, the primary drug for hair loss has potential
                      risks. The most common are sexual side effects, but rare -
                      only in 1.2-1.4% of cases. I understand I can discuss this
                      with my doctor.
                    </li>
                  </ul>
                </div>

                <form>
                  <div class="custom-control custom-checkbox mb60">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="understand"
                      name="understand"
                      v-model="understand"
                    />
                    <label
                      class="custom-control-label m lab-login"
                      for="understand"
                      >Yes, I understand</label
                    >
                  </div>

                  <div class="row">
                    <div class="col-sm-3">
                      <a
                        href="#"
                        @click="backStep(1)"
                        class="btn btn-grey btn-block btn-mm"
                        >Back</a
                      >
                    </div>
                    <div class="col-sm-3">
                      <button
                        type="button"
                        @click="submitSurvey"
                        class="btn btn-solid btn-block"
                        :disabled="!understand"
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </template>
          </template>
        </div>
      </div>
    </div>
    <div class="content-box top150px" v-show="finish">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <div class="d-flex align-items-center justify-content-center">
              <div class="text-center">
                <img src="/img/woman-icon.svg" class="img-fluid mb30" />
                <div class="sh-xs font-medium mb8">
                  Your visit is now complete.
                </div>
                <p class="s grey mb40">
                  Based on your online visit, out doctor will prepare a
                  personalized product for you with the strength that is perfect
                  for your skin.
                </p>
                <template v-if="nextPage == '/checkout'">
                  <router-link to="/checkout" class="btn btn-solid">
                    Proceed to Checkout
                  </router-link>
                </template>
                <template v-else>
                  <router-link :to="nextPage" class="btn btn-solid">
                    Next prescriptions
                  </router-link>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="popup-content-overlay green-bg"
      :class="{ 'overlay-show': showExitPopUp }"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <div class="box-popup">
              <div class="l mb15">Are you sure you want to exit the visit?</div>
              <p class="s mb40"></p>
              <div class="row">
                <div class="col-sm-4">
                  <button
                    @click="showExitPopUp = false"
                    class="btn btn-grey btn-block btn-mm"
                  >
                    Cancel
                  </button>
                </div>
                <div class="col-sm-5">
                  <button @click="exitVisit" class="btn btn-solid btn-block">
                    Yes, exit
                  </button>
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
import * as moment from "moment";
import cookie from "js-cookie";
import ProductMenu from "@/components/ProductMenu.vue";
import CartRightBar from "@/components/CartRightBar.vue";

export default {
  name: "Survey",
  metaInfo: {
    title: "Visit"
  },
  components: {
    ProductMenu,
    CartRightBar
  },
  computed: {
    today() {
      return moment().format("DD / MM / YYYY");
    }
  },
  data() {
    return {
      finish: false,
      title: null,
      intro: null,
      info: null,
      survey: [],
      step: 0,
      showExitPopUp: false,
      understand: false,
      product: null,
      firstname: this.$store.state.userData.firstname,
      lastname: this.$store.state.userData.lastname,
      carts: [],
      prescriptions: [],
      nextPage: "/checkout"
    };
  },
  mounted() {
    this.getDetailSurvey();
    this.getDetailProduct();
    this.fetchCart();
  },
  methods: {
    getDetailSurvey() {
      let loader = this.$loading.show({
        container: null,
        lockScroll: true,
        opacity: 1
      });
      axios
        .get(
          `${process.env.VUE_APP_BASE_URL_API_CONTENT}/wp-json/surface/v1/survey/${this.$route.params.surveyId}`
        )
        .then(response => {
          console.log(response.data);
          if (response.data.status == "ok") {
            this.title = response.data.data.title;
            this.intro = response.data.data.intro;
            this.info = response.data.data.info;
            this.survey = response.data.data.survey.map(sur => ({
              ...sur,
              error: false,
              choised: null
            }));
          }
        })
        .then(() => {
          loader.hide();
        });
    },
    getDetailProduct() {
      if (this.$route.params.productId != 0) {
        axios
          .get(
            `${process.env.VUE_APP_BASE_URL_API_CONTENT}/wp-json/surface/v1/products/${this.$route.params.productId}`
          )
          .then(response => {
            this.product = response.data.product;
            this.trackEvent("Start Rx Survey", {
              timestamp: moment().format("DD MMMM YYYY H:mm:ss"),
              user_id: this.$store.state.userData.userId,
              name: this.product.title
            });
            // mixpanel tracking
            this.trackMixPanelEvent("Start Rx Survey", {
              source: "web",
              timestamp: moment().format("DD MMMM YYYY H:mm:ss"),
              user_id: this.$store.state.userData.userId,
              name: this.product.title
            });
          });
      }
    },
    startSurvey() {
      this.step = 1;
    },
    backStep(current) {
      if (current > 0) {
        this.step = current - 1;
      } else {
        this.step = 0;
      }
    },
    nextStep(current, question) {
      // save answer
      this.survey.forEach(item => {
        if (item.question == question.question) {
          if (question.mandatory === true && item.choised === null) {
            item.error = true;
          } else {
            item.error = false;
            this.step = current + 1;
          }
        }
      });
    },
    exitVisit() {
      this.showExitPopUp = false;
      this.$router.push(`/checkout`);
    },
    displayClass(listAnswer) {
      const img = listAnswer.find(a => a.img != "");
      return img ? "flex" : "block";
    },
    check(idElement, classElement, answer, question) {
      // uncheck
      var inputs = document.querySelectorAll(`.${classElement}`);
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].checked = false;
      }
      // check
      document.getElementById(`${idElement}`).checked = true;
      // save answer
      this.survey.forEach(item => {
        item.choised = item.question == question ? answer : null;
      });
    },
    setChecked(answer, question, idElement) {
      if (document.getElementById(`${idElement}`).checked) {
        this.survey.forEach(item => {
          if (item.question == question) {
            const checked = item.choised.filter(c => c.label != answer.label);
            item.choised = checked;
          }
        });
        document.getElementById(`${idElement}`).checked = false;
      } else {
        this.survey.forEach(item => {
          if (item.question == question) {
            if (item.choised === null) {
              item.choised = [answer];
            } else {
              item.choised.push(answer);
            }
          }
        });
        document.getElementById(`${idElement}`).checked = true;
      }
    },
    setRadio(answer, question, idElement) {
      this.survey.forEach(item => {
        if (item.question == question) {
          item.choised = answer;
        }
      });
      if (document.getElementById(`${idElement}`).checked) {
        document.getElementById(`${idElement}`).checked = false;
      } else {
        document.getElementById(`${idElement}`).checked = true;
      }
    },
    async submitSurvey() {
      let loader = this.$loading.show({
        container: null,
        lockScroll: true,
        opacity: 1
      });
      axios
        .post(
          `${process.env.VUE_APP_BASE_URL_API_CONTENT}/wp-json/surface/v1/survey/submit`,
          {
            product: this.$route.params.productId,
            survey: this.$route.params.surveyId,
            result: this.survey.map(item => {
              return {
                question: item.question,
                answer: item.choised
              };
            })
          },
          {
            headers: {
              Authorization: `Bearer ${this.$store.getters.wooCommereceToken}`
            }
          }
        )
        .then(async response => {
          console.log(response.data);
          if (response.data.status == "ok") {
            await this.getListPrescription();
            const masterSurvey = this.$store.state.profileWooCommerce
              .master_survey;
            if (typeof masterSurvey === "string") {
              await this.getProfileAccountWoo();
            }
            for (let index = 0; index < this.carts.length; index++) {
              const cart = this.carts[index];
              if (
                cart.has_survey === true &&
                cart.survey_id != "0" &&
                cart.survey_id != "no"
              ) {
                const survey = this.prescriptions.find(
                  prescription => prescription.survey_id == cart.survey_id
                );
                if (survey) {
                  if (survey.status != "active") {
                    // redirect to survey
                    this.nextPage = `/survey/${cart.survey_id}/${cart.id}`;
                  } else {
                    this.nextPage = "/checkout";
                  }
                } else {
                  // redirect to survey
                  this.nextPage = `/survey/${cart.survey_id}/${cart.id}`;
                }
              }
            }
            this.finish = true;
          }
          if (this.$route.params.productId != 0) {
            this.trackEvent("Finish Rx Survey", {
              timestamp: moment()
                .format("DD MMMM YYYY H:mm:ss")
                .toString(),
              user_id: this.$store.state.userData.userId,
              name: this.product.title
            });
            // mixpanel tracking
            this.trackMixPanelEvent("Finish Rx Survey", {
              source: "web",
              timestamp: moment()
                .format("DD MMMM YYYY H:mm:ss")
                .toString(),
              user_id: this.$store.state.userData.userId,
              name: this.product.title
            });
          }
        })
        .then(() => {
          loader.hide();
        });
    },
    fetchCart() {
      axios
        .get(
          `${process.env.VUE_APP_BASE_URL_API_CONTENT}/wp-json/surface/v1/cart`,
          {
            headers: {
              Authorization: `Bearer ${this.$store.getters.wooCommereceToken}`
            }
          }
        )
        .then(response => {
          console.log(response.data);
          if (response.data.status == "ok") {
            if (response.data.data !== "cart_empty") {
              this.carts = response.data.data.items;
            } else {
              this.carts = [];
            }
          }
        });
    },
    async getListPrescription() {
      await axios
        .get(
          `${process.env.VUE_APP_BASE_URL_API_CONTENT}/wp-json/surface/v1/account/profile/prescription`,
          {
            headers: {
              Authorization: `Bearer ${this.$store.getters.wooCommereceToken}`
            }
          }
        )
        .then(response => {
          if (response.data.status == "ok") {
            this.prescriptions = response.data.data;
          }
        })
        .catch(error => {
          console.log(error);
        });
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

<style scoped>
.box-info ul {
  padding-left: 25px !important;
}
</style>
