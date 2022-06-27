<template>
  <div class=" home">
    <HelloWorld/>
    <DividerC :mensaje="'¿Qué te encontraras?'" />
    <MainContent/>
    <DividerC :mensaje="'Últimas actualizaciones'"  />
    <BlogSite/>
    <DividerC  :mensaje="'Resgistrate para ver el contenido'" />
    <LoginRegister/>
    <footerView/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import DividerC from '@/components/DividerC.vue'
import MainContent from '@/components/MainContent.vue'
import BlogSite from '@/components/BlogSite.vue'
import LoginRegister from '@/components/LoginRegister.vue'
import footerView from '@/components/navBarFooter.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    DividerC,
    MainContent,
    BlogSite,
    LoginRegister,
   
    footerView
  },data(){
    return{
     

    }
  }
}
</script>
