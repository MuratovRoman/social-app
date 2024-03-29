import Vue from 'vue'
import App from './App'
import router from './router/index'
import { store } from './store'
const fb = require('./firebaseConfig.js')
import './assets/sass/app.sass'

Vue.config.productionTip = false

// handle page reloads
let app
fb.auth.onAuthStateChanged(user => {
    if (!app) {
        app = new Vue({
            el: '#app',
            router,
            store,
            render: h => h(App)
        })
    }
})