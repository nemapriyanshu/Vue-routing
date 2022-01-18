<template>
  <div  class="display-1">
    ABOUT
    <button class="btn btn-warning" @click="ADD()">ADD DETAILS</button> 
    <button class="btn btn-danger" @click="Delete()">Delete DETAILS</button> 
  </div>
</template>

<script>
export default {
    name:'About',
    methods:{
      ADD()
      {
            localStorage.setItem("uid","pp@gmail.com");
            alert("DATA ADD");
      },
      Delete(){
                  localStorage.removeItem("uid");
                  alert("DELETED");
      },
    },
}
</script>

<style>

</style>