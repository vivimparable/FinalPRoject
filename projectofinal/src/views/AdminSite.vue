<template>
    <div>
        <div>
            <h3 class="text-center">Bienvenido Administrador</h3>

            <div >
            <div class="contentInputs d-block p-3" :class="{'d-none': podcast || review || gameplay }">
                <h4>¿Qué te gustaría añadir en el contenido?</h4>
                <label  for="podcast">Podcast: </label>
                <input v-model="podcast" type="checkbox" name="podcast">

                <label for="review">Review: </label>
                <input v-model="review" type="checkbox">

                <label for="gameplay">Gameplay: </label>
                <input v-model="gameplay" type="checkbox">
            </div>

            

            </div>
            <div class="Cardcontent" v-show="podcast || review || gameplay"  :class="[{'bg-warning': review },{'bg-info': podcast},{'bg-primary': gameplay}] ">
                <h4>¡A crear el contenido!</h4>
                <p v-if="podcast">Podcast</p>
                <p v-if="review">Review</p>
                <p v-if="gameplay">Gameplay</p>
                <p v-if="podcast">Hablamos de...</p>
                <p v-if="gameplay">Jugamos a...</p>
                <p v-if="review">Escribimos sobre...</p>

                <label for="topic">¿De qué trata?</label>
                <input v-model="topic" type="text">

                 <button class="ms-1 btn btn-success" @click="EnviarNuevaInformacion">Click</button>
                 {{mensaje}}
                <br> <button class="btn btn-outline-success" @click="BackInput">Volver</button>
            

            </div>

        </div>

    
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data(){
        return{
            
            podcast:false,
            review:false,
            gameplay:false,
            topic:"",
            mensaje:""
            
            
        }
    },methods:{
        
        EnviarNuevaInformacion(){
            let d= new Date();
        if(this.podcast){
            let newInfo={
                id:this.contenidoApi.length+1,
                type:"podcast",
                description:"Hablamos de...",
                descripcionCompleta:"Hablamos de " + this.topic,
                date: d.toISOString()
            }
            this.contenidoApi.push(newInfo);
            
        }else if(this.review){
            let newInfo={
                id:this.contenidoApi.length+1,
                type:"review",
                description:"Escribmos de...",
                descripcionCompleta:"Escribimos sobre " + this.topic
                ,
                date: d.toISOString()
            }
            this.contenidoApi.push(newInfo);
        }else{
            let newInfo={
                id:this.contenidoApi.length+1,
                type:"gameplay",
                description:"Jugamos a...",
                descripcionCompleta:"Jugamos a " + this.topic,
                
                date: d.toISOString()
            }
            this.contenidoApi.push(newInfo);
            
        }

        this.topic="";
        this.mensaje+="¡Enviado!"

    },BackInput(){
        this.podcast=false;
        this.gameplay=false;
        this.review=false;
        this.topic=""
    }
    },computed:{
        ...mapState(['contenidoApi'])
    }
}
</script>
<style lang="scss" scoped>
.Cardcontent{
    padding: 1rem;
    border-radius: 1rem;
    input{
        border: none;
        border-radius: 0.7rem;
    }
}

.contentInputs{
    border: 0.1rem solid black;
    border-radius: 0.9rem;
}
</style>