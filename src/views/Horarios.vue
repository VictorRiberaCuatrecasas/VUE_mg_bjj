<template>
  <div>
    <v-img class="headerPics" :src="require('@/assets/imghorarios.jpg')" />
    <div style="margin-top: 15px">
      <!-- FILIAL MG TEAM GRANOLLERS -->

      <v-expansion-panels>
        <v-expansion-panel class="timetable horarios-head" popout>
          <v-expansion-panel-content class="horarioFilialesMg" ripple>
            <div slot="header" class="horarioFiliales">MG GRANOLLERS</div>
            <v-card>
              <div>
                <!-- LUNES -->
                <v-expansion-panels>
                  <v-expansion-panel class="timetable horarios-head" popout>
                    <v-expansion-panel-content ripple>
                      <div slot="header" class="darken">LUNES</div>
                      <v-card>
                        <table class="dayTable darken">
                          <tr>
                            <td class="horarios-hora">07:00 - 08:00</td>
                            <td class="horarios-bjj">BJJ</td>
                          </tr>
                          <tr>
                            <td class="horarios-hora">10:30 - 12:30</td>
                            <td class="horarios-bjj">BJJ</td>
                          </tr>
                          <tr>
                            <td class="horarios-hora">17:00 - 18:30</td>
                            <td class="horarios-bjj">BJJ</td>
                          </tr>
                          <tr>
                            <td class="horarios-hora">19:00 - 20:30</td>
                            <td class="horarios-bjj">BJJ</td>
                          </tr>
                          <tr>
                            <td class="horarios-hora">20:30- 21:30</td>
                            <td class="horarios-mma">MMA</td>
                          </tr>
                        </table>
                      </v-card>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
                <!-- MARTES -->
                <v-expansion-panels>
                  <v-expansion-panel class="timetable horarios-head" popout>
                    <v-expansion-panel-content ripple>
                      <div class="darken" slot="header">MARTES</div>
                      <v-card>
                        <table class="dayTable darken">
                          <tr>
                            <td class="horarios-hora">10:30 - 12:30</td>
                            <td class="horarios-bjj">BJJ</td>
                          </tr>
                          <tr>
                            <td class="horarios-hora">16:00 - 18:00</td>
                            <td class="horarios-bjj">BJJ</td>
                          </tr>
                          <tr>
                            <td class="horarios-hora">18:00 - 19:30</td>
                            <td class="horarios-bjjkids">BJJ KIDS</td>
                          </tr>
                          <tr>
                            <td class="horarios-hora">19:30 - 20:30</td>
                            <td class="horarios-bjj">BJJ</td>
                          </tr>
                          <tr>
                            <td class="horarios-hora">20:30 - 21:30</td>
                            <td class="horarios-mma">MMA</td>
                          </tr>
                        </table>
                      </v-card>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
                <!-- MIERCOLES -->
                <v-expansion-panels>
                  <v-expansion-panel class="timetable horarios-head" popout>
                    <v-expansion-panel-content ripple>
                      <div slot="header" class="darken">MIÉRCOLES</div>
                      <v-card>
                        <table class="dayTable darken">
                          <tr>
                            <td class="horarios-hora">07:00 - 08:00</td>
                            <td class="horarios-bjj">BJJ</td>
                          </tr>
                          <tr>
                            <td class="horarios-hora">10:30 - 12:30</td>
                            <td class="horarios-bjj">BJJ</td>
                          </tr>
                          <tr>
                            <td class="horarios-hora">17:00 - 18:30</td>
                            <td class="horarios-bjj">BJJ</td>
                          </tr>
                          <tr>
                            <td class="horarios-hora">19:00 - 20:30</td>
                            <td class="horarios-bjj">BJJ</td>
                          </tr>
                        </table>
                      </v-card>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
                <!-- JUEVES -->
                <v-expansion-panels>
                  <v-expansion-panel class="timetable horarios-head" popout>
                    <v-expansion-panel-content ripple>
                      <div slot="header" class="darken">JUEVES</div>
                      <v-card>
                        <table class="dayTable darken">
                          <tr>
                            <td class="horarios-hora">10:30 - 12:30</td>
                            <td class="horarios-bjj">BJJ</td>
                          </tr>
                          <tr>
                            <td class="horarios-hora">16:00 - 18:00</td>
                            <td class="horarios-bjj">BJJ</td>
                          </tr>
                          <tr>
                            <td class="horarios-hora">18:00 - 19:30</td>
                            <td class="horarios-bjjkids">BJJ KIDS</td>
                          </tr>
                          <tr>
                            <td class="horarios-hora">19:30 - 20:30</td>
                            <td class="horarios-bjj">BJJ</td>
                          </tr>
                          <tr>
                            <td class="horarios-hora">20:30 - 21:30</td>
                            <td class="horarios-mma">MMA</td>
                          </tr>
                        </table>
                      </v-card>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
                <!-- VIERNES -->
                <v-expansion-panels>
                  <v-expansion-panel class="timetable horarios-head" popout>
                    <v-expansion-panel-content ripple>
                      <div slot="header" class="darken">VIERNES</div>
                      <v-card>
                        <table class="dayTable darken">
                          <tr>
                            <td class="horarios-hora">07:00 - 08:00</td>
                            <td class="horarios-bjj">BJJ</td>
                          </tr>
                          <tr>
                            <td class="horarios-hora">10:30 - 12:30</td>
                            <td class="horarios-mma">BJJ/GRAPPLING</td>
                          </tr>
                          <tr>
                            <td class="horarios-hora">17:00 - 18:30</td>
                            <td class="horarios-bjj">BJJ</td>
                          </tr>
                        </table>
                      </v-card>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
                <!-- SÁBADO -->
                <v-expansion-panels>
                  <v-expansion-panel class="timetable horarios-head" popout>
                    <v-expansion-panel-content ripple>
                      <div slot="header" class="darken">SÁBADO</div>
                      <v-card>
                        <table class="dayTable darken">
                          <tr>
                            <td class="horarios-bjj" colspan="4">OPEN MAT</td>
                          </tr>
                        </table>
                      </v-card>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </div>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

      <!-- FILIAL ANIMAL BJJ -->
      <v-expansion-panels>
        <v-expansion-panel class="timetable horarios-head" popout>
          <v-expansion-panel-content class="horarioFilialesAnimal" ripple>
            <div slot="header" class="horarioFiliales">ANIMAL BJJ</div>
            <v-card>
              <!-- MARTES -->
              <v-expansion-panels>
                <v-expansion-panel class="timetable horarios-head" popout>
                  <v-expansion-panel-content ripple>
                    <div slot="header" class="darken">MARTES</div>
                    <v-card>
                      <table class="dayTable darken">
                        <tr>
                          <td class="horarios-hora">19:30 - 20:30</td>
                          <td class="horarios-mma">MMA</td>
                        </tr>
                        <tr>
                          <td class="horarios-hora">20:30 - 21:30</td>
                          <td class="horarios-bjj">GRAPPLING / BJJ</td>
                        </tr>
                      </table>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
              <!-- JUEVES -->
              <v-expansion-panels>
                <v-expansion-panel class="timetable horarios-head" popout>
                  <v-expansion-panel-content ripple>
                    <div slot="header" class="darken">JUEVES</div>
                    <v-card>
                      <table class="dayTable darken">
                        <tr>
                          <td class="horarios-hora">20:00 - 21:30</td>
                          <td class="horarios-bjj">BJJ</td>
                        </tr>
                      </table>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <!-- FILIAL INTERNATIONAL GYM -->
      <v-expansion-panels>
        <v-expansion-panel class="timetable horarios-head" popout>
          <v-expansion-panel-content ripple class="horarioFilialesInternacional">
            <div slot="header" class="horarioFiliales">INTERNACIONAL GYM</div>
            <v-card>
              <!-- MARTES -->
              <v-expansion-panels>
                <v-expansion-panel class="timetable horarios-head" popout>
                  <v-expansion-panel-content ripple>
                    <div slot="header" class="darken">MARTES</div>
                    <v-card>
                      <table class="dayTable darken">
                        <tr>
                          <td class="horarios-hora">19:30 - 21:00</td>
                          <td class="horarios-bjj">BJJ</td>
                        </tr>
                      </table>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
              <!-- JUEVES -->
              <v-expansion-panels>
                <v-expansion-panel class="timetable horarios-head" popout>
                  <v-expansion-panel-content ripple>
                    <div slot="header" class="darken">JUEVES</div>
                    <v-card>
                      <table class="dayTable darken">
                        <tr>
                          <td class="horarios-hora">19:30 - 21:00</td>
                          <td class="horarios-bjj">BJJ</td>
                        </tr>
                      </table>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style >
