import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Products from "../views/Products.vue";
import Contact from "../views/Contact.vue";
import About from "../views/About.vue";

const routes = [
  {
    path: "/",
    name: "Kodu",
    component: Home,
  },
  {
    path: "/kontakt",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/tooted",
    name: "Products",
    component: Products,
  },
  {
    path: "/meist",
    name: "About",
    component: About
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
