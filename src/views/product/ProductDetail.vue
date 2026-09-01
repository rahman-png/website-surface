<template>
  <div id="product-detail-page">
    <product-menu></product-menu>
    <cart-right-bar></cart-right-bar>
    <div id="m-mobile" class="container top90px">
      <div class="row mb80">
        <div class="col-lg-6">
          <div
            class="xs akkurat text-uppercase mb-1 top50px grey"
            v-if="product.utility !== undefined"
          >
            {{ product.utility.tagline }}
          </div>
          <div class="headingm font-bold text-uppercase mb12">
            {{ product.title }}
          </div>
          <div class="box-star-review mb15" v-if="product.rating">
            <!-- <div class="for-star">
              <star-rating
                :rating="product.rating.avg"
                :increment="0.5"
                :read-only="true"
                :show-rating="false"
                :star-size="10"
                :padding="7"
                :rounded-corners="false"
                :border-width="3"
                :active-border-color="'#ffd055'"
                :border-color="'#ffd055'"
                :inactive-color="'#fff'"
              ></star-rating>
            </div> -->
            <div class="for-star-p">
              <img
                src="https://demoapp.xyz/surface-digital/img/single-star.svg"
                class="img-fluid"
              />
              <span class="s grey ml-1 font-medium">{{
                product.rating.avg
              }}</span>
            </div>
            <div class="for-text-review font-medium">
              {{ product.rating.count }} Reviews
            </div>
          </div>
          <p class="s mb15 grey" v-html="product.excerpt"></p>

          <p class="m mb30">
            <!-- <span
              class="l dark-font font-medium"
              v-if="product.price !== undefined"
            >
              {{ product.price.default | format_k_currency }}
            </span> -->
            <span
              class="discount"
              v-if="product.price !== undefined && product.price.sale > 0"
            >
              {{ product.price.regular | format_k_currency }}
            </span>
            <span
              class="l dark-font font-medium"
              v-if="product.price !== undefined"
            >
              {{ product.price.default | format_k_currency }}
            </span>
            <span v-if="product.package !== ''">
              for {{ product.package }}
            </span>
          </p>

          <template v-if="product.stock > 0">
            <div
              class="d-flex align-items-center my-4"
              v-if="product.color.length"
            >
              <div class="akkurat text-uppercase grey s mr-3">
                Customize your packaging
              </div>

              <div class="color-choose">
                <template v-for="(color, index) in product.color">
                  <div
                    class="box-vc mr-2"
                    :key="index"
                    :class="{
                      activeVariant: selectedVariant == color.id
                    }"
                    @click="selectPackage(color.id)"
                  >
                    <div class="vc-1">
                      <div
                        class="vc-1 top"
                        :style="{ backgroundColor: color.hex[0] }"
                      ></div>
                      <div
                        class="vc-1 bottom"
                        :style="{ backgroundColor: color.hex[1] }"
                      ></div>
                    </div>
                  </div>
                </template>
              </div>
            </div>
            <div class="box-info mb30">
              <span class="xs" v-html="product.description"></span>
              <template
                v-if="
                  product.popup !== undefined &&
                    product.popup.title != '' &&
                    product.popup.text != ''
                "
              >
                <a @click="showPopUp = true" class="link-underline">
                  Know More
                </a>
              </template>
              <div class="rx-button" v-if="product.has_survey">
                <div class="btn-sm-top double left">R</div>
                <div class="btn-sm-top double right">X</div>
              </div>
            </div>
            <div class="row mb60">
              <div class="col-sm-5 col-lg-4">
                <div class="input-group border-otc btn-mm">
                  <span class="input-group-btn">
                    <button
                      @click="decrementQty"
                      type="button"
                      class="quantity-left-minus btn btn-min"
                      data-type="minus"
                      data-field=""
                    >
                      <img src="/img/minus.svg" />
                    </button>
                  </span>
                  <input
                    v-model="quantity"
                    type="number"
                    id="quantity"
                    name="quantity"
                    class="form-control input-number"
                    value="1"
                    min="1"
                    max="100"
                    step="1"
                  />
                  <span class="input-group-btn">
                    <button
                      @click="incrementQty"
                      type="button"
                      class="quantity-right-plus btn btn-plus"
                      data-type="plus"
                      data-field=""
                    >
                      <img src="/img/plus-icon.svg" />
                    </button>
                  </span>
                </div>
              </div>
              <div class="col-sm-5  col-lg-7">
                <button
                  type="button"
                  @click="addToCart"
                  href="#"
                  class="btn btn-solid f100 mb20"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="row mb60">
              <div class="col-sm-5  col-lg-6">
                <button type="button" class="btn btn-solid f100 mb20">
                  Out of stock
                </button>
              </div>
            </div>
          </template>
          <ul
            v-if="
              product.tab !== undefined &&
                (product.tab.ingredient != '' ||
                  product.tab.usage != '' ||
                  product.tab.info != '')
            "
            id="mytab"
            class="nav nav-tabs pb30px"
            role="tablist"
          >
            <li class="nav-item" v-if="product.tab.usage != ''">
              <a
                class="nav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#tab01"
                role="tab"
                aria-selected="true"
                >How to use</a
              >
            </li>
            <li class="nav-item" v-if="product.tab.info != ''">
              <a
                class="nav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#tab02"
                role="tab"
                aria-selected="false"
                >Information</a
              >
            </li>
            <li class="nav-item" v-if="product.tab.ingredient != ''">
              <a
                class="nav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#tab03"
                role="tab"
                aria-selected="false"
                >Ingredients</a
              >
            </li>
          </ul>
          <div
            class="tab-content pb30px"
            id="nav-tabContent"
            v-if="product.tab !== undefined"
          >
            <div
              v-if="product.tab.ingredient != ''"
              class="tab-pane fade"
              id="tab03"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <p
                class="s mw500"
                style="margin-bottom: 20px"
                v-html="product.tab.ingredient"
              ></p>
              <router-link
                to="/surfaceplus/ingredients"
                class="link-underline xs"
              >
                Learn more about our ingredients
              </router-link>
            </div>
            <div
              v-if="product.tab.usage != ''"
              class="tab-pane fade show active"
              id="tab01"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <p class="s mw500 mb30" v-html="product.tab.usage"></p>
            </div>
            <div
              v-if="product.tab.info != ''"
              class="tab-pane fade"
              id="tab02"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <p class="s mw500" v-html="product.tab.info"></p>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <template v-for="(slider, index) in sliders">
                <li
                  :id="`slide${index}`"
                  data-target="#carouselExampleIndicators"
                  :data-slide-to="index"
                  :key="index"
                  :class="{ active: index == 0 }"
                ></li>
              </template>
            </ol>
            <div class="carousel-inner">
              <template v-for="(slider, index) in sliders">
                <div
                  class="carousel-item"
                  :key="index"
                  :class="{ active: index == 0 }"
                >
                  <template v-if="slider.type == 'image'">
                    <img :src="slider.file" class="d-block w-100" alt="..." />
                  </template>
                  <template v-else>
                    <video controls class="w100 video">
                      <source :src="slider.file" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </template>
                </div>
              </template>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>

      <div class="box-level">
        <template
          v-if="
            product.strength_level !== undefined &&
              product.strength_level.length > 0
          "
        >
          <div class="mw500">
            <div class="sh-s font-medium  mb12">
              Available in {{ product.strength_level.length }} different levels
            </div>
            <p class="m grey mb50">
              Based on your online visit, our doctor will prepare a personlised
              product for you with the strength that is perfect for your skin.
            </p>
          </div>

          <div class="mb80">
            <div class="row">
              <template v-for="(strength, index) in product.strength_level">
                <div class="col-lg-4 col-sm-6" :key="index">
                  <div class="box-inner-level mb50">
                    <div class="m font-bold mb12">
                      {{ strength.title }}
                    </div>
                    <div class="d-flex mb12">
                      <div class="water-icon">
                        <img src="/img/water-icon.svg" class="img-fluid" />
                      </div>
                      <div class="s grey">
                        {{ strength.ingredient }}
                      </div>
                    </div>
                    <p class="s grey" v-html="strength.desc"></p>

                    <div class="level">
                      <template v-for="n in Number(strength.level)">
                        <div class="inner-level" :key="n"></div>
                      </template>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </template>
        <div class="sh-s mb40">Recommended Products</div>
        <div class="row">
          <template v-for="(related, index) in relateds">
            <div class="col-sm-6 col-lg-3" :key="index">
              <router-link :to="`/product/${related.id}`" class="hp-box">
                <div class="box-img-product mb15">
                  <div class="rx-button" v-if="related.has_survey">
                    <button class="btn btn-sm-top left">R</button>
                    <button class="btn btn-sm-top right">X</button>
                  </div>
                  <img :src="related.thumbnail" class="w100" />
                  <div class="hover-box">
                    <p class="xs" v-html="related.excerpt"></p>
                  </div>
                </div>

                <div class="row  mb40">
                  <div class="col-7">
                    <p class="s">{{ related.title }}</p>
                  </div>
                  <div class="col-5">
                    <p class="xs font-medium text-right">
                      {{ related.price.default | format_k_currency }}
                    </p>
                  </div>
                </div>
              </router-link>
            </div>
          </template>
        </div>
        <product-review :productId="product.id"></product-review>
      </div>
    </div>

    <popup
      v-if="
        product.popup !== undefined &&
          product.popup.title != '' &&
          product.popup.text != ''
      "
      :show="showPopUp"
      :data="product.popup"
      @close="showPopUp = false"
    ></popup>
  </div>
