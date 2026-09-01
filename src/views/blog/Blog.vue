<template>
  <div id="blog-page">
    <div id="b-slider" class="swiper-container top80px bg-white">
      <swiper class="swiper-wrapper">
        <swiper-slide v-for="(slider, index) in sliders" :key="index">
          <div class="row no-gutters align-items-center">
            <div class="col-xl-6 col-lg-6" data-aos="fade-right">
              <img :src="slider.thumbnail" class="img-fluid w100 pr50px" />
            </div>

            <div class="col-xl-6 col-lg-6">
              <div
                class="pad-slider slider-wrap"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <p class="xs mb20 akkurat grey">
                  <template v-if="slider.tags.length">
                    {{ slider.tags[0].name.toUpperCase() }}
                  </template>
                </p>
                <div class="headingxl mb25" v-html="slider.title"></div>
                <p class="m mb60 mw350" v-html="slider.excerpt"></p>
                <router-link :to="`/blog/${slider.slug}`" class="wc-link">
                  Read More
                </router-link>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>

      <div class="for-arrow-blog">
        <div class="b-arrow swiper-button-prev"></div>
        <div class="b-arrow swiper-button-next"></div>
      </div>
    </div>

    <div class="light-green">
      <div class="container">
        <div class="pt100px pb100px">
          <div class="box-search">
            <swiper
              id="tag-slide"
              class="swiper-container"
              ref="tagSwiper"
              :options="categorySwiperOptions"
            >
              <div class="swiper-slide">
                <a href="#" class="link-tag active">All Categories</a>
              </div>
              <template v-for="(category, index) in categories">
                <swiper-slide :key="index" style="width: fit-content!important">
                  <router-link
                    :to="
                      `/blog-search?category=${category.id}.${category.name}`
                    "
                    class="link-tag"
                  >
                    {{ category.name }}
                  </router-link>
                </swiper-slide>
              </template>
            </swiper>

            <form class="searchbox" method="GET" action="/blog-search">
              <input
                type="text"
                placeholder="Search for topics"
                name="search"
                class="searchbox-input"
                v-model="search"
                required
              />
              <input type="submit" class="searchbox-submit" />
              <span class="searchbox-icon">
                <div class="box-icon">
                  <i
                    id="icon-times"
                    class="fa fa-search"
                    aria-hidden="true"
                  ></i>
                </div>
              </span>
            </form>
          </div>
        </div>

        <template v-if="blogByCategory.length">
          <div>
            <div
              class="sh-s pb50px"
              :id="`blog_section_${blogByCategory[0].id}`"
            >
              {{ blogByCategory[0].name }}
            </div>
            <div class="row">
              <template v-for="(blog, index) in blogByCategory[0].blog">
                <div
                  :key="index"
                  class="col-xl-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <router-link :to="`/blog/${blog.slug}`" class="hp-box">
                    <img :src="blog.thumbnail" class="w100" />
                    <div class="white-card">
                      <p class="xs mb15">
                        <template v-if="blog.tags.length">
                          {{ blog.tags[0].name.toUpperCase() }}
                        </template>
                      </p>
                      <h5 class="m mb-3" v-html="blog.title"></h5>
                      <p class="s mb25" v-html="blog.excerpt"></p>
                      <router-link :to="`/blog/${blog.slug}`" class="blog-link">
                        Read More
                        <img src="/img/arrow.svg" class="arrow-link" />
                      </router-link>
                    </div>
                  </router-link>
                </div>
              </template>
            </div>
            <div class="d-flex padding-btn justify-content-center pb120">
              <router-link
                :to="
                  `/blog-search?category=${blogByCategory[0].id}.${blogByCategory[0].name}`
                "
                class="btn-solid text-center"
              >
                View all {{ blogByCategory[0].name }}
              </router-link>
            </div>
          </div>
        </template>
      </div>
    </div>

    <div class="subscribe">
      <div class="container">
        <div class="row align-items-center">
          <div
            class="col-xl-7 col-sm-5"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h4 class="sh-m">Subscribe to our newsletter.</h4>
          </div>
          <div
            class="col-xl-5 col-sm-7"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <form
              class="d-flex"
              id="sib-form"
              method="POST"
              action="https://a35c7d39.sibforms.com/serve/MUIEAP_TO94NIwM_q5zpz7qLnB5mBMwZkkSZd4iSbM3jldmatbYm8wCl48-KNLAY1gyLvSDCHbUQMr5_lHl5VdBCz36An9RKnxyT_br_H55_wezUrt7OCiXlXcCdeDQMGmB8uhyBej9_cJBJzYfSVqoJOeDNeKZtGjinaeGZfubtZ7iny00tJzEck2spvT82b5OaFMVDrXPYmPM4"
              target="_blank"
            >
              <input type="hidden" name="locale" value="en" />
              <input type="hidden" name="html_type" value="simple" />
              <div class="flex-grow-1 right30px">
                <input
                  type="email"
                  class="form-control sub-form"
                  placeholder="your email address"
                  id="EMAIL"
                  name="EMAIL"
                />
              </div>
              <button type="submit" class="btn btn-sub">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="light-green">
      <div class="container">
        <template v-for="(category, index) in blogByCategory">
          <template v-if="index > 0">
            <div :key="index">
              <div
                class="sh-s"
                :class="{
                  'padding-btn': index == 1,
                  pt120: index == 1,
                  pb50px: index > 1
                }"
                :id="`blog_section_${category.id}`"
              >
                {{ category.name }}
              </div>
              <div class="row">
                <template v-for="(blog, step) in category.blog">
                  <div
                    :key="step"
                    class="col-xl-4 col-md-6"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <router-link :to="`/blog/${blog.slug}`" class="hp-box">
                      <img :src="blog.thumbnail" class="w100" />
                      <div class="white-card">
                        <p class="xs mb15">
                          <template v-if="blog.tags.length">
                            {{ blog.tags[0].name.toUpperCase() }}
                          </template>
                        </p>
                        <h5 class="m mb-3" v-html="blog.title"></h5>
                        <p class="s mb25" v-html="blog.excerpt"></p>
                        <router-link
                          :to="`/blog/${blog.slug}`"
                          class="blog-link"
                        >
                          Read More
                          <img src="/img/arrow.svg" class="arrow-link" />
                        </router-link>
                      </div>
                    </router-link>
                  </div>
                </template>
              </div>
              <div class="d-flex padding-btn justify-content-center pb120">
                <router-link
                  :to="`/blog-search?category=${category.id}.${category.name}`"
                  class="btn-solid text-center"
                >
                  View all {{ category.name }}
                </router-link>
              </div>
            </div>
          </template>
        </template>

        <!-- <div class="sh-s pb50px">Products for you</div>
        <div class="row">
          <div
            v-for="(product, index) in products"
            :key="index"
            class="col-xl-3 col-md-6"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <router-link :to="`/product/${product.id}`" class="hp-box">
              <div class="box260">
                <img :src="product.thumbnail" class="w100 mb15" />
                <div class="row">
                  <div class="col-7">
                    <p class="s">{{ product.title }}</p>
                  </div>
                  <div class="col-5">
                    <p class="xs font-medium text-right">
                      {{ product.price.default | format_k_currency }}
                    </p>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="d-flex padding-btn justify-content-center pb120">
          <router-link to="/product" class="btn-solid text-center">
            View all product
          </router-link>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import "slick-carousel/slick/slick.css";
