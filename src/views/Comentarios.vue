<template>
  <div>
    <v-img class="headerPics" :src="require('@/assets/chatIgor.jpg')" />
    <p
      class="equipoIntroText"
    >En esta sección podrás dejar tantos comentarios como quieras, pero recuerda que no van a poder ser borrados!</p>
    <div v-if="$store.state.user == null" class="btnChat">
      <p
        class="equipoIntroText"
      >Debes estar logueado con una cuenta de Google para poder dejar comentarios</p>
    </div>
    <div class="btnChat" style="margin-bottom: 2em">
      <button
        v-if="$store.state.user == null"
        @click="login()"
        style="text-align:center"
        class="loginBtn loginBtn--google"
      >Login with Google</button>
    </div>
    <div class="mensajesBox">
      <div id="mensajes" v-for="(m,index) in mensajes" :key="index">
        <p style="margin-bottom:0">
          <strong>{{m.name}} :</strong>
        </p>
        <p style="margin-top:0; margin-bottom:5px">{{m.text}}</p>
        <p style="margin-bottom:5px; font-size:12px">
          <em>Escrito el {{m.dateDay}}/{{m.dateMonth}}/{{m.dateYear}}.</em>
        </p>
      </div>
      <div id="scrollToLast"></div>
    </div>

    <v-textarea
      name="text"
      class="inputComentario"
      v-model="text"
      color="red darken-4"
      label="Deja tu comentario"
    ></v-textarea>
    <v-btn
      href="#scrollToLast"
      color="red darken-4"
      class="comentarioBtn"
      @click="sendMessage(),eraseText(),ossAudio()"
    >Enviar</v-btn>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data: () => ({
    text: "",
    mensajes: "",
    comentario: ""
  }),

  mounted() {
    this.getMessages();
  },
  methods: {
    ossAudio() {
      var audio = new Audio(require("../assets/audio/oss.mp3"));
      audio.play();
    },
    eraseText() {
      this.text = "";
    },

    ossAudio() {
      var audio = new Audio(require("../assets/audio/oss.mp3"));
      audio.play();
    },
    login: function() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(user => {
          console.log(user);

          if (user) {
            this.$store.commit("setUser", firebase.auth().currentUser);
          }
        });
      console.log("login");
    },

    sendMessage: function() {
      let name = firebase.auth().currentUser.displayName; // Que imprima la variable name
      let objectToSend = {
        text: this.text, // si key and value son iguales, solamente hay que poner uno.
        name: name,
        dateDay: new Date().getUTCDate(),
        dateMonth: new Date().getUTCMonth() + 1,
        dateYear: new Date().getUTCFullYear()
      };
      console.log(objectToSend);

      firebase
        .database()
        .ref("comentarios")
        .push(objectToSend); // accede a la base de datos y pushea la información acumulandola
      console.log("hei");
    },
    //
    getMessages: function() {
      firebase
        .database()
        .ref("comentarios")
        .on("value", data => {
          // el on es como un eventlistener
          this.mensajes = Object.values(data.val());
        });
      console.log(mensajes);
    }
  }
};
</script>

<style>
.comentarioBtn {
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 2em;
}
.inputComentario {
  max-width: 90%;
  margin: auto;
}
.mensajesBox {
  margin-bottom: 1em;
  max-height: 30em;
  overflow: scroll;
}
#mensajes {
  border: 2px solid rgb(185, 0, 0);
  max-width: 90%;
  border-radius: 10px;
  background-color: gray;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.801);
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  opacity: 0.7;
  text-align: justify;
  max-width: 90%;
  margin: auto;
  margin-bottom: 3em;
  white-space: -moz-pre-wrap !important; /* Mozilla, since 1999 */
  white-space: -webkit-pre-wrap; /*Chrome & Safari */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  white-space: pre-wrap; /* css-3 */
  word-wrap: break-word; /* Internet Explorer 5.5+ */
  word-break: break-all;
  white-space: normal;
}
.btnChat {
  text-align: justify;
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-animation-duration: 1.5s;
  animation-duration: 1.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  animation-name: fadeInUp;
  -webkit-animation-name: fadeInUp;
}
.loginBtn {
  box-sizing: border-box;
  position: relative;
  /* width: 13em;  - apply for fixed size */
  margin: 0.2em;
  padding: 0 15px 0 46px;
  border: none;
  text-align: left;
  line-height: 34px;
  white-space: nowrap;
  border-radius: 0.2em;
  font-size: 16px;
  color: #fff;
}
.loginBtn:before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 34px;
  height: 100%;
}
.loginBtn:focus {
  outline: none;
}
.loginBtn:active {
  box-shadow: inset 0 0 0 32px rgba(0, 0, 0, 0.1);
}
.loginBtn--google {
  /*font-family: "Roboto", Roboto, arial, sans-serif;*/
  background: #dd4b39;
}
.loginBtn--google:before {
  border-right: #bb3f30 1px solid;
  background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png")
    6px 6px no-repeat;
}
.loginBtn--google:hover,
.loginBtn--google:focus {
  background: #e74b37;
}
</style>
