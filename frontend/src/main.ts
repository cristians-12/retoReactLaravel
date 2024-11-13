import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Home from "./pages/Home.vue";
import Auth from "./pages/AuthPage.vue";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";

const routes = [
  { path: "/", component: Home },
  { path: "/register", component: Auth },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");
