<template>
  <div id="comming-soon-page">
    <div class="top-marketing">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="heading2xl text-center bottom30px">
              Personalized skincare that delivers.
            </div>
          </div>

          <div class="col-lg-8 offset-lg-2">
            <p class="l text-center">
              Created for all skin types, backed by licensed doctors and
              pharmacies. Acne, Wrinkles (pores & texture), Dark Spots and more.
            </p>
          </div>
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
        <div class="box-fm">
          <div class="form-part-cs">
            <div class="form-cs-box">
              <div class="headingm mb30">
                Sign up to get the exclusives on the Surface+ launch
              </div>
              <p class="l mb30">
                And be the first to know about new products, promos and
                specials!
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
                      Sign up
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="img-part">
            <img src="/img/cs-img.jpg" class="img-fluid w-100 h100" />
          </div>
        </div>
      </div>
    </div>

    <div class="cs-des">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-sm-6">
            <div class="headingl mb30">
              Handpicked, personalized, effective skincare for you and your
              skin.
            </div>
          </div>
          <div class="col-lg-6 col-sm-6">
            <p class="m mb30">
              When our clinics were forced to shut during the COVID pandemic, we
              searched for alternative ways to continue supporting people on
              their skin journey.
            </p>

            <p class="m mb30">
              We created Surface+, a line of personalized prescription and
              over-the-counter skin care and health products, with
              science-backed ingredients aimed at individuals wanting to create
              and maintain healthy skin habits.
            </p>

            <p class="m mb30">
              Every skin journey is a personal one, and we are here to guide you
              through yours. Our in-house aesthetic medical doctors assess your
              medical history to ensure that you are using the right ingredients
              for your skin, and our products are differentiated to fix your
              particular skin concerns - anything from acne to wrinkles (pores,
              texture) and dark spots (pigmentation, freckles, sun spots).
            </p>

            <p class="m mb30">
              Be the first to try Surface+, products by our pharmacy,
              personalized for you and your unique skin.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommingSoon",
  metaInfo: {
    title: "Surface +"
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
