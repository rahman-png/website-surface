<template>
  <div id="ingredient-pop-up">
    <div
      class="popup-content-overlay green-bg"
      :class="{ 'overlay-show': show }"
    >
      <div class="container">
        <div class="ingeredient-popup" :class="{ 'popup-show': show }">
          <div class="popup-card-product">
            <div class="scroll-mobile o-y">
              <div class="btn-close" @click="closePopUp">
                <i class="fa fa-times"></i>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="mw450">
                    <div class="headingm text-uppercase font-bold mb20">
                      {{ ingredient.title }}
                    </div>
                    <p class="m mw500 mb50" v-html="ingredient.content"></p>

                    <div class="row mb60">
                      <div class="col-md-12">
                        <div class="sh-xs mb15">Target</div>
                        <template v-if="Array.isArray(ingredient.target)">
                          <template v-for="(ing, index) in ingredient.target">
                            <div class="d-flex mb15" :key="index">
                              <div class="mr-2">
                                <img
                                  src="/img/li-ingeredients.svg"
                                  class="list-ing"
                                />
                              </div>
                              <p class="s grey">{{ ing }}</p>
                            </div>
                          </template>
                        </template>
                        <template v-else>
                          <div class="d-flex mb15">
                            <div class="mr-2">
                              <img
                                src="/img/li-ingeredients.svg"
                                class="list-ing"
                              />
                            </div>
                            <p class="s grey">{{ ingredient.target }}</p>
                          </div>
                        </template>

                        <div class="sh-xs mb15 mt40">Benefits</div>
                        <template v-for="(ing, index) in ingredient.benefit">
                          <div class="d-flex mb15" :key="index">
                            <div class="mr-2">
                              <img
                                src="/img/li-ingeredients.svg"
                                class="list-ing"
                              />
                            </div>
                            <p class="s grey">{{ ing }}</p>
                          </div>
                        </template>
                      </div>
                    </div>

                    <!-- <div class="sh-xs mb15">
                      Why we prescribe {{ ingredient.title }}
                    </div>
                    <p class="s grey" v-html="ingredient.reason"></p> -->
                  </div>
                </div>

                <div class="col-lg-6">
                  <img :src="ingredient.thumbnail" class="w100 img-fluid" />
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
  name: "Ingredient-Detail",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    ingredientId: {
      type: Number,
      default: null
    }
  },
  watch: {
    ingredientId() {
      this.getIngredientDetail();
    }
  },
  data() {
    return {
      ingredient: {}
    };
  },
  methods: {
    closePopUp() {
      this.$emit("close");
    },
    getIngredientDetail() {
      axios
        .get(
          `${process.env.VUE_APP_BASE_URL_API_CONTENT}/wp-json/surface/v1/ingredient/${this.ingredientId}`
        )
        .then(response => {
          console.log(response.data);
          if (response.data.status == "ok") {
            this.ingredient = response.data.data;
          }
        });
    }
  }
};
</script>
