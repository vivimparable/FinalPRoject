<template>
    <div>
        <div>
            
            <h3>Register</h3>
            <div class="content">
            <div>
                <h5>Name:</h5>
                <input v-model="name"  type="text">

                <h5>Surrname:</h5>
                <input  v-model="surrname" type="text">

                <h5>Age:</h5>
                <input v-model="age"  type="number" name="" id="">

                <h5>Email:</h5>
                <input v-model="email" type="email">

                <h5>Password:</h5>
                <input v-model="password"  type="password">
                <br>
                <button @click="newRegister" class="mt-3 btn btn-outline-light">Enviar</button>
                 <br>
                 <p>{{errorMessage}}</p>
            </div>

            <div>
                
                <img src="../assets/2810820.jpg" alt="">
            </div>
           
        </div>
        
        
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data(){
        return{
            name:"", surrname:"",age:"",email:"",password:"",errorMessage:""
        }
    },methods:{
        newRegister(){
            
            this.errorMessage=" ";
            let errorCounter = 0;
            if(this.name.length==0){
                this.errorMessage+='Este nombre no es válido. ' 
                errorCounter++;
            }
            if(this.surrname.length==0){
                this.errorMessage+="Este apellido no es válido. "
                errorCounter++;
            }
            if(this.age.length==0|| this.age >=130){
                this.errorMessage+="Esta edad no es válida. "
                errorCounter++;
            }else if(this.age<18){
                this.errorMessage+="Debes ser mayor de edad."
                errorCounter++;
            }
            if(this.email.length==0){
                this.errorMessage+="Este email no es válido. "
                errorCounter++;
            }if(this.password.length==0){
                this.errorMessage+="Este password no es válido. "
                errorCounter++;
            }
            
            let users = JSON.parse(localStorage.getItem("userList")) || [];

            if(users.find(a=> a.email == this.email )){
                errorCounter++;
                this.errorMessage+= "Este email ya está registrado";
                return;
            }
            if(errorCounter==0){

                let users = JSON.parse(localStorage.getItem("userList")) || [];

                this.errorMessage+="Ya estas registrado."
               
               let newUser = {
                   name:this.name,
                   surrname: this.surrname,
                   age: this.age,
                   email: this.email,
                   password:this.password
                }

                users.push(newUser)
                
                localStorage.setItem("userList", JSON.stringify(users));
                return;
            }

            


            
        }
    },computed:{
        ...mapState(['baseDeDatos'])
    }
}
</script>
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