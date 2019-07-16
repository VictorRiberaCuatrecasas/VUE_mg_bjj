import Vue from "vue";
import "./plugins/fontawesome";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//
import { VLazyImagePlugin } from "v-lazy-image";
Vue.use(VLazyImagePlugin);
import AOS from "aos";
import "aos/dist/aos.css";
import firebase from "firebase";

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init();
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyD8Qo8Mb9ZJQI_jOXS6YxOMdo8HT0NNqOY",
      authDomain: "mg-bjj.firebaseapp.com",
      databaseURL: "https://mg-bjj.firebaseio.com",
      projectId: "mg-bjj",
      storageBucket: "mg-bjj.appspot.com",
      messagingSenderId: "626462471992",
      appId: "1:626462471992:web:c5b07e17768a2fa5"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    //para mantenerse logueado:
    firebase.auth().onAuthStateChanged(user => {
      //hacemos esto para que al recargar no se desconecte el user
      if (user) {
        console.log("Hay usuario");
        this.$store.commit("setUser", firebase.auth().currentUser);
      } else {
        console.log("No user");
        this.$store.commit("setUser", null);
      }
    });
  },
  router,
  store,
  render: h => h(App)
}).$mount("#app");
