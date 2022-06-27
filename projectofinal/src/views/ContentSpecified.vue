<template>
    <div>
        <h3 >{{getinfo2.type}}</h3>
        <p>{{getinfo2.descripcionCompleta}}</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A aliquid, consectetur facilis at eum odio id necessitatibus quis deserunt fuga itaque veritatis quia eveniet nihil cum, debitis rem ipsum, in possimus vel! Aperiam quis odio pariatur illum neque. Doloremque, enim. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo pariatur quisquam possimus facilis necessitatibus doloremque, odio maxime amet impedit eaque voluptatem tempore fugit officiis atque aliquam ipsam perferendis molestias! Quidem earum porro nobis, adipisci vitae debitis accusantium quam obcaecati blanditiis quae perspiciatis. Repudiandae voluptates, ipsa dicta explicabo molestiae reiciendis deserunt?</p>
        <p>{{getinfo2.date}}</p>
        <router-link to="/ContentView"> Volver </router-link>
    </div>
</template>

<script>
export default {
    computed:{
        
        getinfo2(){
            return this.$store.getters.getInfo(this.$route.params.id)
        }
    }
}
</script>

<style lang="scss" scoped>
h3{
 text-decoration: 0.1rem solid black;
 padding: 1rem;

}
p{
    padding: 1rem;
}
a {
    padding: 1rem;
}
</style>