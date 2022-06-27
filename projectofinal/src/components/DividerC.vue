<template>
    <div>
        
        <h4 class=" d-flex justify-content-center align-items-center">{{mensaje}}</h4>
        
    </div>
</template>

<script>
export default {
    name:'DividerC',
    props:{
        mensaje:String
    }
}
</script>

<style lang="scss" scoped>
*{
    min-height: 7rem; 
    max-width: 75%;
  margin:auto;   
}

div{
    margin-top: 1rem;
    border-top-left-radius: 5rem;
    border-top-right-radius: 5rem;
    border-bottom-right-radius: 5rem;
    background: rgb(52,146,219);
    background: linear-gradient(90deg, rgba(52,146,219,1) 0%, rgba(52,67,219,1) 21%, rgba(0,212,255,1) 100%);
    h4{
        color: white;
    }
}
</style>