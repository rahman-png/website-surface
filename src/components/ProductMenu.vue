<template>
  <div class="sticky-menu">
    <div class="container">
      <div class="bottom-menu">
        <div class="placeholder"></div>

        <ul class="menu-item">
          <li class="list-menu">
            <a href="#" class="link-item">Concerns</a>

            <div class="sub-menu-item">
              <div class="container">
                <div class="content">
                  <ul class="sb-list" v-if="concerns.length">
                    <li v-for="(concern, index) in concerns[0]" :key="index">
                      <router-link
                        :to="`/product?concern=${concern.id}`"
                        class="item-1-link"
                      >
                        {{ concern.name.toUpperCase() }}
                      </router-link>
                    </li>
                  </ul>

                  <ul class="sb-list" v-if="concerns.length">
                    <li v-for="(concern, index) in concerns[1]" :key="index">
                      <router-link
                        :to="`/product?concern=${concern.id}`"
                        class="item-1-link"
                      >
                        {{ concern.name.toUpperCase() }}
                      </router-link>
                    </li>
                  </ul>

                  <div>
                    <img src="/img/Concern-Menu-Bar.jpeg" class="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="list-menu">
            <router-link to="/product" class="link-item">
              Products
            </router-link>

            <div class="sub-menu-item">
              <div class="container">
                <div class="content">
                  <ul class="sb-list">
                    <li v-for="(category, index) in categories" :key="index">
                      <router-link
                        :to="`/product?category=${category.id}`"
                        class="item-1-link"
                      >
                        {{ category.name.toUpperCase() }}
                      </router-link>
                    </li>
                  </ul>
                  <div>
                    <img src="/img/Products-Menu-Bar.jpeg" class="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="list-menu">
            <a href="#" class="link-item">Collections</a>

            <div class="sub-menu-item">
              <div class="container">
                <div class="content">
                  <ul class="sb-list">
                    <li v-for="(collection, index) in collections" :key="index">
                      <router-link
                        :to="`/product?collection=${collection.id}`"
                        class="item-1-link"
                      >
                        {{ collection.name.toUpperCase() }}
                      </router-link>
                    </li>
                  </ul>
                  <div>
                    <img
                      src="/img/Collection-Menu-Bar.jpeg"
                      class="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <a href="#" @click="$store.commit('SHOW_CART', true)" class="cart">
          <img src="/img/cart.svg" />
        </a>

        <div class="overlay-sb"></div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import axios from "axios";

export default {
  name: "ProductMenu",
  data() {
    return {
      categories: [],
      concerns: [],
      collections: []
    };
  },
  created() {
    let lastScroll = 0;
    $(window).on("scroll", function() {
      var scroll = $(window).scrollTop();
      if (lastScroll - scroll > 0) {
        $(".sticky-menu").addClass("h80");
      } else {
        $(".sticky-menu").removeClass("h80");
      }
      lastScroll = scroll;
    });
    $(".link-item").hover(
      () => {
        $(".overlay-sb").addClass("showing");
      },
      () => {
        $(".overlay-sb").removeClass("showing");
      }
    );
    $(".sub-menu-item").hover(
      () => {
        $(".overlay-sb").addClass("showing");
      },
      () => {
        $(".overlay-sb").removeClass("showing");
      }
    );
  },
  mounted() {
    this.fetchSegment();
  },
  methods: {
    fetchSegment() {
      const loader = this.$loading.show({
        container: null,
        lockScroll: true,
        opacity: 1
      });
      axios
        .get(
          `${process.env.VUE_APP_BASE_URL_API_CONTENT}/wp-json/surface/v1/products/segment`
        )
        .then(response => {
          if (response.data.status == "ok") {
            this.categories = response.data.data.category;
            this.collections = response.data.data.collection;
            const concerns = response.data.data.concern;
            this.concerns = this.bagi2(concerns);
          }
          loader.hide();
        })
        .catch(() => {
          loader.hide();
        });
    },
    bagi2(array) {
      const hasilBagi = Math.floor(array.length / 2);
      const sisaBagi = Math.floor(array.length % 2);

      let firstArray = [];
      let secondArray = [];

      for (let index = 0; index < hasilBagi; index++) {
        const element = array[index];
        firstArray.push(element);
      }

      if (sisaBagi > 0) {
        firstArray.push(array[hasilBagi]);
        for (let index = hasilBagi + 1; index <= hasilBagi * 2; index++) {
          const element = array[index];
          secondArray.push(element);
        }
      } else {
        for (let index = hasilBagi; index < hasilBagi * 2; index++) {
          const element = array[index];
          secondArray.push(element);
        }
      }

      return [firstArray, secondArray];
    }
  }
};
</script>
