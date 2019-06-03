import Vue from 'vue'
import firebase from 'firebase'
import './plugins/vuetify'
import App from './App.vue'
import {store} from './store'


import 'vuetify/dist/vuetify.min.css'
import router from './router'

require('vue2-animate/dist/vue2-animate.min.css');

Vue.config.productionTip = false;

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCz6-aTJ_zYPnlDpbd42BMFkw36980Mi-s",
  authDomain: "embryo-12.firebaseapp.com",
  databaseURL: "https://embryo-12.firebaseio.com",
  projectId: "embryo-12",
  storageBucket: "embryo-12.appspot.com",
  messagingSenderId: "664938298373"
};
firebase.initializeApp(config);

Vue.mixin({
    methods: {
        // Global Method

        loader() {
            return {
                show: function () {
                    store.dispatch("SET_LOADING", true);
                },

                hide: function () {
                    store.dispatch("SET_LOADING", false);
                }
            }
        },
    }
});

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');

const prod = process.env.NODE_ENV === 'production'
const shouldSW = 'serviceWorker' in navigator && prod
if (shouldSW) {
    navigator.serviceWorker.register('/service-worker.js').then(() => {
        console.log("Service Worker Registered!")
    })
}
