<template>
  <div id="payment-method">
    <div class="sh-s mb40">Payment Method</div>

    <form ref="paymentContainer" @submit.prevent="setPayment">
      <template v-for="(payment, index) in paymentMethods">
        <div class="box-account p20 mb25" :key="index">
          <div class="d-flex justify-content-between">
            <div class="custom-control custom-radio">
              <input
                type="radio"
                :id="`payment_${payment.code}`"
                name="paymentMethod"
                class="custom-control-input"
                :value="payment"
                v-model="selectedMethod"
              />
              <label
                class="custom-control-label"
                :for="`payment_${payment.code}`"
              >
                <p class="m">{{ payment.title }}</p>
                <p class="s grey" v-if="payment.info">{{ payment.info }}</p>
              </label>
            </div>

            <!-- <div><img src="../img/visa.png" class="img-ship" /></div> -->
          </div>
        </div>
      </template>

      <div class="row mb80">
        <div class="col-sm-12" v-if="errorNotSelectedPayment">
          <p class="text-danger text-center mb-2">
            Please select payment method
          </p>
        </div>
        <div class="col-sm-6">
          <button
            type="button"
            @click="$emit('back')"
            class="btn btn-grey btn-block mb15"
          >
            Back to shipping
          </button>
        </div>
        <div class="col-sm-6">
          <button type="submit" class="btn btn-solid btn-block mb15">
            Make payment
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Payment",
  data() {
    return {
      paymentMethods: [],
      selectedMethod: null,
      errorNotSelectedPayment: false
    };
  },
  mounted() {
    this.fetchPaymentMethod();
  },
  methods: {
    fetchPaymentMethod() {
      axios
        .get(
          `${process.env.VUE_APP_BASE_URL_API_CONTENT}/wp-json/surface/v1/checkout/payment-method`,
          {
            headers: {
              Authorization: `Bearer ${this.$store.getters.wooCommereceToken}`
            }
          }
        )
        .then(response => {
          console.log(response.data);
          if (response.data.status == "ok") {
            this.paymentMethods = response.data.data;
          }
        });
    },
    setPayment() {
      if (this.selectedMethod) {
        this.$emit("submit", this.selectedMethod);
      } else {
        this.errorNotSelectedPayment = true;
      }
    }
  }
};
</script>
