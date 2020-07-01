<template>
  <div>
  <v-layout row wrap>

    <v-flex xs8 offset-xs1 style="  z-index: 1;">
      <v-subheader class="pl-0 headtext">{{list.label}}</v-subheader>
      <v-slider
       class="test"
        @change="givevalue(index,list.val)"
        v-model="list.val"
      
        ticks="always"
        step="0.1"
        min="1"
        thumb-label="always"
        tick-size="2"
        max="5"
      ></v-slider>
    </v-flex>
    <v-flex xs2>
      <img :src="require(`@/assets/png/${callimg(list.val)}`)" />
    </v-flex>
             <v-flex xs8 offset-xs1 style="  z-index: 0;">
      <v-slider
      class="subSlider"
      disabled
        :tick-labels="ticksLabels"
        :max="4"
        step="1"
        style="margin-top:-50px"
        ticks="always"
        tick-size="5"
      ></v-slider>
     </v-flex>
  </v-layout>

  </div>
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
      ],
           ticksLabels: [
          '1',
          '2',
          '3',
          '4','5'
        ],
    };
  },
  methods: {
    callimg(input) {
      if(input == 5)  return this.img[0];
      else if (input >= 4) return this.img[1];
      else if (input >= 3) return this.img[2];
      else if (input >= 2) return this.img[3];
      else  return this.img[4];
    },
    givevalue(list, data) {
      this.$emit("Change", list, data);
    }
  }
};
</script>
<style >

.v-slider__thumb-label {
    background: #1976d2  !important;
     border-color: #1976d2 !important;
}
.v-slider__thumb {
  background-color: #1976d2 !important;
    border-color: #1976d2 !important;
}

.subSlider .v-slider__thumb {
  background-color: #050505 !important;
    border-color: #000000 !important;
opacity: 0.3;
}
.subSlider.v-input--slider.v-input--slider--ticks .v-slider__ticks.v-slider__ticks--always-show {

    background-color: #050505 !important;
    border-color: #000000 !important;
    opacity: 0.8;
}

</style>