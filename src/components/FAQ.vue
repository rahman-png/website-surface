<template>
  <div id="faq" class="section9 padding-last">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <div class="headingxl pb100px">Frequently Asked Questions</div>

          <swiper
            id="faq-slider"
            ref="spSwiper"
            :options="faqSwiperOptions"
            class="swiper-container nav nav-tabs mb60"
            role="tablist"
            data-aos="fade-up"
          >
            <swiper-slide v-for="(faq, index) in faqs" :key="index">
              <template>
                <div class="nav-item">
                  <a
                    class="nav-link faq"
                    :class="{ active: activeTab == index }"
                    :id="`${stringToSlug(faq.title)}-tab`"
                    data-toggle="tab"
                    :href="`#tab${index}`"
                    role="tab"
                    :aria-selected="activeTab == index"
                    @click="activeTab = index"
                  >
                    {{ faq.title }}
                  </a>
                </div>
              </template>
            </swiper-slide>
          </swiper>
          <div class="faq swiper-button-prev"></div>
          <div class="faq swiper-button-next"></div>
          <div
            class="tab-content pb50px"
            id="nav-tabContent"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <template v-for="(faq, index) in faqs">
              <div
                :key="index"
                class="tab-pane fade"
                :class="{
                  active: activeTab == index,
                  show: activeTab == index
                }"
                :id="`#tab${index}`"
                role="tabpanel"
                aria-labelledby="nav-general-tab"
              >
                <div :id="`accordion-${index}`">
                  <template v-for="(item, zindex) in faq.item">
                    <div class="card" :key="zindex">
                      <a
                        class="card-header faq-link collapsed"
                        :id="`tab${index}-h${zindex}`"
                        data-toggle="collapse"
                        :data-target="`#tab${index}-c${zindex}`"
                        aria-expanded="false"
                        :aria-controls="`tab${index}-content-${zindex}`"
                      >
                        {{ item.question }}
                      </a>

                      <div
                        :id="`tab${index}-c${zindex}`"
                        class="collapse"
                        :aria-labelledby="`tab${index}-heading${zindex}`"
                        :data-parent="`#accordion-${index}`"
                      >
                        <div class="card-body">
                          <p class="s" v-html="item.answer"></p>
                        </div>
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </template>
          </div>

          <h5 class="m grey" data-aos="fade-up" data-aos-duration="1000">
            Contact us anytime:
          </h5>
          <div
            class="l font-medium"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            hello@surfaceskinhabit.com
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-xl-4"></div>
          <div class="col-xl-8"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { directive } from "vue-awesome-swiper";
import axios from "axios";

export default {
  name: "FAQ",
  data() {
    return {
      faqs: [],
      activeTab: 0,
      faqSwiperOptions: {
        slidesPerView: "auto",
        freeMode: false,
        loop: true,
        centeredSlides: false,
        navigation: {
          nextEl: ".faq.swiper-button-next",
          prevEl: ".faq.swiper-button-prev"
        },
        breakpoints: {
          480: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 4,
            freeMode: false
          },
          1024: {
            slidesPerView: 4
          },
          1200: {
            slidesPerView: 5,
            freeMode: false
          }
        }
      }
    };
  },
  directives: {
    swiper: directive
  },
  mounted() {
    this.getFaq();
  },
  methods: {
    getFaq() {
      axios
        .get(
          `${process.env.VUE_APP_BASE_URL_API_CONTENT}/wp-json/surface/v1/faq`
        )
        .then(response => {
          if (response.data.status == "ok") {
            const result = response.data.data;
            this.faqs = result;
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
  top: 25% !important;
}
</style>
