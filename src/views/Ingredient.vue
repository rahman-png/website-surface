<template>
  <div id="ingredient-page">
    <product-menu></product-menu>
    <cart-right-bar></cart-right-bar>
    <div id="m-mobile" class="container">
      <img :src="banner" class="img-fluid w100 " />
    </div>

    <div class="content-box">
      <div class="container">
        <div class="mw600 mb60">
          <div class="headingxl font-bold text-uppercase mb25">{{ title }}</div>
          <p class="l grey" v-html="intro"></p>
        </div>
        <div class="row">
          <template v-for="(ing, index) in ingredients">
            <div class="col-lg-4 col-sm-6" :key="index">
              <div class="mw300 mb60">
                <div class="sh-xs mb8">{{ ing.title }}</div>
                <p class="grey s mb20" v-html="ing.excerpt"></p>
                <a href="#" @click="showPopUpDetail(ing.id)" class="wc-link"
                  >Read more <img src="/img/arrow.svg" class="arrow-link"
                /></a>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>

    <ingredient-pop-up
      :show="showPopUp"
      :ingredientId="showId"
      @close="showPopUp = false"
    ></ingredient-pop-up>
  </div>
</template>

<script>
import ProductMenu from "@/components/ProductMenu.vue";
import IngredientPopUp from "@/components/IngredientPopUp.vue";
import CartRightBar from "@/components/CartRightBar.vue";
import axios from "axios";

export default {
  name: "Ingredient",
  metaInfo: {
    title: "Ingredient"
  },
  components: {
    ProductMenu,
    IngredientPopUp,
    CartRightBar
  },
  data() {
    return {
      showId: null,
      showPopUp: false,
      banner: null,
      title: null,
      intro: null,
      ingredients: []
    };
  },
  mounted() {
    this.getIngredients();
  },
  methods: {
    showPopUpDetail(id) {
      this.showPopUp = true;
      this.showId = id;
    },
    getIngredients() {
      axios
        .get(
          `${process.env.VUE_APP_BASE_URL_API_CONTENT}/wp-json/surface/v1/ingredient`
        )
        .then(response => {
          console.log(response.data);
          if (response.data.status == "ok") {
            this.banner = response.data.data.banner;
            this.title = response.data.data.title;
            this.intro = response.data.data.text;
            this.ingredients = response.data.data.ingredient;
          }
        });
    }
  }
};
</script>
