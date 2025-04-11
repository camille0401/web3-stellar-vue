import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import i18n from "./i18n";

import "aos/dist/aos.css";
import "./css/style.css";
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

const app = createApp(App);
app.use(router);
app.use(i18n);
app.use(ToastPlugin, {
    position: 'top-right'
  });
app.mount("#app");
