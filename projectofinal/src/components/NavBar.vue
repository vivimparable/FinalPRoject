<template>
    <div>
      <div v-if="!logeoTrue && !logeoAdministrador">
  <nav class="navbar navbar-light bg-light navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="../assets/logo.png">
      <router-link to="/home">Reviewers'</router-link>
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse  " id="navbarNav" >
    <ul class="navbar-nav ms-auto " >
       <li>
        <router-link to="/LoginView">Log in</router-link>
      </li>
       <li>
        <router-link to="/RegisterView">Register</router-link>
      </li>
    </ul>
    </div>
  </div>
</nav>

</div>

<div v-if="logeoTrue && !logeoAdministrador">
  <nav class="p-2">
    <h2 class="">Estas conectado, bienvenido!</h2>
    <div class="d-flex">
       <button @click="logOut" class=" btn btn-danger">Log out</button>

    </div>
  </nav>
  
</div>

<div v-if="logeoAdministrador && !logeoTrue">
  <nav class="p-2">
    <h2 >Estas conectado como administrador, bienvenido Javier!</h2>
    <div class="d-flex">
    <button @click="logOut" class="btn btn-danger">Log out</button>
    </div>
  </nav>
  
</div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:'NavBar',
    props:{
      
    },
    data(){
      return{

      }
    },computed:{
      ...mapState(['logeoTrue','logeoAdministrador'])
    },methods:{
      logOut(){
        if(this.logeoTrue){
          this.$store.commit("setlogeoTrue",false);
        this.$router.replace({name:"home"})
        return;
        }

        if(this.logeoAdministrador){
          this.$store.commit("setlogeoAdministrador",false);
        this.$router.replace({name:"home"})
        return;
        }


        
      }
    }
}
</script>

<style lang="scss" scoped>
nav{
    -webkit-box-shadow: 3px 2px 15px 4px rgba(0,0,0,0.41); 
box-shadow: 3px 2px 15px 4px rgba(0,0,0,0.41);
img{
  width: 3rem;
}
a{
  text-decoration: none;
  color: rgb(90, 90, 90);
  margin-left: 1rem;
}
    ul{
      display: flex;
      list-style: none;
      
      li{
        margin-left: 0.7rem;
        a{
          text-decoration: none;
          color: rgb(90, 90, 90);
        }
        
      }
    }
}
</style>

