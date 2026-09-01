<template>
  <div id="inline-cart">
    <div
      id="cart-content"
      class="popup-content-overlay green-bg"
      :class="{ 'overlay-show': $store.state.showCartRightBar }"
    >
      <div class="container">
        <div
          class="box-cart"
          ref="cartContainer"
          :class="{ 'cart-show': $store.state.showCartRightBar }"
        >
          <div class="head-cart mb40">
            <div class="sh-s">
              Your bag <span class="blue">({{ carts.length }} items)</span>
            </div>
            <button
              @click="$store.commit('SHOW_CART', false)"
              class="btn btn-step-close"
            >
              <img src="/img/x.svg" class="x-step" />
            </button>
          </div>

          <template v-if="carts.length == 0">
            <div class="box-ci-empty">
              <div class="">
                <img src="/img/women-icon-cream.svg" class="img-fluid mb40" />
                <p class="l">There are no items in your bag right now.</p>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="sb-cart o-y mb30">
              <template v-for="(cart, index) in carts">
                <div class="row mb50" :key="index">
                  <div class="col-sm-3">
                    <img :src="cart.thumbnail" class="img-fluid" />
                  </div>
                  <div class="col-sm-9 pl-0">
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <div class="m">{{ cart.product }}</div>
                      <button
                        class="btn btn-del"
                        type="button"
                        @click="removeItem(cart.cart_key)"
                      >
                        <img src="/img/trash-icon.svg" />
                      </button>
                    </div>
                    <!-- <p class="s grey mb15">50ml Tottle pump</p> -->

                    <div
                      class="d-flex align-items-center justify-content-between"
                    >
                      <div class="qty-sm number-input">
                        <button
                          onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                          class="minus btn btn-min-sm"
                          @click="updateQty(cart.cart_key)"
                        >
                          <img src="/img/minus.svg" />
                        </button>
                        <input
                          class="form-control input-number-sm"
                          min="1"
                          :value="cart.quantity"
                          step="1"
                          type="number"
                          :id="`quantity_cart_${cart.cart_key}`"
                        />
                        <button
                          onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                          class="plus btn btn-plus-sm"
                          @click="updateQty(cart.cart_key)"
                        >
                          <img src="/img/plus-icon.svg" />
                        </button>
                      </div>
                      <p class="m">
                        {{ cart.subtotal | format_k_currency }}
                      </p>
                    </div>
                  </div>
                </div>
              </template>
            </div>
            <div class="shadow-bottom mb30"></div>

            <div class="total-ci mb30">
              <div class="sh-xs">Total</div>
              <div class="sh-s">
                {{ resume.totalPrice | format_k_currency }}
              </div>
            </div>

            <div class="row">
              <div class="col-sm-5">
                <button
                  @click="goToPage('/cart')"
                  class="btn btn-grey btn-block"
                >
                  View bag
                </button>
              </div>
              <div class="col-sm-7">
                <button
                  @click="goToPage('/checkout')"
                  class="btn btn-solid btn-block"
                >
                  Proceed to checkout
                </button>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "CartRightBar",
  data() {
    return {
      carts: [],
      resume: {},
      prescriptions: []
    };
  },
  computed: mapState(["showCartRightBar"]),
  watch: {
    showCartRightBar(newVal) {
      if (newVal) {
        this.fetchCart();
      }
    }
  },
  mounted() {
    if (this.$store.state.userData) {
      this.getListPrescription();
    }
  },
  methods: {
    fetchCart() {
      if (this.$store.state.userData) {
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
      }
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
    goToPage(path) {
      this.$store.commit("SHOW_CART", false);
      if (path == "/cart") {
        this.$router.push("/cart");
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
        // go to checkout page
        this.$router.push(`/checkout`);
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

<style scoped>
.box-cart {
  padding-top: 30px !important;
}
</style>
