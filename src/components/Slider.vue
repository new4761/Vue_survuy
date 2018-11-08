<template>
  
      <v-layout row wrap>
               <v-flex xs8 offset-xs1>
                   <v-subheader class="pl-0 headtext">{{list.label}}</v-subheader>
  <v-slider  validate-on-blur  @change="givevalue(index,list.val)"   v-model="list.val" :thumb-color="list.color" thumb-label :tick-labels="ticksLabels" ticks="always" step="0.1"  tick-size="1" max="5.00"></v-slider>
               </v-flex>
               <v-flex  xs2>
                  <img :src="require(`@/assets/png/${img[list.val]}`)" alt="">
               </v-flex>
          </v-layout>   

 
    
</template>

<script>

  export default {
 props: {
 list: {
      type: String,
      default: null
    },
     index: {
      type: Number,
      default: null
    },
    
 },
    data () {
      
    return {
      img: [
        "001-drunk.png",
        "004-confused.png",
        "006-dull.png",
        "003-happy-1.png",
        "002-happy.png",
        "005-grinning.png"
      ]
    };

},methods:{
  givevalue(list,data ){
   // alert('Change')
this.$emit('Change',list,data)
//alert(list1[num])

}
}
}
     
</script>