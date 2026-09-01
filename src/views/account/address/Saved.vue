<template>
  <div id="saved-address-page">
    <div id="m-mobile" class="container m-su">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb mb40">
          <li class="breadcrumb-item">
            <router-link to="/account" class="link-blue s">Account</router-link>
          </li>
          <li class="breadcrumb-item active s" aria-current="page">
            Saved addresses
          </li>
        </ol>
      </nav>

      <div class="mw500 f100">
        <div class="headingm mb60">Saved addresses</div>
      </div>

      <div class="row">
        <template v-for="(address, index) in addresses">
          <div class="col-lg-4" :key="index">
            <div class="box-account mb40">
              <div class="sh-xs mb25">{{ address.company }}</div>
              <p class="s grey mb15">
                {{ address.address_1 }} {{ address.address_2 }}
                {{ address.district }} {{ address.city }} {{ address.postcode }}
              </p>
              <p class="s grey mb15">{{ address.email }}</p>
              <p class="s grey mb15">{{ address.phone }}</p>
              <div class="d-flex">
                <div class="mr-5">
                  <router-link
                    :to="`/account/address/${address.id}/edit`"
                    class="wc-link"
                  >
                    Edit
                  </router-link>
                </div>
                <div class="mr-5">
                  <a
                    href="#"
                    @click="deletedId = address.id"
                    class="link-red font-medium"
                  >
                    Delete
                  </a>
                </div>
              </div>
            </div>
          </div>
        </template>
        <template v-if="addresses.length == 0">
          <div class="col-lg-6 offset-lg-3">
            <div class="d-flex align-items-center justify-content-center">
              <div class="text-center">
                <img src="/img/woman-icon.svg" class="img-fluid mb30" />
                <div class="sh-xs mb8">You don't have an address yet</div>
                <p class="s grey mb40">
                  You can save a new address during the checkout process.
                </p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>

    <div
      class="popup-content-overlay green-bg"
      :class="{ 'overlay-show': deletedId !== null }"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <div class="box-popup">
              <div class="l mb15">
                Are you sure you want to delete this address?
              </div>
              <p class="s mb40">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Eleifend porta est fermentum elit quis facilisis. In tellus
                pellentesque sit pharetra.
              </p>
              <div class="row">
                <div class="col-sm-4">
                  <button
                    type="button"
                    @click="deletedId = null"
                    class="btn btn-grey btn-block btn-mm"
                  >
                    Cancel
                  </button>
                </div>
                <div class="col-sm-5">
                  <button
                    type="button"
                    @click="confirmDelete"
                    class="btn btn-red btn-block"
                  >
                    Yes, delete
                  </button>
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
  name: "SavedAddress",
  metaInfo: {
    title: "Saved Address"
  },
  data() {
    return {
      addresses: [],
      deletedId: null
    };
  },
  mounted() {
    this.fetchAddresses();
  },
  methods: {
    fetchAddresses() {
      const loader = this.$loading.show({
        container: null,
        lockScroll: true,
        opacity: 1
      });
      axios
        .get(
          `${process.env.VUE_APP_BASE_URL_API_CONTENT}/wp-json/surface/v1/account/address`,
          {
            headers: {
              Authorization: `Bearer ${this.$store.getters.wooCommereceToken}`
            }
          }
        )
        .then(response => {
          console.log(response.data);
          if (response.data.status == "ok") {
            const addresses = response.data.data;
            this.addresses = [];
            for (const property in addresses) {
              let address = {
                id: property
              };
              address = Object.assign(address, addresses[property]);
              this.addresses.push(address);
            }
          } else {
            this.addresses = [];
          }
          loader.hide();
        });
    },
    confirmDelete() {
      const loader = this.$loading.show({
        container: null,
        lockScroll: true,
        opacity: 1
      });
      axios
        .post(
          `${process.env.VUE_APP_BASE_URL_API_CONTENT}/wp-json/surface/v1/account/address/delete`,
          {
            address_key: this.deletedId
          },
          {
            headers: {
              Authorization: `Bearer ${this.$store.getters.wooCommereceToken}`
            }
          }
        )
        .then(response => {
          console.log(response.data);
          this.deletedId = null;
          this.fetchAddresses();
          loader.hide();
        });
    }
  }
};
</script>
