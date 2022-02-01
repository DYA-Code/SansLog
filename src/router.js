import { createWebHistory, createRouter } from "vue-router"

import Home from "./views/Home.vue"
import Login from "./views/Login.vue"
import Register from "./views/Register.vue"
import Viewer from "./views/View.vue"
import Write from "./views/Write.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/view",
    name: "Viewer",
    component: Viewer,
  },
  {
    path: "/write",
    name: "Write",
    component: Write,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;