<template>
  <div id="cart-page">
    <product-menu></product-menu>
    <cart-right-bar></cart-right-bar>
    <div class="content-box cm">
      <div class="container" ref="cartContainer">
        <template v-if="carts.length == 0">
          <div class="row">
            <div class="col-lg-6 offset-lg-3">
              <div class="d-flex align-items-center justify-content-center">
                <div class="text-center">
                  <img src="/img/woman-icon.svg" class="img-fluid mb30" />
                  <div class="sh-xs mb8">Your bag is empty right now</div>
                  <p class="s grey mb40"></p>
                  <router-link to="/product" class="btn btn-solid">
                    Discover products
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="headingm text-uppercase font-bold mb40">Your bag</div>

          <div class="box-bag mb50">
            <div class="heading-cart">
              <div class="column-1">
                <div class="m font-medium">Product</div>
              </div>
              <div class="column-2">
                <div class="m font-medium">Price / unit</div>
              </div>
              <div class="column-3">
                <div class="m font-medium">Quantity</div>
              </div>
              <div class="column-4">
                <div class="m font-medium">Total</div>
              </div>
            </div>

            <template v-for="(cart, index) in carts">
              <div class="item-cart" :key="index">
                <div class="item-cart-img">
                  <img :src="cart.thumbnail" class="img-fluid w100" />
                </div>
                <div class="item-cart-desc">
                  <div class="ic-desc-row mb40">
                    <div class="ic-collumn-1">
                      <div class="m mb8">{{ cart.product }}</div>
                      <p class="grey s">{{ cart.package }}</p>
                    </div>
                    <div class="ic-collumn-2">
                      <p class="m">{{ cart.price | format_k_currency }}</p>
                    </div>
                    <div class="ic-collumn-3">
                      <div class="box-for-action">
                        <div class="for-qty">
                          <div
                            class="qty-sm justify-content-center number-input"
                          >
                            <button
                              type="button"
                              @click="updateQty(cart.cart_key)"
                              onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                              class="minus btn btn-min-sm"
                            >
                              <img src="/img/minus.svg" />
                            </button>
                            <input
                              class="form-control input-number-sm"
                              min="1"
                              name="quantity"
                              :value="cart.quantity"
                              step="1"
                              type="number"
                              :id="`quantity_cart_${cart.cart_key}`"
                            />
                            <button
                              type="button"
                              @click="updateQty(cart.cart_key)"
                              onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                              class="plus btn btn-plus-sm"
                            >
                              <img src="/img/plus-icon.svg" />
                            </button>
                          </div>
                        </div>

                        <div class="for-delete">
                          <button
                            type="button"
                            class="btn btn-delete ml-2"
                            @click="removeItem(cart.cart_key)"
                          >
                            <img src="/img/trash-fill.svg" class="img-fluid" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="ic-collumn-4">
                      <p class="m font-medium">
                        {{ cart.subtotal | format_k_currency }}
                      </p>
                    </div>
                  </div>
                  <div class="box-info full" v-if="cart.has_survey">
                    This is a prescription product. You will need to fill out an
                    online survey before purchasing. Based on your survey, our
                    doctor will prepare the strength level of the product most
                    suitable for your skin.
                    <a href="#" class="link-underline">Know More</a>

                    <div class="rx-button">
                      <div class="btn-sm-top left">R</div>
                      <div class="btn-sm-top right">X</div>
                    </div>
                  </div>
                </div>
              </div>
            </template>

            <div class="item-cart-footer">
              <div class="total-ci order-2">
                <div class="m grey">Total</div>
                <div class="sh-s">
                  {{ resume.totalPrice | format_k_currency }}
                </div>
              </div>
              <div class="m grey support order-1">
                Need help with your order?
                <a href="#" class="link-underline">Contact Support</a>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-12 order-lg-2 col-lg-7 col-xl-6">
              <div class="row">
                <div class="col-sm-6 col-lg-6">
                  <router-link
                    to="/product"
                    class="btn btn-grey btn-block btn-mm"
                  >
                    Continue shopping
                  </router-link>
                </div>
                <div class="col-sm-6 col-lg-6">
                  <template v-if="isNeedSurvey">
                    <button
                      @click="processToSurvey"
                      type="button"
                      class="btn btn-solid btn-block"
                    >
                      Complete Survey
                    </button>
                  </template>
                  <template v-else>
                    <router-link to="/checkout" class="btn btn-solid btn-block">
                      Checkout
                    </router-link>
                  </template>
                </div>
              </div>
            </div>
            <div class="col-sm-12 order-lg-1 col-lg-5 col-xl-6">
              <div class="box-survey" v-if="isNeedSurvey">
                <div class="m mb8 font-medium">What’s a survey?</div>
                <p class="s grey">
                  You have one or more prescription products in your cart. To
                  complete your purchase, you will have to fill out a survey
                  prior to checkout. Based on your survey, our doctor will
                  strength level of the product most suitable for your skin.
                </p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ProductMenu from "@/components/ProductMenu.vue";
