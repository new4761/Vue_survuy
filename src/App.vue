<template>

  <v-app>

    <v-content >
      <home/>
    </v-content> 
  </v-app>
</template>

<script>
import home from './components/home'
//import HelloWorld from './components/HelloWorld'
export default {
  name: 'App',
  components: {
    home
  },
  data () {
    return {
      //
    }
  }
}
</script>