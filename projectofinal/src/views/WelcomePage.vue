<template>
    <div>
        <h1>Bienvenido a la página web de Javier.</h1><br>
        <p class="text-light">Previsión del tiempo de hoy en Barcelona: {{tiempo}}</p>
        <router-link to="/home">Haz click para empezar!</router-link>
        
    </div>
</template>

<style lang="scss" scoped>

h1{
    margin-top:5rem;
    color:rgb(223, 223, 223)
}
div{
    background: rgb(52,146,219);
    background: linear-gradient(90deg, rgba(52,146,219,1) 0%, rgba(52,67,219,1) 21%, rgba(0,212,255,1) 100%);
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    margin-top: 2rem;
}

a{
    color:black;
    text-decoration: none;
    background-color: white;
    border: solid grey 0.1rem;
    width: 30%;
    margin: auto;
    border-radius: 1rem;
    padding: 0.5rem 0rem;
}


</style>

<script>
import { mapState } from 'vuex'
export default {
    computed:{
        ...mapState(['tiempo'])
    }
}
</script>