import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Nosotros from "./views/Nosotros.vue";
import Equipo from "./views/Equipo.vue";
import Tecnicas from "./views/Tecnicas.vue";
import Galeria from "./views/Galeria.vue";
import Horarios from "./views/Horarios.vue";
import Comentarios from "./views/Comentarios.vue";
import Contacto from "./views/Contacto.vue";
import Cinturones from "./views/Cinturones.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  // scrollBehavior(to, from, savedPosition) {
  //   return { x: 0, y: 0 };
  // },
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
      path: "/comentarios",
      name: "comentarios",
      component: Comentarios
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
