<template>
  <div id="information-page" style="min-height: 600px">
    <div id="m-mobile" class="container m-su top90px">
      <div class="mw500 f100">
        <div class="headingm mb8">
          Hi {{ $store.state.userData.firstname }},
        </div>
        <div class="l mb40 grey mb60">
          We have a few things for you to look at.
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4 col-sm-6">
          <router-link to="/account/profile" class="link-info-acc mb30">
            <div class="box-account">
              <div class="d-flex">
                <img src="/img/circle-icon-1.svg" class="icon" />
                <div class="desc-text">
                  <p class="m font-medium">Login & Security</p>
                  <p class="s grey">Your login details and phone</p>
                </div>
              </div>
            </div>
          </router-link>
        </div>

        <div class="col-lg-4 col-sm-6">
          <router-link to="/account/address" class="link-info-acc mb30">
            <div class="box-account">
              <div class="d-flex">
                <img src="/img/circle-icon-2.svg" class="icon" />
                <div class="desc-text">
                  <p class="m font-medium">Your Addresses</p>
                  <p class="s grey">Your login details and phone</p>
                </div>
              </div>
            </div>
          </router-link>
        </div>

        <div class="col-lg-4 col-sm-6">
          <router-link to="/account/order" class="link-info-acc mb30">
            <div class="box-account">
              <div class="d-flex">
                <img src="/img/circle-icon-3.svg" class="icon" />
                <div class="desc-text">
                  <p class="m font-medium">Your Orders</p>
                  <p class="s grey">Your login details and phone</p>
                </div>
              </div>
            </div>
          </router-link>
        </div>

        <div class="col-lg-4 col-sm-6">
          <a href="#" class="link-info-acc mb30" @click="popup = true">
            <div class="box-account">
              <div class="d-flex">
                <img src="/img/circle-icon-5.svg" class="icon" />
                <div class="desc-text">
                  <p class="m font-medium">
                    Surface Club
                    <!-- <span class="for-point">500</span> -->
                  </p>
                  <p class="s grey">Your Surface Club details</p>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="col-lg-4 col-sm-6">
          <router-link to="/account/prescriptions" class="link-info-acc mb30">
            <div class="box-account">
              <div class="d-flex">
                <img src="/img/circle-icon-3.svg" class="icon" />
                <div class="desc-text">
                  <p class="m font-medium">Your Prescriptions</p>
                  <p class="s grey">All your prescriptions in one place</p>
                </div>
              </div>
            </div>
          </router-link>
        </div>

        <div class="col-lg-4 col-sm-6">
          <a href="#" @click="logout" class="link-info-acc mb30">
            <div class="box-account">
              <div class="d-flex">
                <img src="/img/circle-icon.svg" class="icon" />
                <div class="desc-text">
                  <p class="m font-medium">Logout</p>
                  <p class="s grey">Exit from your account</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div id="tada-section">
      <div id="tada-content" class="popup-content-overlay">
        <div class="container">
          <div class="popup-content">
            <div class="popup-card">
              <div class="overflow-popup">
                <div class="btn-close" @click="popup = false">
                  <i class="fa fa-times"></i>
                </div>
                <div class="row">
                  <div class="col-xl-12 col-sm-12">
                    <iframe
                      src="https://members.surfaceskinhabit.com/"
                      id="iframe"
                      title="TADA Webview"
                    ></iframe>
                  </div>
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
import cookie from "js-cookie";
import $ from "jquery";

export default {
  name: "Information",
  metaInfo: {
    title: "Basic Information"
  },
  data() {
    return {
      popup: false
    };
  },
  watch: {
    popup(newVal) {
      if (newVal) {
        $("#tada-content").addClass("overlay-show");
        $(".popup-content").addClass("popup-show");
        $("body").addClass("no-scroll");
      } else {
        $("#tada-content").removeClass("overlay-show");
        $(".popup-content").removeClass("popup-show");
        $("body").removeClass("no-scroll");
      }
    }
  },
  methods: {
    logout() {
      // logout moengage
      this.$moengage.destroySession();
      // logout mixpanel
      this.resetMixpanelUser();
      // clear cookie
      cookie.remove("userData");
      // clear vuex
      this.$store.commit("SET_USERDATA", null);
      // redirect to login page
      this.$router.push("/sign-in");
    },
  }
};
</script>

<style scoped>
.btn-close {
  top: 6px !important;
  right: 14px !important;
}
#iframe {
  width: 440px !important;
  height: 1000px !important;
}
.popup-card {
  padding-top: 30px !important;
  padding-left: 20px !important;
  padding-bottom: 30px !important;
}
.popup-content {
  width: 480px !important;
}
</style>
