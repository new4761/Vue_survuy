<template>

  <v-app>

    <v-content >

      <home/>
    </v-content> 
  </v-app>
</template>

<script>
import home from './components/home'


export default {
  name: 'App',
  components: {
    home
  },
   mounted () {

  },
  data () {
    return {
      info:[]
      //
    }
  }
}
</script>