/*HORARIOS PAGE TABLE DECORATION*/

td {
  border: 1px solid black;
  text-align: center;
  height: 4em;
}

.timetable {
  width: 100%;
  opacity: 0.7;
  margin: auto;
  text-align: center;
}
.dayTable {
  width: 100%;
  border-spacing: 0;
}
.darken {
  color: black;
}
.horarioFiliales {
  font-family: "Anton", Impact, Haettenschweiler, "Arial Narrow Bold",
    sans-serif;
  letter-spacing: 2px;
}
.horarioFilialesMg {
  background-color: rgb(172, 0, 0) !important;
  color: white !important;
  margin-top: 1em;
  margin-bottom: 1em;
}
.horarioFilialesAnimal {
  background-color: rgb(15, 34, 119) !important;
  color: white !important;
  margin-top: 1em;
  margin-bottom: 1em;
}
.horarioFilialesInternacional {
  background-color: red !important;
  color: white !important;
  margin-top: 1em;
  margin-bottom: 1em;
}
.horarios-head {
  font-weight: bold;
}
.horarios-hora {
  font-weight: bold;
  background-color: white;
  width: 40%;
}
.horarios-bjj {
  background-color: #54a0ff;
}
.horarios-bjjkids {
  background-color: #0be881;
}
.horarios-mma {
  background-color: #ff6b6b;
}
.horarios-blank {
  background-color: #fff1f1;
}
.horarios-bjj,
.horarios-mma,
.horarios-bjjkids {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  width: 40%;
}
</style>
