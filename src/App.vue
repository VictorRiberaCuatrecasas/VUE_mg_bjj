<template>
  <v-app>
    <div>
      <div class="query2">
        <p>ONLY FOR MOBILE OR SCREENS WITH A MAX WIDTH OF 750PX (TRY ADJUSTING YOUR WINDOW)</p>
        <v-img style="max-width:300px; margin:auto" :src="require('@/assets/shrink.png')" />
      </div>

      <div class="app-background query1">
        <router-link style="text-decoration:none" to="/">
          <div class="main-header">
            <h1 id="mgTitle" class="mgTitle">MG TEAM BJJ</h1>
          </div>
        </router-link>
        <Navbar></Navbar>
        <v-content class="footer1">
          <router-view class="footer2"></router-view>
          <Footer class="footer3"></Footer>
        </v-content>
      </div>
    </div>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer
  },

  data() {
    return {
      //
    };
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
@import url("https://fonts.googleapis.com/css?family=Anton&display=swap");

@media (min-width: 750px) {
  .query1 {
    display: none;
  }
  .query2 {
    font-size: 32px;
    text-align: center;
    padding-top: 10%;
  }
}

/* 
 >>>>ALTERNARIVE BACKGROUND WITH FIXED POSITION (DOESNT WORK WELL ON MOBILE)
.pap-background {                   
  background-image: url(assets/backgroundgorila.jpg);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100%;
  width: 100%;
  background-attachment: fixed !important;
  background-position: center center;
} */

/* .background-fix {
  background-color: #909090;
  height: 100%;
  width: 100%;
} */

body {
  font-family: "Montserrat", sans-serif;
}
.app-background {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: url(assets/backgroundgorila1.jpg);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  overflow: scroll;
}

.main-header {
  height: 6em;
  background-image: url(assets/banner.png);
  background-size: cover;
  text-align: center;
  font-family: "Anton", Impact, Haettenschweiler, "Arial Narrow Bold",
    sans-serif;
  color: white;
  letter-spacing: 2px;
  padding-top: 1.1em;
  border: 3px solid red;
}
.mgTitle {
  font-size: 35px;
}
.toolbar {
  background-color: black !important;
  color: rgb(199, 184, 184) !important;
  text-decoration: none;
}
.selectedPage {
  color: white !important;
}
.menu-icon {
  font-size: 36px;
}
.tool-items {
  display: block;
  width: 100%;
  padding: 5px 0 5px 1.8em;
  border-bottom: 1px dotted rgb(53, 50, 50);
  font-family: "Anton", Impact, Haettenschweiler, "Arial Narrow Bold",
    sans-serif;
}
.tool-items:hover {
  background-color: rgb(24, 22, 22) !important;
  color: white !important;
}
.stickyNav {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;
}

/* //FOOTER */
.footer1 {
  position: relative;
  min-height: calc(100% - 90px);
}
.footer2 {
  padding-bottom: 90px;
}
.footer3 {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 90px;
}

/* FADE IN UP HEADER PICS */
.headerPics {
  -webkit-animation-duration: 1.5s;
  animation-duration: 1.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  animation-name: fadeIn;
  -webkit-animation-name: fadeIn;
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
    -webkit-transform: translateY(400px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>