<template>
    <v-list>
      <v-list-item class="pa-4" title="APP"></v-list-item>
      <v-divider></v-divider>
      
      <!-- Using v-for to loop through a list of items -->
      <router-link v-for="item in menuItems" :key="item.to" :to="item.to" class="text-decoration-none on-surface" rel="noopener noreferrer">
        <v-list-item :prepend-icon="item.icon" link  >

          <!--link :title="item.title" (Inside v-lis-tem loop)-->
        </v-list-item>
      </router-link>
      
    </v-list>
  
    <!--
    <div class="pa-2" >
        <v-btn block color="green" icon="mdi-Logout" @click="logout">
        </v-btn>
        
    </div>
  -->
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuItems: [
          //FOR PAGE ONLY
          { to: '/', icon: 'mdi-home'},
          { to: '/Dashboard', icon: 'mdi-view-dashboard'},
          { to: '/Card', icon: 'mdi-card-text'},
          { to: '/Post', icon: 'mdi-note-multiple-outline'},
          { to: '/Logout', icon: 'mdi-logout'}

          //ERROR
          //{to:'/Quit', icon: 'mdi-Logout', title:'none'}
          // Add more items as needed
          //Change link :title="item.title"
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
  

