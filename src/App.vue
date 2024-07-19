<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer"
    class="d-flex align-center"
    theme="dark"
    width="70"
    >
      <!--  -->
      <SideNavRoute />
    
    </v-navigation-drawer>

    <v-app-bar >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title><v-icon icon="mdi-cart"></v-icon>Application</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <!-- <router-view /> -->
     
      <slot>
        <router-view />
      </slot>
      <!--<AppFooter />-->
    </v-main>
   
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'

  const drawer = ref(null)
</script>

<script>
  export default {
    data: () => ({ drawer: null }),
  }
</script>