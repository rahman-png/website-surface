<template>
  <div id="checkout-page">
    <product-menu></product-menu>
    <cart-right-bar></cart-right-bar>
    <template v-if="!successOrder">
      <div class="bg-checkout top90px">
        <div id="m-mobile" class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="mt80">
                <div class="headingm mb30">Checkout</div>
              </div>

              <nav aria-label="breadcrumb">
                <ol class="breadcrumb mb40">
                  <li class="breadcrumb-item">
                    <router-link to="/cart" class="link-blue xs">
                      Cart
                    </router-link>
                  </li>
                  <li
                    class="breadcrumb-item font-medium xs"
                    aria-current="page"
                  >
                    Information
                  </li>
                  <li class="breadcrumb-item xs" aria-current="page">
                    Shipping
                  </li>
                  <li class="breadcrumb-item active xs" aria-current="page">
                    Payment
                  </li>
                </ol>
              </nav>

              <div class="summary-order mb50">
                <div class="collapse" id="collapse1">
                  <div class="m font-bold mb30">Summary Order</div>
                  <template v-for="(cart, index) in carts">
                    <div class="d-flex mb30" :key="index">
                      <div class="img-check">
                        <img
                          :src="cart.thumbnail"
                          class="img-mh100 mr-4 img-fluid"
                        />
                      </div>
                      <div class="desc-info">
                        <div class="m mb8">{{ cart.product }}</div>
                        <p class="grey s mb20">Quantity: {{ cart.quantity }}</p>
                        <p class="s font-medium">
                          {{ cart.price | format_k_currency }}
                        </p>
                      </div>
                    </div>
                  </template>

                  <hr />

                  <div class="s font-medium mb8">Order Note</div>
                  <textarea
                    class="form-control mb20"
                    placeholder="We will pass on your message"
                    v-model="note"
                  ></textarea>

                  <hr />

                  <div class="coupon">
                    <div class="s font-medium mb8">
                      Coupon code or gift card
                    </div>
                    <div class="row">
                      <div class="col-sm-7">
                        <input
                          type="text"
                          class="form-control main-form bg-transparent mb15"
                          placeholder="Enter code"
                          v-model="coupon"
                          :class="{ 'is-invalid': errorCoupon }"
                        />
                      </div>
                      <div class="col-sm-5">
                        <button
                          @click="validateCoupon"
                          type="button"
                          class="btn btn-solid btn-block"
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                    <p class="xs" v-if="!errorCoupon && discount > 0">
                      Coupon applied. You got a discount of
                      {{ discount | format_k_currency }}.
                    </p>
                    <p class="xs red" v-if="errorCoupon">
                      Coupon code is invalid
                    </p>
                  </div>

                  <hr />

                  <div class="d-flex justify-content-between mb15">
                    <p class="s grey ">Subtotal</p>
                    <p class="s font-medium">
                      {{ resume.totalPrice | format_k_currency }}
                    </p>
                  </div>

                  <div class="d-flex justify-content-between ">
                    <p class="s grey ">Shipping</p>
                    <p class="s grey" v-if="courier !== null">
                      {{ courier.cost | format_k_currency }}
                    </p>
                    <p class="s grey" v-else-if="freeShipping">
                      Rp. 0
                    </p>
                    <p class="s grey" v-else>
                      Calculated on the next page
                    </p>
                  </div>

                  <hr />

                  <div class="d-flex justify-content-between mb30">
                    <p class="sh-xs grey">Total</p>
                    <p class="sh-s ">
                      {{ totalPayment | format_k_currency }}
                    </p>
                  </div>

                  <p class="s d-flex">
                    Need help with your order? &nbsp;
                    <a href="#" class="wc-link">Contact Support</a>
                  </p>

                  <a
                    @click="collapseSummary = false"
                    class="link-sum mt-2 d-flex justify-content-between"
                    data-toggle="collapse"
                    href="#collapse1"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapse1"
                  >
                    <div class="m font-medium">
                      Hide order summary
                      <img src="/img/chevron-down.svg" class="fa-rotate-180" />
                    </div>
                  </a>
                </div>

                <a
                  @click="collapseSummary = true"
                  :class="{ hidden: collapseSummary }"
                  class="link-sum d-flex justify-content-between"
                  data-toggle="collapse"
                  href="#collapse1"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapse1"
                >
                  <div class="m font-medium">
                    Show order summary
                    <img src="/img/chevron-down.svg" class="chevron-summary" />
                  </div>
                  <div class="l">{{ totalPayment | format_k_currency }}</div>
                </a>
              </div>

              <div id="address-setting" v-show="settingAddress">
                <Address @submit="setAddress" />
              </div>
              <div id="shipping-setting" v-show="settingShipping">
                <Shipping
                  @submit="setShipping"
                  @back="backToAddress"
                  :weight="resume.totalWeight"
                  :district="shipping.district_id"
                />
              </div>
              <div id="payment-setting" v-show="settingPayment">
                <Payment @submit="setPayment" @back="backToShipping" />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="box-right-checkout">
                <template v-for="(cart, index) in carts">
                  <div class="d-flex mb30" :key="index">
                    <div>
                      <img
                        :src="cart.thumbnail"
                        class="img-mh100 mr-4 img-fluid"
                      />
                    </div>
                    <div class="desc-info">
                      <div class="m mb8">{{ cart.product }}</div>
                      <p class="grey s mb20">Quantity: {{ cart.quantity }}</p>
                      <p class="s font-medium">
                        {{ cart.price | format_k_currency }}
                      </p>
                    </div>
                  </div>
                </template>

                <hr />

                <div class="s font-medium mb8">Order Note</div>
                <textarea
                  class="form-control mb20"
                  placeholder="We will pass on your message"
                  v-model="note"
                ></textarea>

                <div class="coupon" ref="coupon">
                  <div class="s font-medium mb8">Coupon code or gift card</div>
                  <div class="row">
                    <div class="col-7">
                      <input
                        type="text"
                        class="form-control main-form bg-transparent"
                        placeholder="Enter code"
                        v-model="coupon"
                        :class="{ 'is-invalid': errorCoupon }"
                      />
                    </div>
                    <div class="col-5">
                      <button
                        @click="validateCoupon"
                        type="button"
                        class="btn btn-solid btn-block mb15"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                  <p class="xs" v-if="!errorCoupon && discount > 0">
                    Coupon applied. You got a discount of
                    {{ discount | format_k_currency }}.
                  </p>
                  <p class="xs red" v-if="errorCoupon">
                    Coupon code is invalid
                  </p>
                </div>

                <hr />

                <div class="d-flex justify-content-between mb15">
                  <p class="s grey ">Subtotal</p>
                  <p class="s font-medium">
                    {{ resume.totalPrice | format_k_currency }}
                  </p>
                </div>

                <div
                  class="d-flex justify-content-between mb15"
                  v-if="!errorCoupon && discount > 0"
                >
                  <p class="s grey ">Coupon discount</p>
                  <p class="s font-medium">
                    - {{ discount | format_k_currency }}
                  </p>
                </div>

                <div class="d-flex justify-content-between ">
                  <p class="s grey ">Shipping</p>
                  <p class="s grey" v-if="courier !== null">
                    {{ courier.cost | format_k_currency }}
                  </p>
                  <p class="s grey" v-else-if="freeShipping">
                    Rp. 0
                  </p>
                  <p class="s grey" v-else>
                    Calculated on the next page
                  </p>
                </div>

                <hr />

                <div class="d-flex justify-content-between mb30">
                  <p class="sh-xs grey ">Total</p>
                  <p class="sh-s ">
                    {{ totalPayment | format_k_currency }}
                  </p>
                </div>

                <p
                  class="s d-block text-danger mb20 text-center"
                  v-if="errorOrder"
                >
                  Error Create Order
                </p>

                <p class="s d-flex">
                  Need help with your order ?
                  <a href="#" class="wc-link pl-1">Contact Support</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="content-box cm">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 offset-lg-3">
              <div class="d-flex align-items-center justify-content-center">
                <div style="width: 90%">
                  <div class="text-center">
                    <img src="/img/woman-icon.svg" class="img-fluid mb30" />
                    <div class="sh-xs mb8">
                      Order placed successfully
                    </div>
                  </div>
                  <div id="accordion" class="s grey mb40">
                    <template v-for="(info, index) in paymentInfo">
                      <div class="card w-100" :key="index">
                        <a
                          class="card-header"
                          :class="{ collapsed: showPaymentInfo != index }"
                          id="tab1-h1"
                          data-toggle="collapse"
                          :data-target="`tab1-c${index}`"
                          :aria-expanded="[
                            showPaymentInfo == index ? true : false
                          ]"
                          aria-controls="tab1-content-1"
                          @click="showPaymentInfo = index"
                        >
                          {{ info.title }}
                        </a>

                        <div
                          :id="`tab1-c${index}`"
                          class="collapse"
                          :class="{ show: showPaymentInfo == index }"
                          aria-labelledby="tab1-headingOne"
                          data-parent="#accordion"
                        >
                          <div class="card-body">
                            <p class="s" v-html="info.text"></p>
                          </div>
                        </div>
                      </div>
                    </template>
                  </div>
                  <div class="row mb80">
                    <div class="col-sm-6">
                      <router-link
                        to="/product"
                        class="btn btn-grey btn-block mb15"
                        >Back to shopping</router-link
                      >
                    </div>
                    <div class="col-sm-6">
                      <router-link
                        :to="`/account/order/${orderId}`"
                        class="btn btn-solid btn-block mb15"
                        >View order</router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import axios from "axios";
