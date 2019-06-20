<template>
  <v-app>
    <div class="app-background">
      <div class="main-header">
        <h1 class="mgTitle">MG TEAM BJJ</h1>
      </div>

      <v-content>
        <router-view></router-view>
      </v-content>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      //
    };
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Anton&display=swap");

.app-background {
  background-image: url(assets/backgroundgorila.jpg);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100%;
  background-attachment: fixed;
  background-position: center center;
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
  padding-top: 1.2em;
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
</style>