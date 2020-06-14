<template>
  <v-layout row wrap>
    <v-flex xs8 offset-xs1>
      <v-subheader class="pl-0 headtext">{{list.label}}</v-subheader>
      <v-slider

        validate-on-blur
        @change="givevalue(index,list.val)"
        v-model="list.val"
        thumb-label
       height="5px"
        ticks
        step="0.1"
        min="0"
        tick-size="1"
        max="5"
      ></v-slider>
    </v-flex>
    <v-flex xs2>
      <img :src="require(`@/assets/png/${callimg(list.val)}`)" />
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
    }
  },
  data() {
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
  },
  methods: {
    callimg(input) {
      if(input == 5)  return this.img[4];
      else if (input >= 4) return this.img[3];
      else if (input >= 3) return this.img[2];
      else if (input >= 2) return this.img[1];
      else  return this.img[0];
    },
    givevalue(list, data) {
      this.$emit("Change", list, data);
    }
  }
};
</script>
<style scoped>
   .v-slider__my{
      height: 10px !important;
    }
</style>