import ProductMenu from "@/components/ProductMenu.vue";
import CartRightBar from "@/components/CartRightBar.vue";
import Address from "./Address.vue";
import Shipping from "./Shipping.vue";
import Payment from "./Payment.vue";
import moment from "moment";

export default {
  name: "Checkout",
  metaInfo: {
    title: "Check Out"
  },
  components: {
    ProductMenu,
    CartRightBar,
    Address,
    Shipping,
    Payment
  },
  data() {
    return {
      carts: [],
      resume: {},
      coupon: null,
      note: null,
      discount: 0,
      settingAddress: true,
      billing: {},
      shipping: {},
      settingShipping: false,
      courier: null,
      settingPayment: false,
      payment: null,
      successOrder: false,
      errorOrder: false,
      errorCoupon: false,
      freeShipping: false,
      orderId: null,
      showPaymentInfo: null,
      paymentInfo: [],
      collapseSummary: false
    };
  },
  computed: {
    totalPayment() {
      let total = 0;
      // eslint-disable-next-line no-prototype-builtins
      if (this.resume.hasOwnProperty("totalPrice")) {
        total += this.resume.totalPrice;
      }
      if (this.courier !== null) {
        total += this.courier.cost;
      }
      total -= this.discount;

      return total > 0 ? total : 0;
    }
  },
  mounted() {
    this.fetchCart();
  },
  methods: {
    fetchCart() {
      const loader = this.$loading.show({
        container: null,
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
              this.trackEvent("Checkout", {
                timestamp: moment().format("DD MMMM YYYY H:mm:ss"),
                user_id: this.$store.state.userData.userId,
                basket_quantity: this.resume.totalItem,
                basket_price: this.resume.totalPrice
              });
              this.trackFacebookPixelEvent("InitiateCheckout", {
                content_category: "process_checkout",
                content_type: "product_group",
                content_ids: this.carts.map(cart => cart.id),
                currency: "IDR",
                num_items: this.resume.totalItem,
                value: this.resume.totalPrice
              });
              this.trackMixPanelEvent("Checkout", {
                source: "web",
                timestamp: moment()
                  .format("DD MMMM YYYY H:mm:ss")
                  .toString(),
                user_id: this.$store.state.userData.userId,
                basket_quantity: this.resume.totalItem,
                basket_price: this.resume.totalPrice
              });
            } else {
              this.$router.push("/cart");
            }
          }
          loader.hide();
        });
    },
    setAddress(billing, shipping) {
      this.billing = billing;
      this.shipping = shipping;
      this.settingAddress = false;
      this.settingShipping = true;
    },
    backToAddress() {
      this.settingAddress = true;
      this.settingShipping = false;
    },
    setShipping(courier) {
      this.courier = Object.assign(courier, { costOri: courier.cost });
      if (this.freeShipping) {
        this.courier.cost = 0;
      }
      this.settingShipping = false;
      this.settingPayment = true;
      this.trackEvent("Select Shipping", {
        timestamp: moment().format("DD MMMM YYYY H:mm:ss"),
        user_id: this.$store.state.userData.userId,
        basket_quantity: this.resume.totalItem,
        basket_price: this.resume.totalPrice,
        shipping_type: this.courier.label
      });
      this.trackMixPanelEvent("Select Shipping", {
        source: "web",
        timestamp: moment()
          .format("DD MMMM YYYY H:mm:ss")
          .toString(),
        user_id: this.$store.state.userData.userId,
        basket_quantity: this.resume.totalItem,
        basket_price: this.resume.totalPrice,
        shipping_type: this.courier.label
      });
    },
    backToShipping() {
      this.settingShipping = true;
      this.settingPayment = false;
    },
    setPayment(payment) {
      this.payment = payment;
      const loader = this.$loading.show({
        container: null,
        lockScroll: true,
        opacity: 1
      });
      this.trackEvent("Select Payment", {
        timestamp: moment().format("DD MMMM YYYY H:mm:ss"),
        user_id: this.$store.state.userData.userId,
        basket_quantity: this.resume.totalItem,
        basket_price: this.resume.totalPrice,
        payment_type: this.payment.title
      });
      this.trackMixPanelEvent("Select Payment", {
        source: "web",
        timestamp: moment()
          .format("DD MMMM YYYY H:mm:ss")
          .toString(),
        user_id: this.$store.state.userData.userId,
        basket_quantity: this.resume.totalItem,
        basket_price: this.resume.totalPrice,
        payment_type: this.payment.title
      });
      this.trackFacebookPixelEvent("AddPaymentInfo", {
        content_category: "select_payment",
        payment: this.payment.code
      });
      axios
        .post(
          `${process.env.VUE_APP_BASE_URL_API_CONTENT}/wp-json/surface/v1/checkout`,
          {
            address: {
              billing: {
                first_name: this.billing.firstName,
                last_name: this.billing.lastName,
                email: this.billing.email,
                phone: this.billing.phone,
                address_1: this.billing.address1,
                address_2: this.billing.address2,
                company: this.billing.addressName,
                postcode: this.billing.postCode,
                state: this.billing.state,
                city_id: this.billing.city_id,
                city: this.billing.city,
                district_id: this.billing.district_id,
                district: this.billing.district
              },
              shipping: {
                first_name: this.shipping.firstName,
                last_name: this.shipping.lastName,
                email: this.shipping.email,
                phone: this.shipping.phone,
                address_1: this.shipping.address1,
                address_2: this.shipping.address2,
                company: this.shipping.addressName,
                postcode: this.shipping.postCode,
                state: this.shipping.state,
                city_id: this.shipping.city_id,
                city: this.shipping.city,
                district_id: this.shipping.district_id,
                district: this.shipping.district
              }
            },
            cart: this.carts.map(cart => {
              return {
                product_id: cart.id,
                quantity: cart.quantity,
                color: cart.color
              };
            }),
            shipping: this.courier,
            payment_method: this.payment,
            coupon_code: this.errorCoupon ? null : this.coupon,
            notes: this.note
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
          this.trackEvent("Order Successful", {
            timestamp: moment().format("DD MMMM YYYY H:mm:ss"),
            user_id: this.$store.state.userData.userId,
            basket_quantity: this.resume.totalItem,
            basket_price: this.resume.totalPrice,
            shipping_type: this.courier.label,
            payment_type: this.payment.title
          });
          this.trackFacebookPixelEvent("Purchase", {
            content_category: "purchase",
            content_type: "product_group",
            content_ids: this.carts.map(cart => cart.id),
            currency: "IDR",
            num_items: this.resume.totalItem,
            value: this.resume.totalPrice,
            delivery_category: "home_delivery"
          });
          this.trackMixPanelEvent("Order Successful", {
            source: "web",
            timestamp: moment()
              .format("DD MMMM YYYY H:mm:ss")
              .toString(),
            user_id: this.$store.state.userData.userId,
            basket_quantity: this.resume.totalItem,
            basket_price: this.resume.totalPrice,
            shipping_type: this.courier.label,
            payment_type: this.payment.title
          });
          this.orderId = response.data.data.order_id;
          this.paymentInfo = response.data.data.payment_info;
          this.successOrder = true;
          if (response.data.data.payment_method == "free_payment") {
            this.$router.push(`/account/order/${this.orderId}`);
          } else if (
            response.data.data.payment_method.channel == "gopay" ||
            response.data.data.payment_method.channel == "credit_card"
          ) {
            window.open(response.data.data.payment_method.va_number, "_blank");
          }
        })
        .catch(error => {
          console.log(error.response.data);
          this.errorOrder = true;
          loader.hide();
        });
    },
    validateCoupon() {
      if (this.coupon === null || this.coupon == "") {
        this.errorCoupon = true;
        this.discount = 0;
        return false;
      }
      const loader = this.$loading.show({
        container: null,
        lockScroll: true,
        opacity: 1
      });
      axios
        .post(
          `${process.env.VUE_APP_BASE_URL_API_CONTENT}/wp-json/surface/v1/checkout/coupon`,
          {
            code: this.coupon,
            cart: this.carts.map(cart => {
              return {
                product_id: cart.id,
                quantity: cart.quantity
              };
            })
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
          if (response.data.status == "ok") {
            this.errorCoupon = false;
            this.discount = response.data.data.amount;
            this.freeShipping = response.data.data.free_shipping;
          } else {
            this.errorCoupon = true;
            this.discount = 0;
            this.freeShipping = false;
          }

          if (this.courier !== null) {
            if (this.freeShipping) {
              this.courier.cost = 0;
            } else {
              this.courier.cost = this.courier.costOri;
            }
          }
        })
        .catch(error => {
          console.log(error);
          this.errorCoupon = true;
          this.discount = 0;
          loader.hide();
        });
    }
  }
};
</script>
