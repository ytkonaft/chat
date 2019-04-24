import Vue from "vue";
import Router from "vue-router";
import Chat from "@/views/Chat.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Chat",
      component: Chat
    },
    {
      path: "/sign-in",
      name: "Sign in",
      component: SignIn
    },
    {
      path: "/sign-up",
      name: "Sign up",
      component: SignUp
    }
  ]
});
