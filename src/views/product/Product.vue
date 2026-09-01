<template>
  <div id="product-page">
    <product-menu></product-menu>
    <cart-right-bar></cart-right-bar>
    <div class="content-box top90px">
      <div class="container">
        <template v-if="banner">
          <div class="row">
            <div class="col-lg-4 pr-0">
              <div class="box-heading-text r-tl r-bl">
                <div class="headingm font-bold text-uppercase mb15">
                  {{ banner.name }}
                </div>
                <p class="m grey">
                  {{ banner.description }}
                </p>
              </div>
            </div>
            <div class="col-lg-8 pl-0">
              <div class="r-tr r-br">
                <img :src="banner.thumbnail" />
              </div>
            </div>
          </div>
        </template>
        <template v-else-if="defaultBanner">
          <div class="row">
            <div class="col-lg-4 pr-0">
              <div class="box-heading-text r-tl r-bl">
                <div class="headingm font-bold text-uppercase mb15">
                  Products
                </div>
                <p class="m grey"></p>
              </div>
            </div>
            <div class="col-lg-8 pl-0">
              <div class="r-tr r-br">
                <img :src="defaultBanner" class="img-fluid w100" />
              </div>
            </div>
          </div>
        </template>
      </div>

      <div class="container">
        <div class="product-row">
          <div class="row">
            <div class="col-lg-3 col-sm-3 none-m">
              <div class="box260">
                <ul class="main-headline">
                  <li>
                    <a @click="resetFilter" class="link-side-top pointer">
                      SHOP ALL
                    </a>
                  </li>
                  <li>
                    <a
                      @click="otherFilter('best_seller')"
                      class="link-side-top pointer"
                    >
                      BEST SELLERS
                    </a>
                  </li>
                  <li>
                    <a
                      @click="otherFilter('sale')"
                      class="link-side-top pointer"
                    >
                      SALE
                    </a>
                  </li>
                  <li>
                    <a
                      @click="otherFilter('new')"
                      class="link-side-top pointer"
                    >
                      NEW!
                    </a>
                  </li>
                </ul>

                <hr class="hr-ws" />

                <div class="xs font-medium mb20">PRODUCTS</div>
                <ul class="item-side mb30">
                  <li v-for="(category, index) in categories" :key="index">
                    <a
                      class="link-side pointer"
                      :class="{ active: selectedCategory == category.id }"
                      @click.prevent="filterCategory(category.id)"
                    >
                      {{ category.name }}
                    </a>
                  </li>
                </ul>

                <div class="xs font-medium mb20">COLLECTIONS</div>
                <ul class="item-side">
                  <li v-for="(collection, index) in collections" :key="index">
                    <a
                      class="link-side pointer"
                      :class="{ active: selectedCollection == collection.id }"
                      @click.prevent="filterCollection(collection.id)"
                      >{{ collection.name }}</a
                    >
                  </li>
                </ul>

                <hr class="hr-ws" />

                <div class="xs font-medium mb20">CONCERNS</div>
                <template v-for="(concern, index) in concerns">
                  <div class="custom-control custom-checkbox mb12" :key="index">
                    <input
                      type="checkbox"
                      name="concern"
                      class="custom-control-input"
                      :id="`concern_${concern.id}`"
                      v-model="selectedConcern"
                      :value="concern"
                    />
                    <label
                      class="custom-control-label xs pad-side"
                      :for="`concern_${concern.id}`"
                      >{{ concern.name }}</label
                    >
                  </div>
                </template>
              </div>
            </div>

            <div class="col-lg-9 col-sm-9">
              <div class="filter-mobile mb30">
                <a
                  class="btn btn-for-filter"
                  data-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Filters
                </a>

                <template v-for="(filter, index) in selectedConcern">
                  <a href="#" class="tag-product mr-1 mb-0" :key="index">
                    <span>
                      {{ filter.name }}
                      <img
                        src="/img/x.svg"
                        class="xbtn"
                        @click="removeSelectedConcern(filter.id)"
                      />
                    </span>
                  </a>
                </template>

                <div class="collapse" id="collapseExample">
                  <div class="card card-body">
                    <div class="row">
                      <div class="col-6">
                        <div class="xs font-medium mb20">PRODUCTS</div>
                        <ul class="item-side mb30">
                          <li
                            v-for="(category, index) in categories"
                            :key="index"
                          >
                            <a
                              class="link-side pointer"
                              :class="{
                                active: selectedCategory == category.id
                              }"
                              @click.prevent="filterCategory(category.id)"
                            >
                              {{ category.name }}
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="col-6">
                        <div class="xs font-medium mb20">COLLECTIONS</div>
                        <ul class="item-side">
                          <li
                            v-for="(collection, index) in collections"
                            :key="index"
                          >
                            <a
                              class="link-side pointer"
                              :class="{
                                active: selectedCollection == collection.id
                              }"
                              @click.prevent="filterCollection(collection.id)"
                              >{{ collection.name }}</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                    <hr class="hr-ws" />

                    <div class="xs font-medium mb20">PRODUCTS</div>
                    <template v-for="(concern, index) in concerns">
                      <div
                        class="custom-control custom-checkbox mb12"
                        :key="index"
                      >
                        <input
                          type="checkbox"
                          name="concern"
                          class="custom-control-input"
                          :id="`concern_${concern.id}`"
                          v-model="selectedConcern"
                          :value="concern"
                        />
                        <label
                          class="custom-control-label xs pad-side"
                          :for="`concern_${concern.id}`"
                          >{{ concern.name }}</label
                        >
                      </div>
                    </template>
                  </div>
                </div>
              </div>
              <div class="filter-info">
                <div class="row align-items-center">
                  <div class="col-lg-8 col-sm-6">
                    <div class="none-m">
                      <template v-for="(filter, index) in selectedConcern">
                        <div class="tag-product m-2" :key="index">
                          <span>
                            {{ filter.name }}
                            <img
                              src="/img/x.svg"
                              class="xbtn pointer"
                              @click="removeSelectedConcern(filter.id)"
                            />
                          </span>
                        </div>
                      </template>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-6">
                    <div class="labelbox mb8 s">Sort by :</div>
                    <div class="box-fliter r12">
                      <select
                        class="form-control no-border filter-select"
                        v-model="sortBy"
                      >
                        <option value="1">
                          <span class="s font-medium">
                            Price low to high
                          </span>
                        </option>
                        <option value="2">
                          <span class="s font-medium">
                            Price high to low
                          </span>
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row" ref="productContainer">
                <template v-for="(product, index) in products">
                  <div class="col-lg-4 col-sm-6 col-6" :key="index">
                    <router-link :to="`/product/${product.id}`" class="hp-box">
                      <div class="box260 f100 fr mb60">
                        <div class="box-img-product mb15">
                          <div class="rx-button" v-if="product.has_survey">
                            <button class="btn btn-sm-top left">R</button>
                            <button class="btn btn-sm-top right">X</button>
                          </div>
                          <img :src="product.thumbnail" class="w100" />
                          <div class="hover-box">
                            <p class="s grey" v-html="product.excerpt"></p>
                          </div>
                        </div>

                        <div class="row mb15">
                          <div class="col-12">
                            <p class="m">{{ product.title }}</p>
                          </div>
                          <!-- <div class="col-5">
                            <p class="s font-medium text-right">
                              {{ product.price.default | format_k_currency }}
                            </p>
                          </div> -->
                        </div>
                        <div
                          class="row justify-content-between align-items-center"
                        >
                          <div class="col-6 col-sm-4">
                            <div class="for-star-p">
                              <img
                                src="https://demoapp.xyz/surface-digital/img/single-star.svg"
                                class="img-fluid"
                              />
                              <span class="s grey ml-1 font-medium">{{
                                product.rating.avg
                              }}</span>
                            </div>
                          </div>
                          <div class="col-6 col-sm-5">
                            <div
                              class="d-flex justify-content-end"
                              v-if="product.price.sale > 0"
                            >
                              <span class="discount">{{
                                product.price.regular | format_k_currency
                              }}</span>
                            </div>
                            <p class="s font-medium text-right">
                              {{ product.price.default | format_k_currency }}
                            </p>
                          </div>
                        </div>
                        <!-- <div class="box-star">
                          <star-rating
                            :rating="product.rating.avg"
                            :increment="0.5"
                            :read-only="true"
                            :show-rating="false"
                            :star-size="15"
                            :padding="7"
                            :rounded-corners="false"
                            :border-width="3"
                            :active-border-color="'#ffd055'"
                            :border-color="'#ffd055'"
                            :inactive-color="'#fff'"
                          ></star-rating>
                        </div> -->
                      </div>
                    </router-link>
                  </div>
                </template>
              </div>
              <div class="d-flex justify-content-center" v-if="showMore">
                <button @click="loadMore" type="button" class="btn btn-solid">
                  Load More
                </button>
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
import ProductMenu from "@/components/ProductMenu.vue";
import CartRightBar from "@/components/CartRightBar.vue";
import moment from "moment";
// import StarRating from "vue-star-rating";

