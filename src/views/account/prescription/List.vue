<template>
  <div id="m-mobile" class="container m-su">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mb40">
        <li class="breadcrumb-item">
          <router-link to="/account" class="link-blue s">Account</router-link>
        </li>
        <li class="breadcrumb-item active s" aria-current="page">
          Your prescriptions
        </li>
      </ol>
    </nav>

    <div class="mw500 f100">
      <div class="headingm text-uppercase font-bold mb60">
        Your prescriptions
      </div>
    </div>

    <div class="row">
      <template v-for="(prescription, index) in prescriptions">
        <div class="col-lg-4 col-sm-6" :key="index">
          <div class="box-prescription mb30">
            <div class="d-flex justify-content-between align-items-center mb25">
              <div class="pre-title">
                <div class="sh-xs font-medium">{{ prescription.product }}</div>
              </div>
              <div class="pre-status">
                <template v-if="prescription.status == 'active'">
                  <div class="my-status font-medium active">
                    <div class="bullet active"></div>
                    <div>Active</div>
                  </div>
                </template>
                <template v-else>
                  <div class="my-status font-medium expired">
                    <div class="bullet expired"></div>
                    <div>Expired</div>
                  </div>
                </template>
              </div>
            </div>

            <div class="row mb25">
              <div class="col-6">
                <div class="m font-medium grey">Strength</div>
                <div class="m">{{ prescription.strength | capitalize }}</div>
              </div>
              <div class="col-6">
                <div class="m font-medium grey">Prescribed on</div>
                <div class="m">{{ prescription.prescribed }}</div>
              </div>
            </div>
            <div class="row mb25">
              <div class="col-12">
                <div class="m font-medium grey">Expiry Date</div>
                <div class="m">{{ prescription.expired }}</div>
              </div>
            </div>

            <template v-if="prescription.status == 'active'">
              <router-link
                :to="`/product/${prescription.product_id}`"
                class="btn btn-pre btn-grey btn-block"
              >
                Buy Now
              </router-link>
            </template>
            <template v-else>
              <router-link
                :to="
                  `/product/${prescription.survey_id}/${prescription.product_id}`
                "
                class="btn btn-pre btn-grey btn-block"
              >
                Renew Prescription
              </router-link>
            </template>
          </div>
        </div>
      </template>
      <template v-if="prescriptions.length == 0">
        <div class="col-lg-6 offset-lg-3">
          <div class="d-flex align-items-center justify-content-center">
            <div class="text-center">
              <img src="/img/woman-icon.svg" class="img-fluid mb30" />
              <div class="sh-xs mb8">Your prescriptions is empty right now</div>
              <p class="s grey mb40"></p>
              <router-link to="/product" class="btn btn-solid mb40">
                Discover products
              </router-link>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Prescription",
  data() {
    return {
      prescriptions: []
    };
  },
  mounted() {
    this.getListPrescription();
  },
  methods: {
    getListPrescription() {
      const loader = this.$loading.show({
        container: null,
        lockScroll: true,
        opacity: 1
      });
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
          loader.hide();
        })
        .catch(error => {
          console.log(error);
          loader.hide();
        });
    }
  }
};
</script>
