import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Home from "./pages/Home.vue";
import Auth from "./pages/AuthPage.vue";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";
import { useCounterStore } from "./store/user/userStore";
import DashboardPage from "./pages/DashboardPage.vue";
import ProfilePage from "./pages/ProfilePage.vue";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { IoEyeOutline, BiEyeFill, BiEyeSlashFill } from "oh-vue-icons/icons";

addIcons(IoEyeOutline, BiEyeFill, BiEyeSlashFill);

const routes = [
  { path: "/", component: Home },
  {
    path: "/register",
    component: Auth,
    beforeEnter: (to: any, from: any, next: any) => {
      const store = useCounterStore();
      if (store.isLogged) {
        next("/profile"); // Redirige a /dashboard si ya está autenticado
      } else {
        next();
      }
    },
  },
  {
    path: "/dashboard",
    component: DashboardPage,
  },
  {
    path: "/profile",
    component: ProfilePage,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
const pinia = createPinia();

const app = createApp(App);

app.use(router).use(pinia).component("v-icon", OhVueIcon).mount("#app");
