<template>
    
   
      <!--DELETE POST-->
      <div class="delete-group">
       
        <PostDialog />
        <v-btn prepend-icon="mdi-delete" color="red">
            Delete Post
        </v-btn>
      </div>
 

</template>


<style scoped>

.delete-group {
    display: flex;
    flex-direction: column;
    justify-self: center;
    align-items: center;
    padding: 10px;
    
}

</style>