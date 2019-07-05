<template>
  <div class="footerDiv">
    <div class="rssLogos">
      <button style="margin-right:25px; margin-top:5px" class="footerButtons1">
        <a href="https://www.instagram.com/mgteambarcelona/">
          <v-img class="footerButtons" :src="require('@/assets/igLogo.png')"></v-img>
        </a>
      </button>
      <button style="margin-right:25px; margin-top:5px; " class="footerButtons1">
        <a href="https://www.facebook.com/mgteam.bjj/">
          <v-img class="footerButtons" :src="require('@/assets/fbLogo.png')"></v-img>
        </a>
      </button>
      <button>
        <a href="http://jiujitsugranollers.blogspot.com/">
          <v-img
            style="height:20px; border-radius: 25%"
            class="footerButtons"
            :src="require('@/assets/blogger.png')"
          ></v-img>
        </a>
      </button>
    </div>
    <hr class="hrFooter" />
    <div class="copyright">MG Team &copy; {{ new Date().getFullYear() }}</div>
  </div>
</template>



<script>
export default {};
</script>

<style>
.footerDiv {
  background-color: rgba(39, 35, 35, 0.479);
}
.footerButtons1 {
  height: 24px;
  width: 24px;
}

.footerButtons {
  height: 24px;
  width: 24px;
}

.hrFooter {
  border: 1px solid gray;
  background-color: gray;
}

.rssLogos {
  display: flex;
  justify-content: center;
  height: 35px;
}
.copyright {
  height: 35px;
  text-align: center;
  margin-top: 10px;
  color: rgba(44, 40, 40, 0.918);
}
</style>
