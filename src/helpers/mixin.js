import Vue from "vue";
import * as moment from "moment";
const slugify = require("slugify");
import mixpanel from "mixpanel-browser";
mixpanel.init(process.env.VUE_APP_MIX_PANEL_TOKEN, {
  debug: Boolean(process.env.VUE_APP_MIX_PANEL_DEBUG)
});
import DeviceDetector from "device-detector-js";

Vue.mixin({
  data() {
    return {
      google_client_id: process.env.VUE_APP_GOOGLE_SIGNIN_CLIENT_ID
    };
  },
  computed: {
    device() {
      const deviceDetector = new DeviceDetector();
      const userAgent = navigator.userAgent;
      return deviceDetector.parse(userAgent);
    }
  },
  methods: {
    formatDateForParam(value, sourceFormat) {
      return moment(value, sourceFormat).format("YYYY/MM/DD");
    },
    setMoengageAttribute() {
      const user = this.$store.state.userData;
      this.$moengage.updateAttributes({
        name: `${user.firstname} ${user.lastname}`,
        email: user.email,
        mobile: user.phone,
        addFirstName: user.firstname,
        addLastName: user.lastname,
        addGender: user.gender == "male" ? "M" : "L",
        addBirthday: moment(user.birthDate).toDate()
      });
    },
    trackEvent(eventName, payload = null) {
      this.trackMoengageEvent(eventName, payload);
      this.trackFacebookPixelEvent(eventName, payload);
      this.trackGoogleAnalyticsEvent(eventName, payload);
    },
    trackMoengageEvent(eventName, payload = null) {
      if (payload) {
        this.$moengage.addEvent(eventName, payload);
      } else {
        this.$moengage.addEvent(eventName);
      }
    },
    trackFacebookPixelEvent(eventName, payload = null) {
      if (payload) {
        this.$analytics.fbq.event(eventName, payload);
      } else {
        this.$analytics.fbq.event(eventName);
      }
    },
    trackGoogleAnalyticsEvent(eventName, payload = null) {
      if (payload) {
        this.$gtag.event(eventName, payload);
      } else {
        this.$gtag.event(eventName);
      }
    },
    trackMixPanelEvent(eventName, payload = null) {
      if (payload) {
        mixpanel.track(`web_${eventName}`, payload);
      } else {
        mixpanel.track(`web_${eventName}`);
      }
    },
    stringToSlug(string) {
      return slugify(string, {
        replacement: "-",
        lower: true,
        trim: true
      });
    },
    identifyMixpanelUser(user) {
      mixpanel.identify(user.userId);
      mixpanel.people.set({
        first_name: user.firstname,
        last_name: user.lastname,
        name: `${user.firstname} ${user.lastname}`,
        distinct_id: user.userId,
        email: user.email,
        phone: user.phone,
        web_device: `${this.device.client.type} ${this.device.client.name} version ${this.device.client.version} device ${this.device.device.type} ${this.device.device.brand} OS ${this.device.os.name}`
      });
    },
    resetMixpanelUser() {
      mixpanel.reset();
    }
  }
});

export default Vue;