import axios from "axios";
import $ from "jquery";
import moment from "moment";

export default {
  name: "Blog",
  metaInfo: {
    title: "Blog"
  },
  beforeCreate() {
    document.body.classList.add("blog-green");
    document.body.setAttribute("id", "blog");
  },
  beforeDestroy() {
    document.body.classList.remove("blog-green");
    document.body.removeAttribute("id");
  },
  data() {
    return {
      blogSwiperOptions: {
        slidesPerView: 1,
        freeMode: false,
        loop: true,
        centeredSlides: false,
        navigation: {
          nextEl: ".b-arrow.swiper-button-next",
          prevEl: ".b-arrow.swiper-button-prev"
        }
      },
      sliderOptions: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 2000
      },
      sliders: [],
      categories: [],
      categorySwiperOptions: {
        slidesPerView: "auto",
        freeMode: false,
        centeredSlides: false,
        breakpoints: {
          576: {
            slidesPerView: 2,
            freeMode: false
          },
          768: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 3
          },
          1200: {
            slidesPerView: "auto"
          }
        }
      },
      search: null,
      blogByCategory: [],
      products: []
    };
  },
  mounted() {
    this.fetchContent();
    this.fetchCategories();

    $(".searchbox-icon").click(() => {
      $(".box-icon").toggleClass("none");
    });
    var submitIcon = $(".searchbox-icon");
    var inputBox = $(".searchbox-input");
    var searchBox = $(".searchbox");
    var isOpen = false;
    submitIcon.click(function() {
      if (isOpen == false) {
        searchBox.addClass("searchbox-open");
        inputBox.focus();
        isOpen = true;
      } else {
        searchBox.removeClass("searchbox-open");
        inputBox.focusout();
        isOpen = false;
      }
    });
    submitIcon.mouseup(function() {
      return false;
    });
    searchBox.mouseup(function() {
      return false;
    });

    // mixpanel tracking
    this.trackMixPanelEvent("View Blog", {
      source: "web",
      timestamp: moment()
        .format("DD MMMM YYYY H:mm:ss")
        .toString(),
      user_id: this.$store.state.userData
        ? this.$store.state.userData.userId
        : null,
      login_status: this.$store.state.userData ? true : false
    });
  },
  methods: {
    fetchCategories() {
      axios
        .get(
          `${process.env.VUE_APP_BASE_URL_API_CONTENT}/wp-json/surface/v1/blog-category`
        )
        .then(response => {
          console.log(response.data);
          if (response.data.status == "ok") {
            this.categories = response.data.data;
            this.categories = this.categories.concat(this.categories);
          }
        });
    },
    fetchContent() {
      let loader = this.$loading.show({
        container: null,
        lockScroll: true,
        opacity: 1
      });
      axios
        .get(
          `${process.env.VUE_APP_BASE_URL_API_CONTENT}/wp-json/surface/v1/blog`
        )
        .then(response => {
          console.log(response.data);
          if (response.data.status == "ok") {
            const result = response.data.data;
            this.sliders = result.slider !== undefined ? result.slider : [];
            this.blogByCategory =
              result.category !== undefined ? result.category : [];
            this.products =
              result.products !== undefined ? result.products : [];
          }
        })
        .then(() => {
          loader.hide();
        })
        .then(() => {
          if (this.$route.hash !== "") {
            let section = this.$route.hash.replace("#", "");
            let element = document.getElementById(section);
            element.scrollIntoView(true);
          }
        });
    }
  }
};
</script>

<style scoped>
.swiper-button-prev,
.swiper-button-next {
  background-image: none;
}
.top80px {
  margin-top: 80px !important;
}
</style>
