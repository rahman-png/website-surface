<template>
  <div id="edit-password-page">
    <div id="m-mobile" class="container m-su mb80">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb mb40">
          <li class="breadcrumb-item">
            <router-link to="/account" class="link-blue s">
              Account
            </router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="/account/profile" class="link-blue s">
              Login and Security
            </router-link>
          </li>
          <li class="breadcrumb-item active s" aria-current="page">
            Contact Information
          </li>
        </ol>
      </nav>

      <div class="mw500 f100">
        <div class="headingm mb60">Edit Contact Information</div>
      </div>

      <div class="mw350">
        <form @submit.prevent="submitForm">
          <div class="form-group mb40">
            <div class="s font-medium mb12 grey">Email address</div>
            <input
              type="text"
              class="form-control main-form"
              placeholder="Your email"
              v-model="form.email"
              :class="{ 'is-invalid': error.email }"
            />
            <div class="invalid-feedback" v-if="error.email">
              Please insert your valid email address.
            </div>
          </div>

          <div class="form-group mb40">
            <div class="s font-medium mb12 grey">Phone</div>
            <input
              type="number"
              step="1"
              min="0"
              class="form-control main-form"
              placeholder="Your phone number"
              v-model="form.phone"
              :class="{ 'is-invalid': error.phone }"
            />
            <div class="invalid-feedback" v-if="error.phone">
              Please insert your phone number.
            </div>
          </div>

          <div class="row text-center" v-if="errorChangeContact">
            <div class="col-12">
              <div class="invalid-feedback" style="display: block">
                {{ errorChangeContact }}
              </div>
            </div>
          </div>

          <div class="row mt40">
            <div class="col-6">
              <router-link
                to="/account/profile"
                class="btn btn-grey btn-block mb15"
              >
                Cancel
              </router-link>
            </div>
            <div class="col-6">
              <button type="submit" class="btn btn-solid btn-block mb15">
                Confirm
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookie from "js-cookie";

export default {
  name: "EditContact",
  metaInfo: {
    title: "Edit Contact"
  },
  data() {
    return {
      form: {
        email: this.$store.state.userData.email,
        phone: this.$store.state.userData.phone
      },
      error: {
        email: false,
        phone: false
      },
      errorChangeContact: null
    };
  },
  methods: {
    submitForm() {
      this.error.email =
        this.form.email === null || this.form.email == "" ? true : false;
      this.error.phone =
        this.form.phone === null || this.form.phone == "" ? true : false;

      this.error.email = this.form.email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
        ? false
        : true;

      if (this.error.email || this.error.phone) {
        console.log("masuk error");
        return false;
      }
      let param = new FormData();
      param.append("email", this.form.email);
      param.append("phone", this.form.phone);
      axios
        .put(`${process.env.VUE_APP_BASE_URL_API}/user/update/contact`, param, {
          headers: {
            Authorization: `Bearer ${this.$store.getters.surfaceToken}`
          }
        })
        .then(() => {
          let auth = cookie.getJSON("userData");
          auth.email = this.form.email;
          auth.phone = this.form.phone;
          // update cookie user data
          cookie.set("userData", auth, { expires: 1 });
          // update data on vuex
          this.$store.commit("SET_USERDATA", auth);
          // moengage track user attribute
          this.setMoengageAttribute();
          // redirect back to account page
          this.$router.push("/account/profile");
        })
        .catch(() => {
          this.errorChangeContact = "failed update password";
        });
    }
  }
};
</script>