</template>

<script>
import axios from "axios";
import ProductMenu from "@/components/ProductMenu.vue";
import Popup from "@/components/ProductPopUp.vue";
import ProductReview from "@/components/ProductReview.vue";
import CartRightBar from "@/components/CartRightBar.vue";
import moment from "moment";
// import StarRating from "vue-star-rating";

export default {
  name: "ProductDetail",
  components: {
    ProductMenu,
    Popup,
    ProductReview,
    CartRightBar
    // StarRating
  },
  metaInfo() {
    return {
      title: this.meta.title
    };
  },
  data() {
    return {
      meta: {
        title: null
      },
      showPopUp: false,
      quantity: 1,
      product: {
        price: {
          default: 0,
          regular: 0,
          sale: 0
        }
      },
      relateds: [],
      selectedVariant: 0,
      sliders: []
    };
  },
  mounted() {
    this.fetchProduct();

    // mixpanel tracking
    this.trackMixPanelEvent("View Product", {
      source: "web",
      timestamp: moment(),
      user_id: this.$store.state.userData
        ? this.$store.state.userData.userId
        : null,
      login_status: this.$store.state.userData ? true : false,
      name: this.product.name
    });
  },
  methods: {
    fetchProduct() {
      let loader = this.$loading.show({
        container: null,
        lockScroll: true,
        opacity: 1
      });
      axios
        .get(
          `${process.env.VUE_APP_BASE_URL_API_CONTENT}/wp-json/surface/v1/products/${this.$route.params.id}`
        )
        .then(response => {
          console.log(response.data);
          this.product = response.data.product;
          this.relateds = response.data.related_products.products;
          this.meta.title = this.product.title;

          this.product.video.forEach(item => {
            this.sliders.push({
              type:
                item.video !== "" && item.video !== null && item !== undefined
                  ? "video"
                  : "image",
              file:
                item.video !== "" && item.video !== null && item !== undefined
                  ? item.video
                  : item.img,
              id: item.color
            });
          });

          this.trackEvent("View Product", {
            timestamp: moment().format("DD MMMM YYYY H:mm:ss"),
            login_status: this.$store.state.userData ? true : false,
            user_id: this.$store.state.userData
              ? this.$store.state.userData.userId
              : null,
            name: this.product.title,
            currency: "IDR",
            value: this.product.price.default
          });
          this.trackFacebookPixelEvent("ViewContent", {
            content_category: "product_detail",
            content_type: "product",
            content_ids: this.product.id,
            content_name: this.product.title,
            currency: "IDR",
            value: this.product.price.default
          });
        })
        .then(() => {
          loader.hide();
        });
    },
    selectPackage(color) {
      this.selectedVariant = color;
      const index = this.sliders.findIndex(slide => slide.id == color);
      document.getElementById(`slide${index}`).click();
    },
    incrementQty() {
      this.quantity = this.quantity + 1;
    },
    decrementQty() {
      if (this.quantity <= 1) {
        this.quantity = 1;
      } else {
        this.quantity = this.quantity - 1;
      }
    },
    addToCart() {
      // do logic add to cart
      if (!this.$store.state.userData) {
        this.$store.commit("SET_RECENT_PRODUCT", this.product.id);
        this.$router.push("/sign-in");
      } else {
        let color = null;
        if (this.product.color.length) {
          const findColor = this.product.color.find(
            c => c.id === this.selectedVariant
          );
          if (findColor) {
            color = findColor.id;
          }
        }
        axios
          .post(
            `${process.env.VUE_APP_BASE_URL_API_CONTENT}/wp-json/surface/v1/cart/add`,
            {
              product_id: this.product.id,
              quantity: this.quantity,
              color: color
            },
            {
              headers: {
                Authorization: `Bearer ${this.$store.getters.wooCommereceToken}`
              }
            }
          )
          .then(response => {
            console.log(response.data);
            // show cart
            this.$store.commit("SHOW_CART", true);
            this.trackEvent("Add To Cart", {
              timestamp: moment()
                .format("DD MMMM YYYY H:mm:ss")
                .toString(),
              user_id: this.$store.state.userData.userId,
              name: this.product.title,
              quantity: this.quantity,
              price: this.product.price.default
            });
            this.trackFacebookPixelEvent("AddToCart", {
              content_category: "product_detail",
              content_type: "product",
              content_ids: this.product.id,
              content_name: this.product.title,
              num_items: this.quantity,
              currency: "IDR",
              value: this.product.price.default
            });
            // mixpanel tracking
            this.trackMixPanelEvent("Add To Cart", {
              source: "web",
              timestamp: moment()
                .format("DD MMMM YYYY H:mm:ss")
                .toString(),
              user_id: this.$store.state.userData.userId,
              name: this.product.title,
              quantity: this.quantity,
              price: this.product.price.default
            });
          });
      }
    }
  }
};
</script>

<style scoped>
.activeVariant {
  border: 1px solid #161613;
}
.video {
  margin-top: 50%;
  display: block;
}
</style>
