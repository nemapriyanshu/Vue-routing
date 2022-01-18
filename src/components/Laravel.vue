<template>
  <div>
    <span class="display-3">
        LARAVEL {{counter}}
     </span>
     <img src="../assets/laravel.png" alt="" width="400px" height="200px">
  </div>
</template>

<script>

import {mapState} from 'vuex'
export default {
    name:'Laravel',
     computed:mapState({
        counter:state=>state.count
    })
}
</script>

<style>

</style>