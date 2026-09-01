<template>
  <div id="m-mobile" class="container m-su">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mb40">
        <li class="breadcrumb-item">
          <router-link to="/account" class="link-blue s">Account</router-link>
        </li>
        <li class="breadcrumb-item active s" aria-current="page">
          Your orders
        </li>
      </ol>
    </nav>

    <div class="mw500 f100">
      <div class="headingm mb60">Your orders</div>
    </div>

    <template v-if="activeOrders.length || historyOrders.length">
      <ul id="mytab" class="nav nav-tabs pb30px" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link active"
            id="home-tab"
            data-toggle="tab"
            href="#tab01"
            role="tab"
            aria-selected="true"
            >Active Order</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="profile-tab"
            data-toggle="tab"
            href="#tab02"
            role="tab"
            aria-selected="false"
            >History</a
          >
        </li>
      </ul>
      <div class="tab-content pb30px" id="nav-tabContent">
        <div
          class="tab-pane fade show active"
          id="tab01"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <p class="s mw500 mb30"></p>
          <div class="row">
            <div class="col-lg-6">
              <template v-for="(order, index) in activeOrders">
                <div class="box-account mb25" :key="index">
                  <div class="sh-xs">{{ order.status | capitalize }}</div>
                  <p class="m grey mb25">on {{ date | date_time }}</p>
                  <router-link
                    :to="`/account/order/${order.id}`"
                    class="link-info-acc"
                  >
                    <template v-for="(product, step) in order.products">
                      <div class="d-flex mb-5" :key="step">
                        <div>
                          <img
                            :src="product.thumbnail"
                            class="img-mh100 mr-4 img-fluid"
                          />
                        </div>
                        <div class="desc-info">
                          <div class="m mb8">{{ product.name }}</div>
                          <p class="grey s mb20">
                            {{ product.package }} | Quantity:
                            {{ product.quantity }}
                          </p>
                          <p class="s font-medium">
                            {{ product.total | format_k_currency }}
                          </p>
                        </div>
                      </div>
                    </template>
                    <button class="btn btn-arrow arrow-treatment">
                      <img src="/img/arrow.svg" class="arrow-link" />
                    </button>
                  </router-link>
                </div>
              </template>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="tab02"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
          <div class="row">
            <div class="col-lg-6">
              <template v-for="(order, index) in historyOrders">
                <div class="box-account mb25" :key="index">
                  <div class="sh-xs success" v-if="order.status == 'completed'">
                    {{ order.status | capitalize }}
                  </div>
                  <div
                    class="sh-xs red"
                    v-else-if="order.status == 'cancelled'"
                  >
                    {{ order.status | capitalize }}
                  </div>
                  <div class="sh-xs" v-else>
                    {{ order.status | capitalize }}
                  </div>
                  <p class="m grey mb25">on {{ date | date_time }}</p>
                  <router-link
                    :to="`/account/order/${order.id}`"
                    class="link-info-acc"
                  >
                    <template v-for="(product, step) in order.products">
                      <div class="d-flex mb-5" :key="step">
                        <div>
                          <img
                            :src="product.thumbnail"
                            class="img-mh100 mr-4 img-fluid"
                          />
                        </div>
                        <div class="desc-info">
                          <div class="m mb8">{{ product.name }}</div>
                          <p class="grey s mb20">
                            {{ product.package }} | Quantity:
                            {{ product.quantity }}
                          </p>
                          <p class="s font-medium">
                            {{ product.total | format_k_currency }}
                          </p>
                        </div>
                      </div>
                    </template>
                    <button class="btn btn-arrow arrow-treatment">
                      <img src="/img/arrow.svg" class="arrow-link" />
                    </button>
                  </router-link>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="content-box cm">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 offset-lg-3">
              <div class="d-flex align-items-center justify-content-center">
                <div class="text-center">
                  <img src="/img/woman-icon.svg" class="img-fluid mb30" />
                  <div class="sh-xs mb8">You don't have any order</div>
                  <div class="row mb80">
                    <div class="col-sm-12">
                      <router-link
                        to="/product"
                        class="btn btn-grey btn-block mb15"
                        >Back to shopping</router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
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
  name: "Order",
  metaInfo: {
    title: "Order"
  },
  data() {
    return {
      activeOrders: [],
      historyOrders: []
    };
  },
  mounted() {
    this.fetchOrder();
  },
  methods: {
    fetchOrder() {
      const loader = this.$loading.show({
        container: null,
        lockScroll: true,
        opacity: 1
      });
      axios
        .get(
          `${process.env.VUE_APP_BASE_URL_API_CONTENT}/wp-json/surface/v1/account/orders`,
          {
            headers: {
              Authorization: `Bearer ${this.$store.getters.wooCommereceToken}`
            }
          }
        )
        .then(response => {
          if (response.data.status == "ok") {
            const results = response.data.data;
            this.activeOrders = results.filter(
              order =>
                order.status == "on-hold" ||
                order.status == "processing" ||
                order.status == "pending" ||
                order.status == "on-delivery"
            );
            this.historyOrders = results.filter(
              order =>
                order.status != "on-hold" &&
                order.status != "processing" &&
                order.status != "pending" &&
                order.status != "on-delivery"
            );
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
