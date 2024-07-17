<template>
    <v-list>
      <v-list-item title="My Application" subtitle="Vuetify"></v-list-item>
      <v-divider></v-divider>
      
      <!-- Using v-for to loop through a list of items -->
      <router-link v-for="item in menuItems" :key="item.to" :to="item.to" class="text-decoration-none on-surface" rel="noopener noreferrer">
        <v-list-item :prepend-icon="item.icon" link :title="item.title"></v-list-item>
      </router-link>
    </v-list>
  

    <div class="pa-2">
        <v-btn block color="green" @click="logout">
          Logout
        </v-btn>
    </div>

  </template>
  
  <script>
  export default {
    data() {
      return {
        menuItems: [
          { to: '/Hello', icon: 'mdi-view-dashboard', title: 'Dashboard' },
          { to: '/Card', icon: 'mdi-card-text', title: 'Card' },
          { to: '/About', icon: 'mdi-information', title: 'About' }
          // Add more items as needed
        ]
      };
    },
    methods: {
        logout(){
            alert("Logout");
        }
       
    }
  };
  </script>
  