import { createApp, VueElement } from "vue";
import App from "./App.vue";
import router from "./router";


// import "./assets/main.css";

const app = createApp(App);

VueElement.prototype.$info = "Rifqi";

app.use(router);

app.mount("#app");