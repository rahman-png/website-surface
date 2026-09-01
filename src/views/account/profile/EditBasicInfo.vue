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
            Basic Information
          </li>
        </ol>
      </nav>

      <div class="mw500 f100">
        <div class="headingm mb60">Edit Basic Information</div>
      </div>

      <div class="mw500">
        <form @submit.prevent="submitForm">
          <div class="row">
            <div class="col-lg-6">
              <div class="box260 f100">
                <div class="form-group mb40">
                  <div class="s font-medium mb12 grey">First name</div>
                  <input
                    type="text"
                    class="form-control main-form"
                    placeholder="Your first name"
                    v-model="form.firstName"
                    :class="{ 'is-invalid': error.firstName }"
                  />
                  <div class="invalid-feedback" v-if="error.firstName">
                    Please insert your first name.
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="box260 f100">
                <div class="form-group mb40">
                  <div class="s font-medium mb12 grey">Last name</div>
                  <input
                    type="text"
                    class="form-control main-form"
                    placeholder="Your last name"
                    v-model="form.lastName"
                    :class="{ 'is-invalid': error.lastName }"
                  />
                  <div class="invalid-feedback" v-if="error.lastName">
                    Please insert your last name.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="form-group mb40">
            <div class="s font-medium mb12 grey">Gender</div>
            <div class="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                id="customRadioInline1"
                name="customRadioInline1"
                class="custom-control-input"
                value="male"
                v-model="form.gender"
              />
              <label class="custom-control-label" for="customRadioInline1"
                >Male</label
              >
            </div>
            <div class="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                id="customRadioInline2"
                name="customRadioInline1"
                class="custom-control-input"
                value="female"
                v-model="form.gender"
              />
              <label class="custom-control-label" for="customRadioInline2"
                >Female</label
              >
            </div>
            <div class="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                id="customRadioInline3"
                name="customRadioInline1"
                class="custom-control-input"
                value="other"
                v-model="form.gender"
              />
              <label class="custom-control-label" for="customRadioInline3"
                >Other</label
              >
            </div>
          </div>

          <div class="row">
            <div class="col-lg-6">
              <div class="box260 f100">
                <div class="form-group mb40">
                  <div class="s font-medium mb12 grey">Date of birth</div>
                  <input
                    type="date"
                    class="form-control main-form"
                    placeholder="DD / MM / YYYY"
                    :max="futureDate"
                    v-model="form.birthDate"
                    :class="{ 'is-invalid': error.birthDate }"
                  />
                  <div class="invalid-feedback" v-if="error.birthDate">
                    Please insert valid birth day.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row text-center" v-if="errorChangeBasicInfo">
            <div class="col-12">
              <div class="invalid-feedback" style="display: block">
                {{ errorChangeBasicInfo }}
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
import moment from "moment";

export default {
  name: "EditBasicInfo",
  metaInfo: {
    title: "Edit Basic Info"
  },
  data() {
    return {
      form: {
        firstName: this.$store.state.userData.firstname,
        lastName: this.$store.state.userData.lastname,
        gender: this.$store.state.userData.gender,
        birthDate: this.$store.state.userData.birthDate
      },
      error: {
        firstName: false,
        lastName: false,
        birthDate: false
      },
      errorChangeBasicInfo: null
    };
  },
  computed: {
    futureDate() {
      return moment().format("YYYY-MM-DD");
    }
  },
  methods: {
    submitForm() {
      this.error.firstName =
        this.form.firstName === null || this.form.firstName == ""
          ? true
          : false;
      this.error.lastName =
        this.form.lastName === null || this.form.lastName == "" ? true : false;
      this.error.birthDate =
        this.form.birthDate === null || this.form.birthDate == ""
          ? true
          : false;

      if (!this.error.birthDate) {
        this.error.birthDate = moment(this.form.birthDate).isAfter(
          this.futureDate,
          "YYYY-MM-DD"
        )
          ? true
          : false;
      }

      if (this.error.email || this.error.phone) {
        console.log("masuk error");
        return false;
      }
      let param = new FormData();
      param.append("firstname", this.form.firstName);
      param.append("lastname", this.form.lastName);
      param.append("gender", this.form.gender);
      param.append("birthDate", this.form.birthDate);
      axios
        .put(`${process.env.VUE_APP_BASE_URL_API}/user/update/basic`, param, {
          headers: {
            Authorization: `Bearer ${this.$store.getters.surfaceToken}`
          }
        })
        .then(() => {
          let auth = cookie.getJSON("userData");
          auth.firstName = this.form.firstName;
          auth.lastName = this.form.lastName;
          auth.gender = this.form.gender;
          auth.birthDate = this.form.birthDate;
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
          this.errorChangeBasicInfo = "failed update basic info";
        });
    }
  }
};
</script>
