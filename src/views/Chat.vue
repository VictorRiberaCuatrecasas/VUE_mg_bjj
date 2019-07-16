<template>
  <div>
    <div id="mensajes" v-for="m in mensajes">{{m}}</div>
    <input v-model="text" style="background-color:white" type="text" name="text" id="text" />
    <v-btn @click="sendMessage()">Send</v-btn>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data: () => ({
    text: "",
    mensajes: ""
  }),

  mounted() {
    this.getMessages();
  },
  methods: {
    // sendMessage: function() {
    //   var text = document.getElementById("text").value;
    //   var name = firebase.auth().currentUser.displayName;
    //   var objectToSend = {
    //     text,
    //     name
    //   };
    //   firebase
    //     .database()
    //     .ref("comentarios")
    //     .push(objectToSend);
    //   console.log(objectToSend);
    // },

    // getMessages: function() {
    //   firebase
    //     .database()
    //     .ref("comentarios")
    //     .on("value", data => {
    //       console.log(data.val());

    //       document.getElementById("mensajes").innerHTML = "";

    //       for (let key in data.val()) {
    //         let element = data.val()[key];

    //         let p = document.createElement("p");
    //         p.append(element.text);
    //         document.getElementById("mensajes").append(p);
    //       }
    //     });

    //   console.log("get");
    // }

    sendMessage: function() {
      let name = firebase.auth().currentUser.displayName; // Que imprima la variable name
      let objectToSend = {
        text: this.text, // si key and value son iguales, solamente hay que poner uno.
        name: name
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
</style>
