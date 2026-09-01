<template>
  <div id="treatment-popup">
    <div id="treatment-popup-content" class="popup-content-overlay">
      <div class="container">
        <div class="popup-content">
          <div class="popup-card">
            <div class="overflow-popup">
              <div class="btn-close" @click="$emit('close')">
                <i class="fa fa-times"></i>
              </div>
              <div class="row">
                <div class="col-xl-6 col-sm-6">
                  <h5 class="sh-l mb20">
                    {{ data.name }}
                  </h5>
                  <p class="mw350 mb60">
                    {{ data.description }}
                  </p>
                  <a
                    href="https://wa.me/6281222346115"
                    target="_blank"
                    class="btn btn-solid"
                  >
                    Book Now
                  </a>
                </div>
                <div class="col-xl-6 col-sm-6">
                  <div class="oy-popup o-y">
                    <template v-for="(treatment, index) in treatments">
                      <div :key="index">
                        <h5 class="sh-s mb40">{{ treatment.name }}</h5>
                        <p class="xxs font-medium mb15">SUITABLE FOR</p>
                        <p class="s mb30">
                          {{ treatment.suitable }}
                        </p>
                        <div class="row mb30">
                          <div class="col-6">
                            <p class="xxs font-medium mb15">DURATION</p>
                            <p>{{ treatment.duration }} minutes</p>
                          </div>
                          <div class="col-6">
                            <p class="xxs font-medium mb15">PRICE</p>
                            <p>{{ treatment.price | format_k_currency }}</p>
                          </div>
                        </div>
                        <p>
                          {{ treatment.description }}
                        </p>
                        <hr class="line-popup" />
                      </div>
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
import $ from "jquery";
import axios from "axios";

export default {
  name: "TreatmentPopUp",
  props: {
    categoryId: {
      type: String,
      default: null
    },
    show: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      treatments: []
    };
  },
  watch: {
    show(newVal) {
      if (newVal) {
        this.getTreatments();
        $("#treatment-popup-content").addClass("overlay-show");
        $(".popup-content").addClass("popup-show");
        $("body").addClass("no-scroll");
      } else {
        $("#treatment-popup-content").removeClass("overlay-show");
        $(".popup-content").removeClass("popup-show");
        $("body").removeClass("no-scroll");
      }
    }
  },
  methods: {
    getTreatments() {
      axios
        .get(
          `${process.env.VUE_APP_BASE_URL_API}/treatment/list/by-category/${this.categoryId}`,
          {
            params: {
              sortBy: "order",
              sortType: "asc",
              availability: "web"
            }
          }
        )
        .then(response => {
          this.treatments = response.data.result.treatment;
        });
    }
  }
};
</script>

<style scoped>
.oy-popup {
  height: 70vh !important;
}
</style>
