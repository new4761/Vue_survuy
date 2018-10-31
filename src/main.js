import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueFire from 'vuefire'
import colors from 'vuetify/es5/util/colors'
import Vuetify from 'vuetify'
Vue.use(VueFire)
Vue.use(Vuetify, {
  theme: {
  done: colors.green.darken1 
  }
})
new Vue({
  render: h => h(App)
}).$mount('#app')

