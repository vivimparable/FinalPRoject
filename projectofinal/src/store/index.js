import { createStore } from 'vuex'

export default createStore({
  state: {
    contenidoApi:[],
    tiempo:[],
    logeoTrue:false,
    logeoAdministrador:false
    
  },
  getters: {
    getInfo: state=> numero=>{
      return state.contenidoApi.find(a=> a.id == numero)
    }
  },
  mutations: {

    rellenarApi(state, playload){
      state.contenidoApi= playload;
    },setlogeoTrue(state, status){
      state.logeoTrue=status
    },setlogeoAdministrador(state, status){
      state.logeoAdministrador=status
    },rellenarapitiempo(state,playload){
      state.tiempo=playload;
    }
  },
  actions: {

    async contenidoDentroApi ({commit}){
      const data1 = await fetch('ArrayContent.json');
      const data2 = await data1.json();
      commit('rellenarApi', data2)

    },async tiempoApi ({commit}){
      const data1 = await fetch("https://www.el-tiempo.net/api/json/v2/home");
      const data2 = await data1.json();
      commit('rellenarapitiempo', data2.ciudades[0].stateSky.description)
     
    }
  },
  modules: {
  }
})
