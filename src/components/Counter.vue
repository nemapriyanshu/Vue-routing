<template>
  <div>COUNTER {{counter}} </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed:mapState({
        counter:state=>state.count
    })
}
</script>

<style>

</style>