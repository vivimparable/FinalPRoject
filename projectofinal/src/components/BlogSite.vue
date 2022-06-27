<template>
    <div>
        <div class="contenido">
            <div  class="box1">
                <h3>{{contenidoApi[contenidoApi.length-1].type}}</h3>
                <p>{{contenidoApi[contenidoApi.length-1].description}}</p>
                <p>{{contenidoApi[contenidoApi.length-1].date}}</p> 
                
            </div>
            
            
            <div class="box2">
                <h3>{{contenidoApi[contenidoApi.length-2].type}}</h3>
                <p>{{contenidoApi[contenidoApi.length-2].description}}</p>
                <p>{{contenidoApi[contenidoApi.length-2].date}}</p>
            </div>
            
            
            <div class="box3">
                <h3>{{contenidoApi[contenidoApi.length-3].type}}</h3>
                <p>{{contenidoApi[contenidoApi.length-3].description}}</p>
                <p>{{contenidoApi[contenidoApi.length-3].date}}</p>
            </div>
        
        
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'BlogSite',
    computed:{
        ...mapState(['contenidoApi']),
        
        

    }
}
</script>
<style lang="scss" scoped>


.contenido{
    max-width: 75%;
    margin:auto;
    color:rgb(214, 214, 214);
    padding: 1rem 0rem;
    @media only screen and (min-width: 768px) {
        gap: 1rem;
        display: grid;
        grid-template-columns: repeat(2,1fr
    );
        grid-template-rows: repeat(2,1fr);

    }
}
h3{ border-bottom: solid 0.1rem white;
padding: 0.4rem;}


.box1,.box2,.box3{
    background-color: #2871A8;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 1rem;
    @media only screen and (min-width: 768px) {
        margin-top: 0rem;
    }
}
.box1{
    grid-row: 1/3;
    
}

h4{
    text-align: center;
    margin-top: 1rem;
    color: #324A5C;
}

</style>