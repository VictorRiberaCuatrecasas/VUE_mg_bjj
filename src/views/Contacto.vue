<template>
  <div>
    <v-img class="headerPics" :src="require('@/assets/contactanosimg.png')" />
    <!-- CONTACT FORM -->
    <div class="formButton">
      <form>
        <v-layout row justify-center>
          <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on }">
              <v-btn color="red darken-2" dark v-on="on">CONTÁCTANOS</v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span style="margin:auto; color:#D32F2F" class="headline">CONTÁCTANOS</span>
              </v-card-title>
              <v-alert
                style="margin-top:2em"
                :value="true"
                color="error darken-1"
                icon="warning"
                outline
              >Asegurate de rellenar los campos obligatorios (*).</v-alert>
              <v-card-text>
                <v-container grid-list-md>
                  <v-layout wrap>
                    <v-flex xs12 sm6 md4>
                      <v-text-field
                        color="red darken-2"
                        :rules="nameRules"
                        v-model="nombre"
                        label="Nombre*"
                        required
                      ></v-text-field>
                    </v-flex>

                    <v-flex xs12>
                      <v-text-field
                        :rules="emailRules"
                        color="red darken-2"
                        v-model="mail"
                        label="Email*"
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field color="red darken-2" v-model="telf" label="Teléfono"></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6>
                      <v-autocomplete
                        v-model="fili"
                        color="red darken-2"
                        :items="['MG Granollers', 'Animal Bjj', 'Internacional Gym']"
                        label="Filial a contactar"
                        multiple
                      ></v-autocomplete>
                    </v-flex>
                    <v-flex xs12>
                      <v-textarea
                        :rules="msgRules"
                        v-model="msg"
                        color="red darken-2"
                        label="Mensaje*"
                        required
                      ></v-textarea>
                    </v-flex>
                  </v-layout>
                </v-container>
                <small>*campo obligatorio</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red darken-1" flat @click="dialog = false">Cerrar</v-btn>
                <v-btn
                  color="red darken-1"
                  flat
                  @click="dialog = false, sendMail(), playSound(href='http://soundbible.com/mp3/Click%20On-SoundBible.com-1697535117.mp3')"
                >Enviar</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-layout>
      </form>
    </div>
    <!-- MG GRANOLLERS MAP -->
    <div class="contactInfo">
      <h2 style="margin-top:1em">MG Granollers</h2>
      <p>
        <strong>Profesor:</strong> Igor Lima
      </p>
      <p>
        &#x260E
        692 51 35 55
      </p>
      <p>
        &#x1F4CD
        <em>c/ Font del Cargol, 16, 08430 La Torreta</em>
      </p>
    </div>
    <iframe
      class="contactMap"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2983.549663650317!2d2.29818531529674!3d41.60062417924522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4c7dfa9c07015%3A0xa2e518339ddafae7!2sDynamic!5e0!3m2!1ses!2ses!4v1561741068277!5m2!1ses!2ses"
      allowfullscreen
    ></iframe>
    <!-- ANIMAL BJJ MAP -->
    <div class="contactInfo">
      <h2 style="margin-top:1em">Animal BJJ (Cardedeu)</h2>
      <p>
        <strong>Profesores:</strong> Cesar, Miguel, Javi
      </p>
      <p>
        &#x1F4CD
        <em>c/ de la Mare de Déu del Pilar, 5, Cardedeu</em>
      </p>
    </div>
    <iframe
      class="contactMap"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11927.73396683662!2d2.361857!3d41.635569!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x79a6ea92885fb540!2sJeni+Sport!5e0!3m2!1ses!2ses!4v1561744139047!5m2!1ses!2ses"
      allowfullscreen
    ></iframe>
    <!-- INTERNACIONAL GYM MAP -->
    <div class="contactInfo">
      <h2 style="margin-top:1em">Internacional Gym (Canovelles)</h2>
      <p>
        <strong>Profesor:</strong> Eduardo Bigorda
      </p>
      <p>
        &#x1F4CD
        <em>c/ Indústria, 106, 08420 Canovelles,</em>
      </p>
    </div>
    <iframe
      style="margin-bottom:2em"
      class="contactMap"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11929.326592613184!2d2.2834188!3d41.6269623!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xecbca751aae542f5!2sINTERNACIONAL+GYM!5e0!3m2!1ses!2ses!4v1561744439176!5m2!1ses!2ses"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data: () => ({
    dialog: false,
    nombre: "",
    mail: "",
    telf: "",
    fili: "",
    msg: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 25) || "Name must be less than 25 characters"
    ],
    msgRules: [
      v => !!v || "Message is required",
      v => (v && v.length >= 20) || "Message must be more than 20 characters"
    ]
  }),

  methods: {
    playSound(sound) {
      if (sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    },
    sendMail() {
      Email.send({
        Host: "smtp.mailgun.org",
        Port: 587,
        Username:
          "postmaster@sandbox50cfa1e90b1b48c09b59aaa8c608403b.mailgun.org",
        Password: "c5065cce6be9f2e2a49c7ebef557e7be-c50f4a19-63fb4fa1",
        To: ["victorribera92@gmail.com", "sousamaheli@gmail.com"],
        From: this.mail,
        Subject: "MG envío de FORMULARIO DE CONTACTO",
        Body:
          "NOMBRE: " +
          this.nombre +
          "<br>TELEFONO: " +
          this.telf +
          "<br> EMAIL A RESPONDER: " +
          this.mail +
          "<br>FILIAL A CONTACTAR: " +
          this.fili +
          "<br> MENSAJE: " +
          this.msg
      }).then(message => alert("Tu mensaje ha sido enviado."));
    }
  }
};
</script>


<style scoped>
p {
  margin: 0;
}
</style>

<style>
.contactMap {
  width: 95%;
  height: 250px;
  margin-left: 2.5%;
  margin-right: 2.5%;
}
.contactInfo {
  margin-left: 2.5%;
}

.formButton {
  margin-top: 1em;
}
</style>
