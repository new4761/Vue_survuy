import '@babel/polyfill'
import Vue from 'vue'
// ประกาศ Axios
import VueAxios from "vue-axios";
import axios from "axios";

import './plugins/vuetify'
import App from './App.vue'

import colors from 'vuetify/es5/util/colors'
import Vuetify from 'vuetify'

// เรียกใช้
Vue.use(VueAxios, axios);




Vue.use(Vuetify, {
  theme: {
  done: colors.green.darken1 
  }
})
new Vue({

  render: h => h(App)
}).$mount('#app')

