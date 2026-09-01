import Vue from "vue";
import * as moment from "moment";

Vue.filter("format_date", value => {
  return moment(value, "DD/MMMM/YYYY").format("DD / MM / YYYY");
});

Vue.filter("format_k_currency", value => {
  return Math.abs(value) > 999
    ? "Rp. " + Math.sign(value) * (Math.abs(value) / 1000).toFixed(1) + "k"
    : "Rp. " + Math.sign(value) * Math.abs(value);
});

Vue.filter("convertToRupiah", function(angka) {
  var rupiah = "";
  var angkarev = angka
    .toString()
    .split("")
    .reverse()
    .join("");
  for (var i = 0; i < angkarev.length; i++)
    if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + ".";
  return rupiah
    .split("", rupiah.length - 1)
    .reverse()
    .join("");
});

Vue.filter("convertToAngka", function(rupiah) {
  if (rupiah == "") {
    return 0;
  } else {
    return parseInt(rupiah.replace(/,.*|[^0-9]/g, ""), 10);
  }
});

Vue.filter("capitalize", function(string) {
  return string.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());
});

Vue.filter("date_only", function(date) {
  return moment(date).format("DD / MM / YYYY");
});

Vue.filter("time_only", function(date) {
  return moment(date).format("HH:mm:ss");
});

Vue.filter("date_time", function(date) {
  return moment(date).format("DD MMMM YYYY HH:mm:ss");
});

export default Vue;
