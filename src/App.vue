<template>
  <div id="app">
    <Header></Header>
    <router-view :key="$route.fullPath" />
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import $ from "jquery";
// import firebase from "firebase/app";
// import "firebase/messaging";
import axios from "axios";

export default {
  name: "App",
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Home",
    // all titles will be injected into this template
    titleTemplate: "%s | SURFACE"
  },
  components: {
    Header,
    Footer
  },
  created() {
    window.addEventListener("mousewheel", this.onMouseWheel, false);
    window.addEventListener("DOMMouseScroll", this.onMouseWheel, false);

    // try {
    //   firebase
    //     .messaging()
    //     .requestPermission()
    //     .then(() => {
    //       console.log("Notification permission granted");
    //       firebase
    //         .messaging()
    //         .getToken()
    //         .then(token => {
    //           this.updateToken(token);
    //           this.receiveMessage();
    //         });
    //     })
    //     .catch(err => {
    //       console.log("Unable to get token ", err);
    //     });
    // } catch (e) {
    //   console.log(e);
    // }
  },
  mounted() {
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .not(".faq")
      .not(".not-link")
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length
            ? target
            : $("[name=" + this.hash.slice(1) + "]");
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $("html, body").animate(
              {
                scrollTop: target.offset().top
              },
              1000,
              function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) {
                  // Checking if the target was focused
                  return false;
                } else {
                  $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                  $target.focus(); // Set focus again
                }
              }
            );
          }
        }
      });
  },
  methods: {
    onMouseWheel() {
      clearTimeout($.data(this, "timer"));

      $(".swiper-wrapper").addClass("mousewheel");

      $.data(
        this,
        "timer",
        setTimeout(function() {
          $(".swiper-wrapper").removeClass("mousewheel");
        }, 250)
      );
    },
    updateToken(token) {
      if (this.$store.state.userData) {
        let param = new FormData();
        param.append("firebaseToken", token);
        axios
          .put(
            `${process.env.VUE_APP_BASE_URL_API}/user/update/firebase-token`,
            param,
            {
              headers: {
                Authorization: `Bearer ${this.$store.getters.surfaceToken}`
              }
            }
          )
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
    // receiveMessage() {
    //   try {
    //     firebase.messaging().onMessage(payload => {
    //       console.log("payload ", payload);
    //       if (Notification) {
    //         if (Notification.permission == "granted") {
    //           new Notification(payload.notification.title, {
    //             icon: `${window.location.origin}/img/logo.svg`,
    //             body: payload.notification.body
    //           });
    //         }
    //       }
    //     });
    //   } catch (e) {
    //     console.log(e);
    //   }
    // }
  }
};
</script>
