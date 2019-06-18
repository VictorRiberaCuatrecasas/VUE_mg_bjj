<template >
  <v-app>
    <div class="app-background">
      <div>
        <div class="main-header">
          <h1>MG TEAM BJJ</h1>
        </div>
        <div class="main-nav"></div>
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
  height: 4.5em;
  background-image: url(assets/banner.png);
  background-size: cover;
  text-align: center;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  color: white;
  letter-spacing: 2px;
  padding-top: 0.6em;
}
</style>