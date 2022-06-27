<template>
    <div>
        <div>
            <h3 class="text-center m-2">Contenido Principal</h3>

        </div>
        <div>
            <h5>Filtraje</h5>
            <label for="">Podcasts only </label>
            <input class="ms-3" v-model="podcast" type="checkbox">

            <label for="">Reviews only </label>
            <input class="ms-3" v-model="reviews" type="checkbox">

            <label for="">Gameplays only </label>
            <input class="ms-3" v-model="gameplays" type="checkbox">
        </div>
        <div class="  row justify-content-center">
            <div  v-for="(i,index) in ContentFiltraje" :key="index" class=" m-1 card col-4   "  :class="[{'bg-info' : i.type == 'podcast'}, {'bg-primary': i.type=='gameplay'},{'bg-warning' : i.type == 'review'}]"          style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">{{i.type}}</h5>
                    <p class="card-text">{{i.description}}</p>
                </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Fecha: {{i.date}}</li>
                    </ul>

                    <router-link :to="{name:'ContentSpecified', params:{id:(i.id)}}" class="text-center" >Haz click para ver el contenido</router-link>
            </div>
    </div>
    </div>
</template>

<script>
import {  mapState } from 'vuex'
export default {
    computed:{
        ...mapState(['contenidoApi','tiempoApi']),
        ContentFiltraje(){
            if(this.podcast){
                return this.contenidoApi.filter(a=> a.type =="podcast")
            }else if(this.reviews){
                return this.contenidoApi.filter(a=> a.type =="review")

            }else if(this.gameplays){
                return this.contenidoApi.filter(a=> a.type =="gameplay")

            }else{
                return this.contenidoApi;
            }
        }
        
    },filters:{
        uppercase(value){
            return value.toUpperCase();
        }
    },data(){
        return{
            podcast:false,
            reviews:false,
            gameplays:false
        }
    },mounted(){
        
    }
}
</script>

<style lang="scss" scoped>
*{
    margin:0;
    padding: 0;
}
h5{
    color:white
}
a{
    color: white;
    text-decoration: none;
    border: 0.1rem white solid;
    padding: 0.4rem;
    margin: 1rem 0rem;
    border-radius: 1rem;
    
}


</style>