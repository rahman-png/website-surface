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
            Change Password
          </li>
        </ol>
      </nav>

      <div class="mw500 f100">
        <div class="headingm mb15">Change password</div>
        <p class="l grey mb60">
          Please enter your current password to continue.
        </p>
      </div>

      <div class="mw350">
        <template v-if="step == 1">
          <form @submit.prevent="confirmCurrentPassword">
            <div class="form-group mb40">
              <div class="s font-medium mb12 grey">Current password</div>
              <input
                type="password"
                class="form-control main-form"
                placeholder="Password"
                v-model="currentPassword"
                required
              />
            </div>

            <div class="row text-center" v-if="errorConfirmPassword">
              <div class="col-12">
                <div class="invalid-feedback" style="display: block">
                  {{ errorConfirmPassword }}
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
                  Continue
                </button>
              </div>
            </div>
          </form>
        </template>
        <template v-else-if="step == 2">
          <form @submit.prevent="changePassword">
            <div class="form-group mb40">
              <div class="s font-medium mb12 grey">New password</div>
              <input
                type="password"
                class="form-control main-form"
                placeholder="Password"
                v-model="newPassword"
                required
              />
            </div>

            <div class="form-group mb40">
              <div class="s font-medium mb12 grey">Confirm password</div>
              <input
                type="password"
                class="form-control main-form"
                placeholder="Password"
                v-model="confirmNewPassword"
                required
              />
            </div>

            <div class="row text-center" v-if="errorChangePassword">
              <div class="col-12">
                <div class="invalid-feedback" style="display: block">
                  {{ errorChangePassword }}
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
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookie from "js-cookie";

export default {
  name: "EditPassword",
  metaInfo: {
    title: "Edit Password"
  },
  data() {
    return {
      step: 1,
      currentPassword: null,
      errorConfirmPassword: null,
      newPassword: null,
      confirmNewPassword: null,
      errorChangePassword: null
    };
  },
  methods: {
    confirmCurrentPassword() {
      let param = new FormData();
      param.append("password", this.currentPassword);
      axios
        .post(
          `${process.env.VUE_APP_BASE_URL_API}/auth/verify-password`,
          param,
          {
            headers: {
              Authorization: `Bearer ${this.$store.getters.surfaceToken}`
            }
          }
        )
        .then(() => {
          this.errorConfirmPassword = null;
          this.step = 2;
        })
        .catch(() => {
          this.errorConfirmPassword = "your current password is did not match";
        });
    },
    changePassword() {
      let param = new FormData();
      param.append("current_password", this.currentPassword);
      param.append("password", this.newPassword);
      param.append("password_confirmation", this.confirmNewPassword);
      axios
        .put(
          `${process.env.VUE_APP_BASE_URL_API}/user/update/password`,
          param,
          {
            headers: {
              Authorization: `Bearer ${this.$store.getters.surfaceToken}`
            }
          }
        )
        .then(() => {
          cookie.remove("userData");
          this.$store.commit("SET_USERDATA", null);
          this.$router.push("/account/profile/change-password-success");
        })
        .catch(() => {
          this.errorChangePassword = "failed update password";
        });
    }
  }
};
</script>
