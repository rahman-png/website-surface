<template>
  <div id="promotion-page">
    <div class="top-marketing">
      <div class="container">
        <div class="heading2xl text-center">
          THE SKINCARE YOU <span class="text-line">WANT</span> NEED.
        </div>
      </div>

      <div class="box-icon-top">
        <div class="bi-item">
          <img src="/img/mp-1.svg" class="img-fluid" />
          <p class="sh-xs">Trusted and licensed team of doctors</p>
        </div>
        <div class="bi-item">
          <img src="/img/mp-2.svg" class="img-fluid" />
          <p class="sh-xs">Science-backed treatments</p>
        </div>
        <div class="bi-item">
          <img src="/img/mp-3.png" class="img-fluid" />
          <p class="sh-xs">Focus on your personal skin journey</p>
        </div>
        <div class="bi-item">
          <img src="/img/mp-4.png" class="img-fluid" />
          <p class="sh-xs">Casual and easy</p>
        </div>
      </div>
    </div>

    <div class="mp-form">
      <div class="container">
        <div class="box-fm mb40">
          <div class="form-part">
            <div class="form-mp-box">
              <p class="sh-xs mb30">
                Book Now! Claim a free PDT skin healing treatment for your first
                time (worth Rp. 250k)
              </p>

              <form
                id="sib-form"
                method="POST"
                action="https://a35c7d39.sibforms.com/serve/MUIEAO0ZqWmMLnA375jvz82vDRghpEv66-NX0XQhH3wolMwt0L70aWkjrHI-7vIb1FNzNBeDVxc7ivHbPduJxpiqgQ8gqdC8Ufy9LxFpVxrwuXysiCC6sBD1FcHVBuvUL_Y4ovRsoM8NMFp64a9TPk6iws67A603mJ_f-diuZ4s2HoOcIVdQbr1lfscQw6Y2oJqOxBczjy4zgtKH"
              >
                <input
                  type="hidden"
                  name="email_address_check"
                  value=""
                  class="input--hidden"
                />
                <input type="hidden" name="locale" value="en" />
                <input type="hidden" name="html_type" value="simple" />
                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-group mb40">
                      <div class="s font-medium mb12 grey">Name</div>
                      <input
                        id="FULLNAME"
                        name="FULLNAME"
                        autocomplete="off"
                        type="text"
                        class="form-control main-form"
                        placeholder="Your full name"
                        v-model="name"
                        required
                      />
                    </div>
                  </div>

                  <div class="col-lg-12">
                    <div class="form-group mb40">
                      <div class="s font-medium mb12 grey">Phone</div>
                      <input
                        id="PHONE"
                        name="PHONE"
                        class="form-control main-form"
                        placeholder="your phone number"
                        autocomplete="off"
                        v-model="phone"
                        required
                      />
                    </div>
                  </div>

                  <div class="col-lg-12">
                    <div class="form-group mb40">
                      <div class="s font-medium mb12 grey">Email</div>
                      <input
                        id="EMAIL"
                        type="email"
                        name="EMAIL"
                        class="form-control main-form"
                        placeholder="your email address"
                        autocomplete="off"
                        v-model="email"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-12">
                    <button type="submit" class="btn btn-solid btn-block">
                      Book now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="img-part">
            <img src="/img/mp-img.jpg" class="img-fluid w100 h100" />
          </div>
        </div>

        <p class="l">
          Check out our
          <a href="#" class="link-u"> COVID safety protocol.</a> We test our
          staff for COVID-19 multiple times a month. Some of our staff have been
          vaccinated against COVID-19.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Promotion",
  metaInfo: {
    title: "Promotion"
  },
  data() {
    return {
      name: null,
      phone: null,
      email: null
    };
  },
  mounted() {}
};
</script>
