<template>
  <div>

  <NavBar />
  
  
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  
}

html,body{
  height: 100%;
  margin:0
}





</style>
<script>

import NavBar from '@/components/NavBar.vue'
import {mapActions} from 'vuex'
export default {
  components:{
    NavBar,
    
  },data(){return{
    dropContent:false
  }
    
  },computed:{
    ...mapActions(['contenidoDentroApi','tiempoApi'])
  },mounted(){
    this.contenidoDentroApi;
    this.tiempoApi;
  }
}
</script>

