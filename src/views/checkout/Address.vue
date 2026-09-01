<template>
  <div id="billing-address">
    <div class="sh-s mb40">Billing Address</div>

    <form>
      <div class="form-group mb40" v-if="savedAddress.length">
        <div class="s font-medium mb12 grey">Saved addresses</div>
        <select
          class="form-control custom-select main-form"
          v-model="billing.savedAddress"
          @change="setBillingAddress"
        >
          <option :value="null" disabled> Select From Saved Address </option>
          <option
            v-for="(add, index) in savedAddress"
            :key="index"
            :value="add.id"
            >{{ add.company }}</option
          >
        </select>
      </div>

      <div class="row">
        <div class="col-md-6">
          <div class="form-group mb40">
            <div class="s font-medium mb12 grey">First name</div>
            <input
              type="text"
              class="form-control main-form"
              placeholder="First name"
              v-model="billing.firstName"
              :class="{ 'is-invalid': errorBilling.firstName }"
            />
            <div class="invalid-feedback" v-if="errorBilling.firstName">
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
              placeholder="Last name"
              v-model="billing.lastName"
              :class="{ 'is-invalid': errorBilling.firstName }"
            />
            <div class="invalid-feedback" v-if="errorBilling.lastName">
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
          placeholder="Address"
          v-model="billing.address1"
          :class="{ 'is-invalid': errorBilling.address1 }"
        />
        <div class="invalid-feedback" v-if="errorBilling.address1">
          Please insert your address.
        </div>
      </div>

      <div class="form-group mb40">
        <div class="s font-medium mb12 grey">
          Apartment / suite / room number
        </div>
        <input
          type="text"
          class="form-control main-form"
          placeholder="Apartment / suite / room number"
          v-model="billing.address2"
        />
      </div>

      <div class="row">
        <div class="col-md-6">
          <div class="form-group mb40">
            <div class="s font-medium mb12 grey">Province</div>
            <select
              class="form-control custom-select main-form"
              :class="{ 'is-invalid': errorBilling.state }"
              v-model="billing.state"
              @change="getCities"
            >
              <option :value="null" disabled>Province</option>
              <option
                v-for="(state, index) in states"
                :key="index"
                :value="state.code"
              >
                {{ state.name }}
              </option>
            </select>
            <div class="invalid-feedback" v-if="errorBilling.state">
              Please select your province.
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group mb40">
            <div class="s font-medium mb12 grey">City</div>
            <select
              class="form-control custom-select main-form"
              :class="{ 'is-invalid': errorBilling.city }"
              v-model="billing.city"
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
            <div class="invalid-feedback" v-if="errorBilling.city">
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
              :class="{ 'is-invalid': errorBilling.district }"
              v-model="billing.district"
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
            <div class="invalid-feedback" v-if="errorBilling.district">
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
              placeholder="Postcal code"
              :class="{ 'is-invalid': errorBilling.postCode }"
              v-model="billing.postCode"
            />
            <div class="invalid-feedback" v-if="errorBilling.postCode">
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
              placeholder="Phone number"
              :class="{ 'is-invalid': errorBilling.phone }"
              v-model="billing.phone"
            />
            <div class="invalid-feedback" v-if="errorBilling.phone">
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
              :class="{ 'is-invalid': errorBilling.email }"
              v-model="billing.email"
            />
            <div class="invalid-feedback" v-if="errorBilling.email">
              Please insert your valid email address.
            </div>
          </div>
        </div>
      </div>

      <div
        class="custom-control custom-checkbox mb30"
        v-if="billing.savedAddress == null"
      >
        <input
          type="checkbox"
          class="custom-control-input"
          id="customCheck1"
          v-model="billing.billingFutureSaved"
        />
        <label class="custom-control-label m lab-login" for="customCheck1"
          >Save address for future use</label
        >
      </div>

      <div class="form-group mb40" v-if="billing.billingFutureSaved">
        <div class="s font-medium mb12 grey">Address nickname</div>
        <input
          type="text"
          class="form-control main-form"
          placeholder="Home, work etc"
          :class="{ 'is-invalid': errorBilling.addressName }"
          v-model="billing.addressName"
        />
        <div class="invalid-feedback" v-if="errorBilling.addressName">
          Please insert address name.
        </div>
      </div>

      <div class="custom-control custom-checkbox mb80">
        <input
          type="checkbox"
          class="custom-control-input"
          id="customCheck2"
          v-model="differenceShipping"
        />
        <label class="custom-control-label m lab-login" for="customCheck2"
          >Use a different address for shipping address</label
        >
      </div>

      <template v-if="differenceShipping">
        <div class="sh-s mb40">Shipping Address</div>

        <div class="form-group mb40" v-if="savedAddress.length">
          <div class="s font-medium mb12 grey">Saved addresses</div>
          <select
            class="form-control custom-select main-form"
            v-model="shipping.savedAddress"
            @change="setShippingAddress"
          >
            <option :value="null" disabled> Select From Saved Address </option>
            <option
              v-for="(add, index) in savedAddress"
              :key="index"
              :value="add.id"
              >{{ add.company }}</option
            >
          </select>
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="form-group mb40">
              <div class="s font-medium mb12 grey">First name</div>
              <input
                type="text"
                class="form-control main-form"
                placeholder="First name"
                v-model="shipping.firstName"
                :class="{ 'is-invalid': errorShipping.firstName }"
              />
              <div class="invalid-feedback" v-if="errorShipping.firstName">
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
                placeholder="Last name"
                v-model="shipping.lastName"
                :class="{ 'is-invalid': errorShipping.firstName }"
              />
              <div class="invalid-feedback" v-if="errorShipping.lastName">
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
            placeholder="address"
            v-model="shipping.address1"
            :class="{ 'is-invalid': errorShipping.address1 }"
          />
          <div class="invalid-feedback" v-if="errorShipping.address1">
            Please insert your address.
          </div>
        </div>

        <div class="form-group mb40">
          <div class="s font-medium mb12 grey">
            Apartment / suite / room number
          </div>
          <input
            type="text"
            class="form-control main-form"
            placeholder="Apartment / suite / room number"
            v-model="shipping.address2"
          />
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="form-group mb40">
              <div class="s font-medium mb12 grey">Province</div>
              <select
                class="form-control custom-select main-form"
                :class="{ 'is-invalid': errorShipping.state }"
                v-model="shipping.state"
                @change="getShippingCities"
              >
                <option :value="null" disabled>Province</option>
                <option
                  v-for="(state, index) in shippingStates"
                  :key="index"
                  :value="state.code"
                >
                  {{ state.name }}
                </option>
              </select>
              <div class="invalid-feedback" v-if="errorShipping.state">
                Please select your province.
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mb40">
              <div class="s font-medium mb12 grey">City</div>
              <select
                class="form-control custom-select main-form"
                :class="{ 'is-invalid': errorShipping.city }"
                v-model="shipping.city"
                @change="getShippingDistricts"
              >
                <option :value="null" disabled>City</option>
                <option
                  v-for="(city, index) in shippingCities"
                  :key="index"
                  :value="city.code"
                >
                  {{ city.name }}
                </option>
              </select>
              <div class="invalid-feedback" v-if="errorShipping.city">
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
                :class="{ 'is-invalid': errorShipping.district }"
                v-model="shipping.district"
              >
                <option :value="null" disabled>District</option>
                <option
                  v-for="(district, index) in shippingDistricts"
                  :key="index"
                  :value="district.code"
                >
                  {{ district.name }}
                </option>
              </select>
              <div class="invalid-feedback" v-if="errorShipping.district">
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
                placeholder="Postcal code"
                :class="{ 'is-invalid': errorShipping.postCode }"
                v-model="shipping.postCode"
              />
              <div class="invalid-feedback" v-if="errorShipping.postCode">
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
                placeholder="Phone number"
                :class="{ 'is-invalid': errorShipping.phone }"
                v-model="shipping.phone"
              />
              <div class="invalid-feedback" v-if="errorShipping.phone">
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
                :class="{ 'is-invalid': errorShipping.email }"
                v-model="shipping.email"
              />
              <div class="invalid-feedback" v-if="errorShipping.email">
                Please insert your valid email address.
              </div>
            </div>
          </div>
        </div>
      </template>

      <div class="row mb80">
        <div class="col-sm-6">
          <router-link to="/cart" class="btn btn-grey btn-block mb15">
            Back to bag
          </router-link>
        </div>
        <div class="col-sm-6">
          <a
            href="#"
            @click="validateForm"
            type="button"
            class="btn btn-solid btn-block mb15"
          >
            Proceed to shipping
          </a>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Address",
  data() {
    return {
      savedAddress: [],
      billing: {
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
        addressName: null,
        savedAddress: null,
        billingFutureSaved: false
      },
      errorBilling: {
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
      districts: [],
      differenceShipping: false,
      shipping: {
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
        addressName: null,
        savedAddress: null
      },
      errorShipping: {
        firstName: false,
        lastName: false,
        phone: false,
        email: false,
        state: false,
        city: false,
        district: false,
        postCode: false,
        address1: false,
        address2: false
      },
      shippingStates: [],
      shippingCities: [],
      shippingDistricts: []
    };
  },
  mounted() {
    this.fetchAddresses();
    this.getStates();
    this.getShipppingStates();
  },
  methods: {
    fetchAddresses() {
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
              let address = {
                id: property
              };
              address = Object.assign(address, addresses[property]);
              this.savedAddress.push(address);
            }
          } else {
            this.savedAddress = [];
          }
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
          `${process.env.VUE_APP_BASE_URL_API_CONTENT}/wp-json/surface/v1/region/states/${this.billing.state}/cities`,
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
          `${process.env.VUE_APP_BASE_URL_API_CONTENT}/wp-json/surface/v1/region/states/${this.billing.state}/cities/${this.billing.city}/districts`,
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
    getShipppingStates() {
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
              this.shippingStates.push({
                code: property,
                name: states[property]
              });
            }
          }
        });
    },
    getShippingCities() {
      axios
        .get(
          `${process.env.VUE_APP_BASE_URL_API_CONTENT}/wp-json/surface/v1/region/states/${this.shipping.state}/cities`,
          {
            headers: {
              Authorization: `Bearer ${this.$store.getters.wooCommereceToken}`
            }
          }
        )
        .then(response => {
          this.shippingCities = [];
          if (response.data.status == "ok") {
            const cities = response.data.data.cities;
            for (const property in cities) {
              this.shippingCities.push({
                code: property,
                name: cities[property]
              });
            }
          }
        });
    },
    getShippingDistricts() {
      axios
        .get(
          `${process.env.VUE_APP_BASE_URL_API_CONTENT}/wp-json/surface/v1/region/states/${this.shipping.state}/cities/${this.shipping.city}/districts`,
          {
            headers: {
              Authorization: `Bearer ${this.$store.getters.wooCommereceToken}`
            }
          }
        )
        .then(response => {
          this.shippingDistricts = [];
          if (response.data.status == "ok") {
            const districts = response.data.data.districts;
            for (const property in districts) {
              this.shippingDistricts.push({
                code: property,
                name: districts[property]
              });
            }
          }
        });
    },
    setBillingAddress() {
      const selected = this.savedAddress.find(
        add => add.id == this.billing.savedAddress
      );

      this.billing = {
        firstName: selected.first_name,
        lastName: selected.last_name,
        phone: selected.phone,
        email: selected.email,
        state: selected.state,
        city: selected.city_id,
        district: selected.district_id,
        postCode: selected.postcode,
        address1: selected.address_1,
        address2: selected.address_2,
        addressName: null,
        savedAddress: this.billing.savedAddress,
        billingFutureSaved: false
      };
      this.getCities();
      this.getDistricts();
    },
    setShippingAddress() {
      const selected = this.savedAddress.find(
        add => add.id == this.shipping.savedAddress
      );
      this.shipping = {
        firstName: selected.first_name,
        lastName: selected.last_name,
        phone: selected.phone,
        email: selected.email,
        state: selected.state,
        city: selected.city_id,
        district: selected.district_id,
        postCode: selected.postcode,
        address1: selected.address_1,
        address2: selected.address_2,
        savedAddress: this.shipping.savedAddress
      };
      this.getShippingCities();
      this.getShippingDistricts();
    },
    validateForm() {
      // validate billing address
      this.errorBilling.firstName =
        this.billing.firstName === null || this.billing.firstName == ""
          ? true
          : false;
      this.errorBilling.lastName =
        this.billing.lastName === null || this.billing.lastName == ""
          ? true
          : false;

      this.errorBilling.address1 =
        this.billing.address1 === null || this.billing.address1 == ""
          ? true
          : false;

      this.errorBilling.state = this.billing.state === null ? true : false;
      this.errorBilling.city = this.billing.city === null ? true : false;
      this.errorBilling.district =
        this.billing.district === null ? true : false;

      this.errorBilling.postCode =
        this.billing.postCode === null || this.billing.postCode == ""
          ? true
          : false;

      this.errorBilling.email =
        this.billing.email === null || this.billing.email == "" ? true : false;
      this.errorBilling.phone =
        this.billing.phone === null || this.billing.phone == "" ? true : false;

      if (!this.errorBilling.email) {
        this.errorBilling.email = this.billing.email.match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
          ? false
          : true;
      }

      if (this.billing.billingFutureSaved) {
        this.errorBilling.addressName =
          this.billing.addressName === null || this.billing.addressName == ""
            ? true
            : false;
      }

      // validate shipping address
      if (this.differenceShipping) {
        this.errorShipping.firstName =
          this.shipping.firstName === null || this.shipping.firstName == ""
            ? true
            : false;
        this.errorShipping.lastName =
          this.shipping.lastName === null || this.shipping.lastName == ""
            ? true
            : false;

        this.errorShipping.address1 =
          this.shipping.address1 === null || this.shipping.address1 == ""
            ? true
            : false;

        this.errorShipping.state = this.shipping.state === null ? true : false;
        this.errorShipping.city = this.shipping.city === null ? true : false;
        this.errorShipping.district =
          this.shipping.district === null ? true : false;

        this.errorShipping.postCode =
          this.shipping.postCode === null || this.shipping.postCode == ""
            ? true
            : false;

        this.errorShipping.email =
          this.shipping.email === null || this.shipping.email == ""
            ? true
            : false;
        this.errorShipping.phone =
          this.shipping.phone === null || this.shipping.phone == ""
            ? true
            : false;

        if (!this.errorShipping.email) {
          this.errorShipping.email = this.shipping.email.match(
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
          )
            ? false
            : true;
        }
      }

      if (
        !this.errorBilling.firstName &&
        !this.errorBilling.lastName &&
        !this.errorBilling.address1 &&
        !this.errorBilling.state &&
        !this.errorBilling.city &&
        !this.errorBilling.district &&
        !this.errorBilling.postCode &&
        !this.errorBilling.email &&
        !this.errorBilling.phone &&
        !this.errorBilling.addressName
      ) {
        let validShipping = true;
        if (this.differenceShipping) {
          if (
            !this.errorShipping.firstName ||
            !this.errorShipping.lastName ||
            !this.errorShipping.address1 ||
            !this.errorShipping.state ||
            !this.errorShipping.city ||
            !this.errorShipping.district ||
            !this.errorShipping.postCode ||
            !this.errorShipping.email ||
            !this.errorShipping.phone
          ) {
            validShipping = false;
          }
        }

        if (validShipping) {
          if (this.billing.billingFutureSaved) {
            axios
              .post(
                `${process.env.VUE_APP_BASE_URL_API_CONTENT}/wp-json/surface/v1/account/address/add`,
                {
                  first_name: this.billing.firstName,
                  last_name: this.billing.lastName,
                  email: this.billing.email,
                  phone: this.billing.phone,
                  address_1: this.billing.address1,
                  address_2: this.billing.address2,
                  company: this.billing.addressName,
                  postcode: this.billing.postCode,
                  state: this.billing.state,
                  city_id: this.billing.city,
                  city: this.cities.find(city => city.code == this.billing.city)
                    .name,
                  district_id: this.billing.district,
                  district: this.districts.find(
                    district => district.code == this.billing.district
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
              });
          }

          this.billing.city_id = this.billing.city;
          this.billing.city = this.cities.find(
            city => city.code == this.billing.city
          ).name;

          this.billing.district_id = this.billing.district;
          this.billing.district = this.districts.find(
            district => district.code == this.billing.district
          ).name;

          const shipping = this.differenceShipping
            ? this.shipping
            : this.billing;

          this.$emit("submit", this.billing, shipping);
        }
      }
    }
  }
};
</script>
