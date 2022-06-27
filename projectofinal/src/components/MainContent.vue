<template>


  <div>
        
<div class="card-group">
  <div class="card">
    <img src="@/assets/7834.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Podcasts</h5>
      <p class="card-text">Hablamos y reaccionamos a lo que sea. Más charla bar-café y más divertido.</p>
    </div>
    
  </div>
  <div class="card">
    <img src="@/assets/2810820.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Reviews</h5>
      <p class="card-text">Una serie, una película, un juego, un libro... nuestra opinión vale oro. Aquí te la dejamos.</p>
    </div>
    
  </div>
  <div class="card">
    <img src="@/assets/20945449.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Gameplays</h5>
      <p class="card-text">Jugamos juntos o separados. Únete con nosotros a alguna mamarrachada que estemos jugando!
      </p>
    </div>
    
  </div>

        
    </div>

    </div>  
</template>

<script>
export default {
    name:'MainContent'
}
</script>

<style scoped>
h4{
    text-align: center;
    margin-top: 1rem;
    color: #324A5C;
}
h5{
  color: #324A5C;
}
img{
  height: 100%;
}

.card-group{
  width:75%;
  margin: auto;
}

.card:hover{
  transform: scale(1.1,1.1);
  transition: 1s;
  background-color: rgb(255, 255, 255,0);
  border-bottom: none;
  border-top:none;
}



</style>