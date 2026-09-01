<template>
  <div id="shipping-method">
    <div class="sh-s mb40">Shipping Method</div>

    <form ref="shippingContainer" @submit.prevent="setShipping">
      <template v-for="(shipping, index) in shippingMethods">
        <div class="box-account p20 mb25" :key="index">
          <div class="d-flex justify-content-between">
            <div class="custom-control custom-radio">
              <input
                type="radio"
                :id="`courir_${shipping.code}_${shipping.service}`"
                name="courir"
                class="custom-control-input"
                :value="shipping"
                v-model="selectedMethod"
                :key="index"
              />
              <label
                class="custom-control-label"
                :for="`courir_${shipping.code}_${shipping.service}`"
              >
                <p class="m">
                  {{ shipping.label }} [{{ shipping.service }}] Rp.
                  {{ shipping.cost | convertToRupiah }}
                </p>
                <p class="s grey">Delivery {{ shipping.etd }} hari kerja</p>
              </label>
            </div>

            <div v-if="shipping.code == 'jne'">
              <img src="/img/jne.png" class="img-ship" />
            </div>
            <div v-else-if="shipping.code == 'jnt'">
              <img src="/img/jnt.png" class="img-ship" />
            </div>
            <div v-else-if="shipping.code == 'pos'">
              <img src="/img/pos.png" class="img-ship" />
            </div>
            <div v-else-if="shipping.code == 'rpx'">
              <img src="/img/rpx.png" class="img-ship" />
            </div>
            <div v-else-if="shipping.code == 'sicepat'">
              <img src="/img/sicepat.png" class="img-ship" />
            </div>
          </div>
        </div>
      </template>

      <div class="row mb80">
        <div class="col-sm-12" v-if="errorNotSelectedShipping">
          <p class="text-danger text-center mb-2">
            Please select shipping method
          </p>
        </div>
        <div class="col-sm-5">
          <button
            type="button"
            @click="$emit('back')"
            class="btn btn-grey btn-block mb15"
          >
            Back to address
          </button>
        </div>
        <div class="col-sm-6">
          <button type="submit" class="btn btn-solid btn-block mb15">
            Proceed to payment
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Shipping",
  props: {
    weight: {
      type: Number,
      default: 0
    },
    district: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      shippingMethods: [],
      selectedMethod: null,
      errorNotSelectedShipping: false
    };
  },
  watch: {
    weight(newVal) {
      if (newVal > 0 && this.district !== null) {
        this.getShippingMethods();
      }
    },
    district(newVal) {
      if (newVal !== null && this.weight > 0) {
        this.getShippingMethods();
      }
    }
  },
  methods: {
    getShippingMethods() {
      const loader = this.$loading.show({
        container: this.$refs.shippingContainer,
        lockScroll: true,
        opacity: 1
      });
      axios
        .post(
          `${process.env.VUE_APP_BASE_URL_API_CONTENT}/wp-json/surface/v1/checkout/shipping-method`,
          {
            destination: this.district,
            weight: this.weight
          },
          {
            headers: {
              Authorization: `Bearer ${this.$store.getters.wooCommereceToken}`
            }
          }
        )
        .then(response => {
          console.log(response.data);
          if (response.data.status == "ok") {
            this.shippingMethods = response.data.data.shipping;
          }
          loader.hide();
        });
    },
    setShipping() {
      if (this.selectedMethod) {
        this.$emit("submit", this.selectedMethod);
        window.scrollTop(0, 0);
      } else {
        this.errorNotSelectedShipping = true;
      }
    }
  }
};
</script>
