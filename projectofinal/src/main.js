
import { createApp } from 'vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'

import { fab } from '@fortawesome/free-brands-svg-icons'



import App from './App.vue'
import router from './router'
import store from './store'

library.add(fas, fab);



import 'bootstrap/dist/css/bootstrap.css'

createApp(App).component('fa', FontAwesomeIcon).use(store).use(router).mount('#app')
import 'bootstrap/dist/js/bootstrap.js'
