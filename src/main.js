import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import Chartick from "vue-chartkick";
import { VueSpinners } from "@saeris/vue-spinners";
import Chart from "chart.js";

import router from "@/router";

createApp(App)
  .use(router)
  .use(VueSpinners)
  .use(Chartick.use(Chart))
  .mount("#app");
