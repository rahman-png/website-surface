<template>
  <div id="verified-page">
    <div class="content-box cm top90px">
      <div class="container" ref="cartContainer">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <div class="d-flex align-items-center justify-content-center">
              <div class="text-center">
                <img src="/img/woman-icon.svg" class="img-fluid mb30" />
                <div class="sh-xs mb8">Your account now is verified</div>
                <p class="s grey mb40"></p>
                <router-link to="/sign-in" class="btn btn-solid">
                  Sign In
                </router-link>
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
  name: "Verified",
  mounted() {
    this.verified();
  },
  methods: {
    verified() {
      const loader = this.$loading.show({
        container: this.$refs.cartContainer,
        lockScroll: true,
        opacity: 1
      });
      axios
        .post(
          `${process.env.VUE_APP_BASE_URL_API}/auth/verify-email/${this.$route.params.id}`
        )
        .then(response => {
          console.log(response.data);
          loader.hide();
        });
    }
  }
};
</script>
