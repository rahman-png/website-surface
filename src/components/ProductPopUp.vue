<template>
  <div id="product-pop-up">
    <div
      id="product-popup-content"
      class="popup-content-overlay green-bg"
      :class="{ 'overlay-show': show }"
    >
      <div class="container">
        <div class="product-popup" :class="{ 'popup-show': show }">
          <div class="popup-card-product">
            <div class="overflow-popup o-y">
              <div class="btn-close" @click="$emit('close')">
                <i class="fa fa-times"></i>
              </div>
              <div class="mw500 headingm mb20">{{ data.title }}</div>
              <p class="m mw500 mb50" v-html="data.text"></p>
              <div class="row mb50">
                <div class="col-sm-4">
                  <img src="/img/acne-1.svg" class="img-mh200" />
                </div>
                <div class="col-sm-4">
                  <img src="/img/acne-3.svg" class="img-mh200" />
                </div>
                <div class="col-sm-4">
                  <img src="/img/acne-2.svg" class="img-mh200" />
                </div>
              </div>
              <div class="sh-xs mb20" v-if="data.product_guide.length">
                Buying guide
              </div>
              <template v-for="(product, index) in data.product_guide">
                <div class="product-list mb50" :key="index">
                  <img :src="product.thumbnail" class="plp-img" />
                  <div class="desc-ppl">
                    <div class="m mb-1">{{ product.title }}</div>
                    <p class="s mw500 mb-1" v-html="product.excerpt"></p>
                    <router-link
                      :to="`/product/${product.id}`"
                      class="wc-link s"
                    >
                      Buy product
                      <img src="/img/arrow.svg" class="arrow-link" />
                    </router-link>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductPopUp",
  props: {
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
  }
};
</script>
