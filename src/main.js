import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import "./assets/tailwind/tailwind.css";
import "primevue/resources/themes/md-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const app = createApp(App);

app.use(router);
app.use(PrimeVue);

app.mount("#app");
