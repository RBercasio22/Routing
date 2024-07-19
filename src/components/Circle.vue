<template>
   
        <v-row class="pa-2 text-overline ma-2">
          
            <v-col cols="8">
                dummy text
            </v-col>
            <!--Fix text-right-->
            <v-col cols="4" class="text-right">   
                <v-icon icon="mdi-dots-vertical"></v-icon>
            </v-col>
           
        </v-row>
   
      <div class="d-flex justify-center ga-2">
    <v-chip>
      Default
    </v-chip>

    <v-chip color="primary">
      Primary
    </v-chip>

    <v-chip color="secondary">
      Secondary
    </v-chip>

    <v-chip color="red">
      Red
    </v-chip>

    <v-chip color="green">
      Green
    </v-chip>
  </div>
    <div class="text-center">
      <v-progress-circular :model-value="value" :rotate="360" :size="300" :width="30" color="teal">
        <template v-slot:default> {{ value }} % </template>
      </v-progress-circular>
    </div>
  </template>
  <script>
    export default {
      data () {
        return {
          interval: -1,
          value: 0,
        }
      },
      mounted () {
        this.interval = setInterval(() => {
          if (this.value === 100) {
            return (this.value = 0)
          }
          this.value += 10
        }, 10000)
      },
      beforeUnmount () {
        clearInterval(this.interval)
      },
    }
  </script>
  <style scoped>
  .v-progress-circular {
    margin: 1rem;
  }
  </style>