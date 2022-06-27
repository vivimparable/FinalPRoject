<template>
  <div>
    <div class="Header_Main">
        <h3>Welcome to our website</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, sunt maiores fugit veniam accusamus itaque deserunt laboriosam perspiciatis voluptates dignissimos totam maxime veritatis expedita minus quia officiis eius sit recusandae.</p>

    </div>

    
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 0px 0 0;
  color:rgb(0, 0, 0);
  text-shadow: 1px 0px 6px rgb(255, 255, 255);
}

p{
  color: rgb(1, 0, 0);
  max-width: 70%;
    text-shadow: 1px 0px 6px rgb(255, 255, 255);

  
  
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.Header_Main{
  
  background-image: url("../assets/imagen1.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  height: 80vh;
  background-position: center center;
   display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  
 


  
}

</style>
