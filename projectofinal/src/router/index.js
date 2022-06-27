import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WelcomePage from '../views/WelcomePage.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ContentView from '../views/OficialContent.vue'
import ContentSpecified from '../views/ContentSpecified.vue'
import ContentAdmin from '../views/AdminSite.vue'
import store from '@/store/index.js'

const routes = [
  {
    path: '/',
    name: 'WelcomePage',
    component: WelcomePage
  },
  {
    path: '/LoginView',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/RegisterView',
    name: 'RegisterView',
    component: RegisterView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ContentView',
    name: 'ContentView',
    component: ContentView,
    beforeEnter:(to,from,next)=>{
      if(store.state.logeoTrue==false){
        next(false);
      }else{
        next();
      }
    }
    
    
  },{
    path: '/ContentSpecified/:id',
    name: 'ContentSpecified',
    component: ContentSpecified, 
   
  },{
    
    path: '/ContentAdmin',
    name: 'ContentAdmin',
    component: ContentAdmin,
    beforeEnter:(to,from,next)=>{
      if(store.state.logeoAdministrador==false){
        next(false);
      }else{
        next();
      }
    }   
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
