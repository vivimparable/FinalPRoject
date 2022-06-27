<template>
    <div>
        <div >
            
            <h3 >Log In</h3>
            <div class="content" >
                <div>
                <form >

                <h5>Email:</h5>
                <input v-model="email" type="email">

                <h5>Password:</h5>
                <input v-model="password" type="password">
                </form>
                <button @click="Alehop" class="mt-3 btn btn-outline-light">Enviar</button>
                <br>
               <p class="mt-2">{{mensaje}}</p> 
            </div>
    
            <div>
                <img src="../assets/7834.jpg" alt="">
            </div>
            </div>
        </div>                               
    </div>
</template>

<style lang="scss" scoped>

    div{
        h3{
            text-align: center;
            padding: 1rem;
            
        }
        .content{
           color: white;
           background-color: rgb(6, 98, 168);
           display:flex;
           align-content: center;
           border: 0.2rem solid black;
           justify-content: center;
           div{
               input{
                   border-radius: 1rem;
                   border: none;

               }
               padding: 2rem;
               a{
                  
                   color: black;
                   
               }
           }
           img{
            display: none;
               @media only screen and (min-width: 768px) {
                width: 30rem;
                border-radius: 1rem;
                display: block;
                }
           }
        }

   }
</style>

<script>
import { mapState } from 'vuex'
export default {
    computed:{
        ...mapState(['baseDeDatos','logeoTrue'])
    },methods:{
         Alehop(){

        let users = JSON.parse(localStorage.getItem("userList")) || [];

           
           let index = users.findIndex(a => a.email === this.email);
            
            if(index==-1){
                this.mensaje='Este usuario no existe.';
                return;
            }

            if(this.email == "javiergarciaurruchi@gmail.com" && this.password=="GarciaUrruchi"){
                this.$store.commit("setlogeoAdministrador", true);
                this.$router.replace({name: "ContentAdmin"})
                return;
            }
            else if(this.email== users[index].email && this.password== users[index].password){
                this.mensaje="Sí que existe: "+ users[index].name+" bienvenido." 
                this.$store.commit("setlogeoTrue",true);
                this.$router.replace({name:"ContentView"})
                return;
            }
            if(this.password!= users[index].password){
                this.mensaje="Contraseña incorrecta";
                return;
            }

            
            
        }
    },data(){
        return{
            email:"",password:"",mensaje:""
        }
    },mounted(){
        let users = JSON.parse(localStorage.getItem("userList")) || [];

        users.push({
        email: "javiergarciaurruchi@gmail.com",
        password:"GarciaUrruchi"
        });
        
        localStorage.setItem("userList", JSON.stringify(users));


    }
}
</script>