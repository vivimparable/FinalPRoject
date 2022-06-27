<template>
    <div >
        <div class="mt-3">
        <nav class="d-md-flex text-center justify-content-md-around">
            

            
                <ul class="d-md-flex ">
                     <li>
                        <router-link to="/loginView">Login</router-link>
                    </li>
                     <li>
                        <router-link to="registerView">Register</router-link>
                    </li>
                </ul>
            
            
                <ul class="d-md-flex">
                    <li>
                        <fa :icon="['fab','twitter']"/>
                    </li>
                   
                    <li>
                        <fa :icon="['fab','instagram']"/>
                    </li>
                    <li>
                        <fa :icon="['fab','twitch']"/>
                    </li>
                </ul>
               
            </nav>
        </div>
           <div class=" text-center bg-light">
                <p>Todos los derechos quedan reservados a Javier Garcia</p>
            </div>
    </div>
</template>

<script>
export default {
name:"footerView"
}
</script>

<style lang="scss" scoped>
div{
    background-color: rgb(106, 175, 193);
    
    nav{
        padding-top: 1rem;
        ul{
            list-style: none;
            
            li{
                margin-left: 0rem;
                @media only screen and (min-width: 768px) {
                margin-left: 2rem;
                }
                li:hover{
                    cursor: pointer;
                }
                a{
                    text-decoration: none;
                    color: rgb(56, 56, 56);

                    
                }
            }
        }
    }
    }
</style>
