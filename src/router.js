import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Nosotros from "./views/Nosotros.vue";
import Equipo from "./views/Equipo.vue";
import Tecnicas from "./views/Tecnicas.vue";
import Galeria from "./views/Galeria.vue";
import Horarios from "./views/Horarios.vue";
import Chat from "./views/Chat.vue";
import Contacto from "./views/Contacto.vue";
import Cinturones from "./views/Cinturones.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/nosotros",
      name: "nosotros",
      component: Nosotros
    },
    {
      path: "/equipo",
      name: "equipo",
      component: Equipo
    },
    {
      path: "/tecnicas",
      name: "tecnicas",
      component: Tecnicas
    },
    {
      path: "/galeria",
      name: "galeria",
      component: Galeria
    },
    {
      path: "/horarios",
      name: "horarios",
      component: Horarios
    },
    {
      path: "/chat",
      name: "chat",
      component: Chat
    },
    {
      path: "/contacto",
      name: "contacto",
      component: Contacto
    },
    {
      path: "/equipo/cinturones",
      name: "cinturones",
      component: Cinturones
    }
  ]
});