export default {
  name: "Product",
  components: {
    ProductMenu,
    // StarRating,
    CartRightBar
  },
  metaInfo: {
    title: "Product"
  },
  data() {
    return {
      banner: null,
      defaultBanner: null,
      selectedConcern: [],
      selectedCollection: null,
      selectedCategory: null,
      products: [],
      page: 1,
      perPage: 9,
      categories: [],
      concerns: [],
      collections: [],
      discount: "",
      sortBy: 1,
      orderBy: {
        field: "price",
        direction: "ASC"
      },
      showMore: false
    };
  },
  async created() {
    await this.getBannerProduct();
    await this.fetchSegment();

    if (this.$route.query.category !== undefined) {
      this.selectedCategory = this.$route.query.category;
      this.selectBanner("category", this.$route.query.category);
      this.fetchProduct();
    } else if (this.$route.query.collection !== undefined) {
      this.selectedCollection = this.$route.query.collection;
      this.selectBanner("collection", this.$route.query.collection);
      this.fetchProduct();
    } else if (this.$route.query.concern !== undefined) {
      this.selectedConcern = this.concerns.filter(
        item => item.id == this.$route.query.concern
      );
    } else {
      this.fetchProduct();
    }
  },
  watch: {
    selectedConcern() {
      this.page = 1;
      this.products = [];
      this.fetchProduct();
    },
    selectedCategory(newVal) {
      const category = this.categories.find(category => category.id == newVal);
      // mixpanel tracking
      this.trackMixPanelEvent("View Category", {
        source: "web",
        timestamp: moment().format("DD MMMM YYYY H:mm:ss"),
        user_id: this.$store.state.userData
          ? this.$store.state.userData.userId
          : null,
        login_status: this.$store.state.userData ? true : false,
        category: category.name
      });
    },
    sortBy(newVal) {
      console.log(newVal);
      if (newVal == 1) {
        this.orderBy = {
          field: "price",
          direction: "ASC"
        };
      } else if (newVal == 2) {
        this.orderBy = {
          field: "price",
          direction: "DESC"
        };
      }
      this.page = 1;
      this.products = [];
      this.fetchProduct();
    }
  },
  methods: {
    async fetchSegment() {
      const loader = this.$loading.show({
        container: null,
        lockScroll: true,
        opacity: 1
      });
      await axios
        .get(
          `${process.env.VUE_APP_BASE_URL_API_CONTENT}/wp-json/surface/v1/products/segment`
        )
        .then(response => {
          if (response.data.status == "ok") {
            this.categories = response.data.data.category;
            this.concerns = response.data.data.concern;
            this.collections = response.data.data.collection;
          }
          loader.hide();
        })
        .catch(() => {
          loader.hide();
        });
    },
    fetchProduct() {
      const loader = this.$loading.show({
        container: this.$refs.productContainer,
        lockScroll: true,
        opacity: 1
      });
      axios
        .post(
          `${process.env.VUE_APP_BASE_URL_API_CONTENT}/wp-json/surface/v1/products`,
          {
            page: this.page,
            per_page: this.perPage,
            segment: {
              category:
                this.selectedCategory !== null ? [this.selectedCategory] : [],
              collection:
                this.selectedCollection !== null
                  ? [this.selectedCollection]
                  : [],
              concern: this.selectedConcern.map(item => item.id)
            },
            search: "",
            discount: this.discount,
            order: this.orderBy.direction,
            orderby: this.orderBy.field,
            min_price: "",
            max_price: ""
          }
        )
        .then(response => {
          if (response.data.status == "ok") {
            const result = response.data.data.products;
            this.products = [...this.products, ...result];
            if (this.page < response.data.data.max_page) {
              this.showMore = true;
            } else {
              this.showMore = false;
            }
          } else {
            this.showMore = false;
          }
          loader.hide();
        })
        .catch(() => {
          this.showMore = false;
          loader.hide();
        });
    },
    resetFilter() {
      this.selectedCategory = null;
      this.selectedCollection = null;
      this.selectedConcern = [];
      this.banner = null;
      this.page = 1;
      this.products = [];
      this.discount = null;
      this.sortBy = 1;
    },
    loadMore() {
      this.page = this.page + 1;
      this.fetchProduct();
    },
    removeSelectedConcern(id) {
      this.selectedConcern = this.selectedConcern.filter(
        data => data.id !== id
      );
    },
    filterCollection(id) {
      this.page = 1;
      this.selectedCollection = id;
      this.sortBy = 1;
      this.products = [];
      this.fetchProduct();
      this.selectBanner("collection", id);
    },
    filterCategory(id) {
      this.page = 1;
      this.selectedCategory = id;
      this.sortBy = 1;
      this.products = [];
      this.fetchProduct();
      this.selectBanner("category", id);
    },
    otherFilter(section) {
      if (section == "best_seller") {
        this.orderBy = {
          field: "best_seller",
          direction: "DESC"
        };
        this.page = 1;
        this.discount = "";
        this.products = [];
        this.fetchProduct();
      } else if (section == "sale") {
        this.page = 1;
        this.discount = "yes";
        this.sortBy = 1;
        this.products = [];
        this.fetchProduct();
      } else if (section == "new") {
        this.orderBy = {
          field: "date",
          direction: "DESC"
        };
        this.page = 1;
        this.discount = "";
        this.products = [];
        this.fetchProduct();
      }
    },
    selectBanner(type, id) {
      if (type == "category") {
        this.banner = this.categories.find(category => category.id == id);
        this.trackEvent("View Category", {
          timestamp: moment()
            .format("DD MMMM YYYY H:mm:ss")
            .toString(),
          login_status: this.$store.state.userData ? true : false,
          user_id: this.$store.state.userData
            ? this.$store.state.userData.userId
            : null,
          category: this.banner.name
        });
      } else {
        this.banner = this.collections.find(collection => collection.id == id);
      }
    },
    async getBannerProduct() {
      const loader = this.$loading.show({
        container: this.$refs.productContainer,
        lockScroll: true,
        opacity: 1
      });
      await axios
        .get(
          `${process.env.VUE_APP_BASE_URL_API_CONTENT}/wp-json/surface/v1/product-content`
        )
        .then(response => {
          if (response.data.status == "ok") {
            this.defaultBanner = response.data.data.banner;
          }
          loader.hide();
        })
        .then(() => {
          loader.hide();
        });
    }
  }
};
</script>

<style scoped>
/* .thumbnail {
  height: 406px;
  overflow: hidden;
  position: relative;
}
.thumbnail image {
  position: absolute;
  top: -9999px;
  bottom: -9999px;
  left: -9999px;
  right: -9999px;
  margin: auto;
}
.box-heading-text {
  min-height: 399px !important;
} */
</style>
