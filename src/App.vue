<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer"
    theme="dark"
    width="300">
      <!--  -->
      <SideNavRoute />
    
    </v-navigation-drawer>

    <v-app-bar color="#ffbf00">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Application</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
      <router-view />
      <AppFooter />
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