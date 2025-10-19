import { createApp } from 'vue'
import App from './App.vue'
import { createHead } from '@vueuse/head'
import { router } from "./router.js";
import "./assets/main.css";

const head = createHead()
createApp(App).use(router).mount('#app');
