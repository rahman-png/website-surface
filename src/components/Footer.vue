<template>
  <footer class="footer">
    <div class="container">
      <div class="row justify-content-between align-items-center mb80">
        <div class="col-sm-3 col-lg-5">
          <div class="center-mm">
            <img src="/img/logo.svg" class="img-fluid white logo-footer" />
            <img
              src="/img/logo_YOBO_by_QRAVED_2.png"
              class="img-fluid white logo-footer"
              style="margin-left: 16px;"
            />
          </div>
        </div>
        <div class="col-sm-7 col-lg-5">
          <form
            action="https://surfaceskinhabit.us5.list-manage.com/subscribe/post?u=df0985067db3c57cf76f9683a&amp;id=284cf4453f"
            method="post"
            target="_blank"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
          >
            <div class="coupon">
              <div class="s font-medium mb8">Subscribe to our newsletter</div>
              <div class="row">
                <div class="col-sm-7 btn-mm">
                  <input
                    type="email"
                    value=""
                    name="EMAIL"
                    class="form-control form-white bg-transparent"
                    placeholder="Your email"
                    id="mce-EMAIL"
                    required
                  />
                </div>
                <div class="col-sm-5">
                  <button
                    type="submit"
                    id="mc-embedded-subscribe"
                    class="btn btn-white btn-block mb15"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div class="row-footer">
        <div class="footer-col">
          <div class="m mb20 font-medium">Questions</div>
          <ul class="link-footer">
            <li>
              <router-link to="/skin-habit#faq" class="link-item-footer">
                FAQ Skin Habit Clinic
              </router-link>
            </li>
            <li>
              <router-link to="/surfaceplus#faq" class="link-item-footer">
                FAQ Surface Plus
              </router-link>
            </li>
          </ul>
        </div>
        <div class="footer-col">
          <div class="m mb20 font-medium">Find Us</div>
          <ul class="link-footer">
            <li>
              <a
                href="https://goo.gl/maps/ccFrditSjDFxMdea7"
                target="_blank"
                class="link-item-footer"
              >
                Surface Setiabudi
              </a>
            </li>
            <li>
              <a
                href="https://goo.gl/maps/To4vhncjaGvSAAms5"
                target="_blank"
                class="link-item-footer"
              >
                Surface Lippo Mall
              </a>
            </li>
            <li>
              <a
                href="https://goo.gl/maps/UZ68DP7YEq91BY7c7"
                target="_blank"
                class="link-item-footer"
              >
                Surface Citos
              </a>
            </li>
            <li>
              <a
                href="https://maps.app.goo.gl/qPSLYCx6LJ917xda6"
                target="_blank"
                class="link-item-footer"
              >
                Surface Cibubur
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-col for-l">
          <div class="m mb20 font-medium">Contact Us</div>
          <ul class="link-footer">
            <li>
              <a
                href="mailto:hello@surfaceskinhabit.com"
                class="link-item-footer"
              >
                hello@surfaceskinhabit.com
              </a>
            </li>
            <li>
              <a href="https://wa.me/+6281222346115" class="link-item-footer">
                +6281222346115
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-col">
          <div class="m mb20 font-medium">Others</div>
          <ul class="link-footer">
            <li>
              <a href="#" class="link-item-footer">Careers</a>
            </li>
            <li>
              <a href="#" class="link-item-footer">
                Membership & Referrals
              </a>
            </li>
            <li>
              <router-link to="/privacy-policy" class="link-item-footer">
                Privacy Policy
              </router-link>
            </li>
            <li>
              <router-link to="/terms-of-service" class="link-item-footer">
                Terms of Service
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="row align-items-center">
        <div class="col-lg-3 col-sm-3">
          <div class="center-mm">
            <div class="m mb20 font-medium">Download our app</div>
          </div>
          <div class="d-flex w-100 mb20 justify-fc">
            <a href="#" class="icon-footer">
              <img src="img/app-ios.svg" class="mr-4" />
            </a>
            <a href="#" class="icon-footer">
              <img src="img/app-android.svg" class="mr-4" />
            </a>
          </div>
        </div>

        <div class="col-lg-7 col-sm-9">
          <div class="center-mm">
            <div class="m mb20 font-medium ml-2">Follow Us</div>
          </div>
          <ul class="footer-bottom mb20">
            <li>
              <a
                href="https://www.instagram.com/surfaceplus.id"
                class="fb-link"
              >
                <img src="/img/instagram-icon.svg" class="mr-3 ig-icon" />
                @surfaceplus.id
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/surfaceskinhabit"
                class="fb-link"
              >
                <img src="img/instagram-icon.svg" class="mr-3 ig-icon" />
                @surfaceskinhabit
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/surfaceskincaremystic/about/"
                class="fb-link"
              >
                <img src="img/linkedin.svg" class="mr-3 ig-icon" />
                Surface Skin Habit
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import axios from "axios";

export default {
  name: "Footer",
  data() {
    return {
      blogByCategory: []
    };
  },
  mounted() {
    this.fetchContent();
  },
  methods: {
    fetchContent() {
      axios
        .get(
          `${process.env.VUE_APP_BASE_URL_API_CONTENT}/wp-json/surface/v1/blog`
        )
        .then(response => {
          if (response.data.status == "ok") {
            const result = response.data.data;
            this.blogByCategory =
              result.category !== undefined ? result.category : [];
          }
        });
    }
  }
};
</script>
