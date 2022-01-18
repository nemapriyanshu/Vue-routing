<template>
  <div class="row">
     <div class="col">
         <span class="display-1">COURSE</span>
      <ul  class="list-group col-9">
          <li class="list-group-item text-center h3" > <router-link to="/course/php" class="nav-link">PHP</router-link></li>
          <li class="list-group-item text-center h3" > <router-link to="/course/laravel" class="nav-link">LARAVEL</router-link></li>
          <li class="list-group-item text-center h3" > <router-link to="/course/vuejs" class="nav-link">VUE</router-link></li>
          <li class="list-group-item text-center h3" > <router-link to="/course/js" class="nav-link">JAVASCRIPT</router-link></li>
      </ul>
     </div>
     <div class="col">
         <router-view></router-view>
     </div>

  </div>
</template>

<script>
export default {
    name :'Course'
}
</script>

<style>

</style>