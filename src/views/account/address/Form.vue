<template>
  <div id="form-address-page">
    <div id="m-mobile" class="container m-su">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb mb40">
          <li class="breadcrumb-item">
            <router-link to="/account" class="link-blue s">Account</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="/account/address" class="link-blue s">
              Saved addresses
            </router-link>
          </li>
          <li class="breadcrumb-item active s" aria-current="page">
            Edit address
          </li>
        </ol>
      </nav>

      <div class="mw500 f100">
        <div class="headingm mb60">Edit address</div>
      </div>

      <div class="row">
        <div class="col-lg-6">
          <form>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group mb40">
                  <div class="s font-medium mb12 grey">First name</div>
                  <input
                    type="text"
                    class="form-control main-form"
                    placeholder="Enter first name"
                    v-model="form.firstName"
                    :class="{ 'is-invalid': error.firstName }"
                  />
                  <div class="invalid-feedback" v-if="error.firstName">
                    Please insert your first name.
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group mb40">
                  <div class="s font-medium mb12 grey">Last name</div>
                  <input
                    type="text"
                    class="form-control main-form"
                    placeholder="Enter last name"
                    v-model="form.lastName"
                    :class="{ 'is-invalid': error.firstName }"
                  />
                  <div class="invalid-feedback" v-if="error.lastName">
                    Please insert your last name.
                  </div>
                </div>
              </div>
            </div>

            <div class="form-group mb40">
              <div class="s font-medium mb12 grey">Address</div>
              <input
                type="text"
                class="form-control main-form"
                placeholder="Your address"
                v-model="form.address1"
                :class="{ 'is-invalid': error.address1 }"
              />
              <div class="invalid-feedback" v-if="error.address1">
                Please insert your address.
              </div>
            </div>

            <div class="form-group mb40">
              <div class="s font-medium mb12 grey">Apartment / suite etc</div>
              <input
                type="text"
                class="form-control main-form"
                placeholder="Apartment / suite / room number"
                v-model="form.address2"
              />
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group mb40">
                  <div class="s font-medium mb12 grey">States</div>
                  <select
                    class="form-control custom-select main-form"
                    :class="{ 'is-invalid': error.state }"
                    v-model="form.state"
                    @change="getCities"
                  >
                    <option :value="null" disabled>State</option>
                    <option
                      v-for="(state, index) in states"
                      :key="index"
                      :value="state.code"
                    >
                      {{ state.name }}
                    </option>
                  </select>
                  <div class="invalid-feedback" v-if="error.state">
                    Please select your state.
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group mb40">
                  <div class="s font-medium mb12 grey">City</div>
                  <select
                    class="form-control custom-select main-form"
                    :class="{ 'is-invalid': error.city }"
                    v-model="form.city"
                    @change="getDistricts"
                  >
                    <option :value="null" disabled>City</option>
                    <option
                      v-for="(city, index) in cities"
                      :key="index"
                      :value="city.code"
                    >
                      {{ city.name }}
                    </option>
                  </select>
                  <div class="invalid-feedback" v-if="error.city">
                    Please select your city.
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group mb40">
                  <div class="s font-medium mb12 grey">District</div>
                  <select
                    class="form-control custom-select main-form"
                    :class="{ 'is-invalid': error.district }"
                    v-model="form.district"
                  >
                    <option :value="null" disabled>District</option>
                    <option
                      v-for="(district, index) in districts"
                      :key="index"
                      :value="district.code"
                    >
                      {{ district.name }}
                    </option>
                  </select>
                  <div class="invalid-feedback" v-if="error.district">
                    Please select your district.
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group mb40">
                  <div class="s font-medium mb12 grey">Postal code</div>
                  <input
                    type="text"
                    class="form-control main-form"
                    placeholder="Enter postcal code"
                    :class="{ 'is-invalid': error.postCode }"
                    v-model="form.postCode"
                  />
                  <div class="invalid-feedback" v-if="error.postCode">
                    Please insert your postal code.
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group mb40">
                  <div class="s font-medium mb12 grey">Phone</div>
                  <input
                    type="text"
                    class="form-control main-form"
                    placeholder="Your phone"
                    :class="{ 'is-invalid': error.phone }"
                    v-model="form.phone"
                  />
                  <div class="invalid-feedback" v-if="error.phone">
                    Please insert your phone number.
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group mb40">
                  <div class="s font-medium mb12 grey">Email</div>
                  <input
                    type="text"
                    class="form-control main-form"
                    placeholder="Email address"
                    :class="{ 'is-invalid': error.email }"
                    v-model="form.email"
                  />
                  <div class="invalid-feedback" v-if="error.email">
                    Please insert your valid email address.
                  </div>
                </div>
              </div>
            </div>

            <div class="form-group mb80">
              <div class="s font-medium mb12 grey">Address nickname</div>
              <input
                type="text"
                class="form-control main-form"
                placeholder="Home, work etc"
                :class="{ 'is-invalid': error.addressName }"
                v-model="form.addressName"
              />
              <div class="invalid-feedback" v-if="error.addressName">
                Please insert your address nickname.
              </div>
            </div>

            <div class="row mb80">
              <div class="col-sm-6">
                <router-link
                  to="/account/address"
                  class="btn btn-grey btn-block mb15"
                >
                  Cancel
                </router-link>
              </div>
              <div class="col-sm-6">
                <a
                  href="#"
                  @click="validateForm"
                  class="btn btn-solid btn-block mb15"
                >
                  Save changes
                </a>
              </div>
            </div>
          </form>
        </div>
        <div class="col-lg-6"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FormAddress",
  metaInfo: {
    title: "Edit Address"
  },
  data() {
    return {
      form: {
        firstName: null,
        lastName: null,
        phone: null,
        email: null,
        state: null,
        city: null,
        district: null,
        postCode: null,
        address1: null,
        address2: null,
        addressName: null
      },
      error: {
        firstName: false,
        lastName: false,
        phone: false,
        email: false,
        state: false,
        city: false,
        district: false,
        postCode: false,
        address1: false,
        address2: false,
        addressName: false
      },
      states: [],
      cities: [],
      districts: []
    };
  },
  mounted() {
    this.getStates();
    if (this.$route.params.id !== undefined) {
      this.getDetailAddress();
    }
  },
  methods: {
    getDetailAddress() {
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
            for (const property in addresses) {
              if (property == this.$route.params.id) {
                const address = addresses[property];
                this.form = {
                  firstName: address.first_name,
                  lastName: address.last_name,
                  phone: address.phone,
                  email: address.email,
                  state: address.state,
                  city: address.city_id,
                  district: address.district_id,
                  postCode: address.postcode,
                  address1: address.address_1,
                  address2: address.address_2,
                  addressName: address.company
                };
                this.getCities();
                this.getDistricts();
              }
            }
          }
        })
        .then(() => {
          loader.hide();
        });
    },
    getStates() {
      axios
        .get(
          `${process.env.VUE_APP_BASE_URL_API_CONTENT}/wp-json/surface/v1/region/states`,
          {
            headers: {
              Authorization: `Bearer ${this.$store.getters.wooCommereceToken}`
            }
          }
        )
        .then(response => {
          if (response.data.status == "ok") {
            const states = response.data.data.states;
            for (const property in states) {
              this.states.push({
                code: property,
                name: states[property]
              });
            }
          }
        });
    },
    getCities() {
      axios
        .get(
          `${process.env.VUE_APP_BASE_URL_API_CONTENT}/wp-json/surface/v1/region/states/${this.form.state}/cities`,
          {
            headers: {
              Authorization: `Bearer ${this.$store.getters.wooCommereceToken}`
            }
          }
        )
        .then(response => {
          this.cities = [];
          if (response.data.status == "ok") {
            const cities = response.data.data.cities;
            for (const property in cities) {
              this.cities.push({
                code: property,
                name: cities[property]
              });
            }
          }
        });
    },
    getDistricts() {
      axios
        .get(
          `${process.env.VUE_APP_BASE_URL_API_CONTENT}/wp-json/surface/v1/region/states/${this.form.state}/cities/${this.form.city}/districts`,
          {
            headers: {
              Authorization: `Bearer ${this.$store.getters.wooCommereceToken}`
            }
          }
        )
        .then(response => {
          this.districts = [];
          if (response.data.status == "ok") {
            const districts = response.data.data.districts;
            for (const property in districts) {
              this.districts.push({
                code: property,
                name: districts[property]
              });
            }
          }
        });
    },
    validateForm() {
      this.error.firstName =
        this.form.firstName === null || this.form.firstName == ""
          ? true
          : false;
      this.error.lastName =
        this.form.lastName === null || this.form.lastName == "" ? true : false;

      this.error.address1 =
        this.form.address1 === null || this.form.address1 == "" ? true : false;

      this.error.state = this.form.state === null ? true : false;
      this.error.city = this.form.city === null ? true : false;
      this.error.district = this.form.district === null ? true : false;

      this.error.postCode =
        this.form.postCode === null || this.form.postCode == "" ? true : false;

      this.error.email =
        this.form.email === null || this.form.email == "" ? true : false;
      this.error.phone =
        this.form.phone === null || this.form.phone == "" ? true : false;

      if (!this.error.email) {
        this.error.email = this.form.email.match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
          ? false
          : true;
      }

      this.error.addressName =
        this.form.addressName === null || this.form.addressName == ""
          ? true
          : false;

      if (
        !this.error.firstName &&
        !this.error.lastName &&
        !this.error.address1 &&
        !this.error.state &&
        !this.error.city &&
        !this.error.district &&
        !this.error.postCode &&
        !this.error.email &&
        !this.error.phone &&
        !this.error.addressName
      ) {
        this.submitForm();
      }
    },
    submitForm() {
      const loader = this.$loading.show({
        container: null,
        lockScroll: true,
        opacity: 1
      });
      axios
        .post(
          `${process.env.VUE_APP_BASE_URL_API_CONTENT}/wp-json/surface/v1/account/address/edit`,
          {
            address_key: this.$route.params.id,
            first_name: this.form.firstName,
            last_name: this.form.lastName,
            email: this.form.email,
            phone: this.form.phone,
            address_1: this.form.address1,
            address_2: this.form.address2,
            company: this.form.addressName,
            postcode: this.form.postCode,
            state: this.form.state,
            city_id: this.form.city,
            city: this.cities.find(city => city.code == this.form.city).name,
            district_id: this.form.district,
            district: this.districts.find(
              district => district.code == this.form.district
            ).name
          },
          {
            headers: {
              Authorization: `Bearer ${this.$store.getters.wooCommereceToken}`
            }
          }
        )
        .then(response => {
          console.log(response.data);
          loader.hide();
          this.$router.push("/account/address");
        });
    }
  }
};
</script>
