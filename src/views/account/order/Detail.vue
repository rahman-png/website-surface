<template>
  <div id="m-mobile" class="container m-su">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mb40">
        <li class="breadcrumb-item">
          <router-link to="/account" class="link-blue s">Account</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link to="/account/order" class="link-blue s">
            Your orders
          </router-link>
        </li>
        <li class="breadcrumb-item active s" aria-current="page">
          Order details
        </li>
      </ol>
    </nav>

    <template v-if="order !== null">
      <div class="mw500 f100">
        <div class="headingm text-uppercase font-bold mb60">
          Order {{ order.id }}
        </div>
      </div>

      <div class="box-track mb60" style="display: none;">
        <div class="for-track">
          <ul class="progressbar">
            <li class="active">
              Order placed
              <span>27 Nov</span>
            </li>
            <li class="active bold">
              Doctor’s approval
              <span>27 Nov</span>
            </li>
            <li class="current">
              Packed
              <span>27 Nov</span>
            </li>
            <li>
              Shipped
              <span>27 Nov</span>
            </li>
            <li>
              Delivered
              <span>27 Nov</span>
            </li>
          </ul>
        </div>
        <div class="track-btn">
          <a href="#" class="btn btn-grey btn-block btn-mm">Contact Support</a>
        </div>
      </div>

      <div class="box-bag mb50">
        <div class="heading-cart">
          <div class="column-1">
            <div class="m font-medium">Product</div>
          </div>
          <div class="column-2">
            <div class="m font-medium">Price / unit</div>
          </div>
          <div class="column-3">
            <div class="m font-medium">Quantity</div>
          </div>
          <div class="column-4">
            <div class="m font-medium">Total</div>
          </div>
        </div>

        <template v-for="(product, index) in order.products">
          <div class="item-cart" :key="index">
            <div class="item-cart-img">
              <img :src="product.thumbnail" class="img-fluid w100" />
              <div class="level green" style="display: none">
                <div class="inner-level"></div>
                <div class="inner-level"></div>
              </div>
            </div>
            <div class="item-cart-desc">
              <div class="ic-desc-row mb40">
                <div class="ic-collumn-1">
                  <div class="m mb8">{{ product.name }}</div>
                  <p class="grey s">{{ product.package }}</p>
                </div>
                <div class="ic-collumn-2">
                  <p class="m">{{ product.price | format_k_currency }}</p>
                </div>
                <div class="ic-collumn-3 do">
                  <p class="m font-medium text-center">
                    {{ product.quantity }}
                  </p>
                </div>
                <div class="ic-collumn-4 do">
                  <p class="m font-medium">
                    {{ product.total | format_k_currency }}
                  </p>
                </div>
              </div>
              <div class="box-info full" v-if="product.has_survey">
                This is a prescription product. You will need to fill out an
                online survey before purchasing. Based on your survey, our
                doctor will prepare the strength level of the product most
                suitable for your skin.
                <a href="#" class="link-underline">Know More</a>

                <div class="rx-button">
                  <div class="btn-sm-top left">R</div>
                  <div class="btn-sm-top right">X</div>
                </div>
              </div>
            </div>
          </div>
        </template>

        <div class="item-cart-footer">
          <div class="order-note">
            <div class="m grey">Order Note</div>
            <div class="note">{{ order.notes }}</div>
          </div>
          <div class="total-ci order-2">
            <div class="m grey">Total</div>
            <div class="sh-s">{{ order.total | format_k_currency }}</div>
          </div>
          <div class="m grey support order-1"></div>
        </div>
      </div>

      <div class="row mb80">
        <div class="col-lg-4 col-sm-6">
          <div class="mw300 f100">
            <div class="sh-s mb25">Shipping address</div>
            <p class="s grey mb15">
              {{ order.address.shipping.address_1 }}
              {{ order.address.shipping.address_2 }},
              {{ order.address.shipping.district }},
              {{ order.address.shipping.city }},
              {{ order.address.shipping.state }},
              {{ order.address.shipping.postcode }}
            </p>
            <p class="s grey mb15">
              {{ order.address.shipping.first_name }}
              {{ order.address.shipping.last_name }}
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="mw300 f100">
            <div class="sh-s mb25">Billing address</div>
            <p class="s grey mb15">
              {{ order.address.billing.address_1 }}
              {{ order.address.billing.address_2 }},
              {{ order.address.billing.district }},
              {{ order.address.billing.city }},
              {{ order.address.billing.state }},
              {{ order.address.billing.postcode }}
            </p>
            <p class="s grey mb15">{{ order.address.billing.email }}</p>
            <p class="s grey mb15">{{ order.address.billing.phone }}</p>
          </div>
        </div>
        <div
          class="col-lg-4 col-sm-6"
          v-if="
            order.payment_method.channel !== 'gopay' &&
              order.payment_method.channel !== 'credit_card'
          "
        >
          <div class="mw300 f100" v-if="order.payment_info !== null">
            <div class="sh-s">Payment instructions</div>
            <div id="accordion" class="s grey mb40">
              <template v-for="(info, index) in order.payment_info">
                <div class="card w-100" :key="index">
                  <a
                    class="card-header"
                    :class="{ collapsed: showPaymentInfo != index }"
                    id="tab1-h1"
                    data-toggle="collapse"
                    :data-target="`tab1-c${index}`"
                    :aria-expanded="[showPaymentInfo == index ? true : false]"
                    aria-controls="tab1-content-1"
                    @click="
                      showPaymentInfo = showPaymentInfo == index ? null : index
                    "
                    style="font-size: 16px"
                  >
                    {{ info.title }}
                  </a>

                  <div
                    :id="`tab1-c${index}`"
                    class="collapse"
                    :class="{ show: showPaymentInfo == index }"
                    aria-labelledby="tab1-headingOne"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      <p class="s" v-html="info.text"></p>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "OrderDetail",
  metaInfo: {
    title: "Detail Order"
  },
  data() {
    return {
      order: null,
      showPaymentInfo: null
    };
  },
  mounted() {
    this.fetchDetailOrder();
  },
  methods: {
    fetchDetailOrder() {
      const loader = this.$loading.show({
        container: null,
        lockScroll: true,
        opacity: 1
      });
      axios
        .get(
          `${process.env.VUE_APP_BASE_URL_API_CONTENT}/wp-json/surface/v1/account/orders/${this.$route.params.id}`,
          {
            headers: {
              Authorization: `Bearer ${this.$store.getters.wooCommereceToken}`
            }
          }
        )
        .then(response => {
          if (response.data.status == "ok") {
            this.order = response.data.data;
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