import CartRightBar from "@/components/CartRightBar.vue";

export default {
  name: "Cart",
  components: {
    ProductMenu,
    CartRightBar
  },
  data() {
    return {
      carts: [],
      resume: {},
      prescriptions: []
    };
  },
  mounted() {
    this.fetchCart();
    this.getListPrescription();
  },
  computed: {
    isNeedSurvey() {
      let result = false;
      // check master survey
      const masterSurvey = this.$store.state.profileWooCommerce.master_survey;
      if (typeof masterSurvey === "string") {
        result = true;
      } else {
        // looping check item cart survey id
        for (let index = 0; index < this.carts.length; index++) {
          const cart = this.carts[index];
          if (
            cart.has_survey &&
            cart.survey_id != "0" &&
            cart.survey_id != "no"
          ) {
            const survey = this.prescriptions.find(
              prescription => prescription.survey_id == cart.survey_id
            );
            if (survey) {
              if (survey.status != "active") {
                // redirect to survey
                result = true;
                break;
              }
            } else {
              // redirect to survey
              result = true;
              break;
            }
          }
        }
      }
      return result;
    }
  },
  methods: {
    fetchCart() {
      const loader = this.$loading.show({
        container: this.$refs.cartContainer,
        lockScroll: true,
        opacity: 1
      });
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
              this.resume = {
                totalItem: response.data.data.items_count,
                totalWeight: response.data.data.items_weight,
                totalPrice: response.data.data.total_price
              };
            } else {
              this.carts = [];
              this.resume = {};
            }
          }
          loader.hide();
        });
    },
    updateQty(cartId) {
      axios
        .post(
          `${process.env.VUE_APP_BASE_URL_API_CONTENT}/wp-json/surface/v1/cart/update`,
          {
            cart_key: cartId,
            quantity: document.getElementById(`quantity_cart_${cartId}`).value
          },
          {
            headers: {
              Authorization: `Bearer ${this.$store.getters.wooCommereceToken}`
            }
          }
        )
        .then(response => {
          console.log(response.data);
          this.fetchCart();
        });
    },
    removeItem(cartId) {
      const loader = this.$loading.show({
        container: this.$refs.cartContainer,
        lockScroll: true,
        opacity: 1
      });
      axios
        .post(
          `${process.env.VUE_APP_BASE_URL_API_CONTENT}/wp-json/surface/v1/cart/remove`,
          {
            cart_key: cartId
          },
          {
            headers: {
              Authorization: `Bearer ${this.$store.getters.wooCommereceToken}`
            }
          }
        )
        .then(response => {
          console.log(response.data);
          loader.hide();
          this.fetchCart();
        });
    },
    processToSurvey() {
      // check master survey
      const masterSurvey = this.$store.state.profileWooCommerce.master_survey;
      if (typeof masterSurvey === "string") {
        this.$router.push(`/survey/${masterSurvey}/0`);
        return false;
      }
      // looping check item cart survey id
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
              this.$router.push(`/survey/${cart.survey_id}/${cart.id}`);
              return false;
            }
          } else {
            // redirect to survey
            this.$router.push(`/survey/${cart.survey_id}/${cart.id}`);
            return false;
          }
        }
      }
    },
    getListPrescription() {
      axios
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
    }
  }
};
</script>
