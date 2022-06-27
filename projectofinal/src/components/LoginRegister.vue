<template>
    <div>
        <div>
            <router-link to="/LoginView">
                Login
            </router-link>
        </div>
        <div>
            <router-link to="/RegisterView">
                Register
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:"LoginRegister"
}
</script>

<style lang="scss" scoped>
div{
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    max-width: 75%;
    margin:auto;
    padding: 1rem 0rem;
    margin-top: 1rem;
    div{
        background-color: #163E5C;
        border-bottom-left-radius: 2rem;
        border-top-right-radius: 2rem;
    }
    @media only screen and (min-width: 768px) {
        
        flex-direction: row;
    }
} 
a{
    text-decoration: none;
    color: white;
}
a:hover{
    color: white;
transform: scale(1.3,1.3);   
transition: 1s;
}
</style>