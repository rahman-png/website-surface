<template>
  <div>
    <div class="nav-mobile fixed-top">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-6">
            <div class="logo-mobile">
              <router-link to="/" class="link-ml">
                <img src="/img/logo-text.svg" class="logo-black" />
              </router-link>
            </div>
          </div>
          <div class="col-6">
            <div class="hamburger" id="hamburger-menu">
              <span class="line"></span>
              <span class="line"></span>
              <span class="line"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="menu-body d-flex align-items-center justify-content-center">
      <div class="btn btn-close-menu"><i class="fa fa-times"></i></div>
      <ul class="link-menu">
        <li class="link-menu-item">
          <router-link class="fix-menu-link" to="/skin-habit">
            TREATMENTS
          </router-link>
        </li>
        <li class="link-menu-item">
          <router-link class="fix-menu-link" to="/surfaceplus">
            PRODUCTS
          </router-link>
        </li>
        <li class="link-menu-item">
          <router-link class="fix-menu-link" to="/blog">
            TIPS
          </router-link>
        </li>
        <li class="link-menu-item">
          <router-link class="fix-menu-link" to="/auth">
            ACCOUNT
          </router-link>
        </li>
        <li class="link-menu-item">
          <button
            id="app-download"
            class="fix-menu-link button"
            type="button"
            @click="$store.commit('SHOW_MODAL_DOWNLOAD', true)"
          >
            Download our app
          </button>
        </li>
      </ul>
    </div>

    <header class="main-nav">
      <div class="container">
        <div class="navigation">
          <div class="for-logo">
            <router-link class="logo" to="/home">
              <img src="/img/logo-text.svg" alt="Logo" />
            </router-link>
          </div>
          <div class="for-menu">
            <ul class="menubar">
              <li class="nav-item">
                <router-link class="nav-link" to="/skin-habit">
                  Treatments
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/surfaceplus">
                  Products
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/blog">
                  tips
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/auth">
                  Account
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="for-app-btn">
        <button
          id="app-download"
          class="btn btn-down-app"
          type="button"
          @click="$store.commit('SHOW_MODAL_DOWNLOAD', true)"
        >
          Download our app
        </button>
      </div>
    </header>

    <div
      class="for-app"
      :class="{ 'overlay-show': $store.state.modalDownloadApp }"
    >
      <div class="box-download-app">
        <button
          class="btn btn-close-da"
          @click="$store.commit('SHOW_MODAL_DOWNLOAD', false)"
        >
          <img src="/img/x.svg" />
        </button>

        <img src="/img/app-icon.png" class="img-fluid mb30" />

        <div class="l mb15">Download the Surface mobile app</div>
        <p class="s mb30">
          Experience Surface anytime, anywhere. Book treatments and shop
          skincare within minutes, at your fingertips.
        </p>

        <div class="row">
          <div class="col-6">
            <a
              target="_blank"
              href="https://apps.apple.com/app/surface-personalized-skincare/id1566552777"
              class="btn btn-download-app btn-block"
            >
              <img src="/img/app-ios.svg" />App Store
            </a>
          </div>
          <div class="col-6">
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.app.surfaceskinhabit"
              class="btn btn-download-app btn-block"
            >
              <img src="/img/app-android.svg" />Play Store
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "Header",
  watch: {
    $route() {
      $(".menu-body").removeClass("menu-body-show");
    }
  },
  mounted() {
    $(window).scroll(() => {
      var scrollPos = $(window).scrollTop();
      if (scrollPos > 50) {
        $(".nav-mobile").addClass("dark");
        $(".hamburger .line").addClass("white");
        $(".logo-fix").addClass("no-filter");
        $(".logo-mobile").addClass("white");
      } else {
        $(".nav-mobile").removeClass("dark");
        $(".hamburger .line").removeClass("white");
        $(".logo-fix").removeClass("no-filter");
        $(".logo-mobile").removeClass("white");
      }
      if (scrollPos <= 50) {
        $(".nav-black-blog").addClass("hide-top");
      } else {
        $(".nav-black-blog").removeClass("hide-top");
      }
    });

    $("#hamburger-menu").on("click", function() {
      $(".menu-body").addClass("menu-body-show");
    });
    $(".btn-close-menu").on("click", function() {
      $(".menu-body").removeClass("menu-body-show");
    });
  }
};
</script>
