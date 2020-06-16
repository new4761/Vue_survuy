
<template>
  <v-stepper-content step="2">
    <v-card>
      <div>
        <h2 class="text-xs-center">คำถามเเบบตัวเลือกตอบกรุณาตอบคำถามตามความเป็นจริง</h2>
      </div>

      <v-form v-model="valid" ref="form" lazy-validation>
        <radio v-on:Change="chagelist" :num="0"  id="0"/>
        <radio v-on:Change="chagelist" :num="1"  id="1"/>
        <radio v-on:Change="chagelist" :num="2"  id="2"/>
        <radio v-on:Change="chagelist" :num="3"  id="3"/>
        <radio v-on:Change="chagelist" :num="4"  id="4"/>
        <radio v-on:Change="chagelist" :num="5"  id="5"/>
        <radio v-on:Change="chagelist" :num="6"  id="6"/>
        <radio v-on:Change="chagelist" :num="7"  id="7"/>
        <radio v-on:Change="chagelist" :num="8"  id="8"/>
        <radio v-on:Change="chagelist" :num="9"  id="9"/>
        <radio v-on:Change="chagelist" :num="10" id="10" />
        <radio v-on:Change="chagelist" :num="11" id="11" />
        <radio v-on:Change="chagelist" :num="12" id="12" />
        <radio v-on:Change="chagelist" :num="13" id="13" />
        <radio v-on:Change="chagelist" :num="14" id="14" />
        <radio v-on:Change="chagelist" :num="15" id="15" />
        <radio v-on:Change="chagelist" :num="16" id="16" />
        <radio v-on:Change="chagelist" :num="17" id="17" />
        <radio v-on:Change="chagelist" :num="18" id="18" />
        <radio v-on:Change="chagelist" :num="19" id="19" />
      </v-form>

      <v-snackbar :timeout="5000" color="red" v-model="snackbar">
        กรุณาตอบเเเบบสอบถามให้ครบถ้วน
        <v-btn dark flat @click.native="snackbar = false">Close</v-btn>
      </v-snackbar>
    </v-card>

    <v-btn color="primary" @click="submit(page,give)">Continue</v-btn>
    <!-- <v-btn color="primary" @click="give(page)"   > test </v-btn> -->
    <v-btn flat @click="give(page-2)">Back</v-btn>
  </v-stepper-content>
</template>
              
     
<script>
import radio from "./radio.vue";
export default {
  components: {
    radio
  },
  data() {
    return {
      list1: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      valid: true,
      page: 3,

      snackbar: false
    };
  },
  methods: {
    submit(page, give) {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        give(page);
      } else {
  
        document.getElementById(this.list1.findIndex(data => data==null).toString()).scrollIntoView();
        this.snackbar = true;
      }
    },
    give(page) {
      this.$emit("next", page);
    },
    chagelist(listInput, Num) {
      //alert("Num "+Num )
      //  alert("listInput "+listInput )
      this.list1[Num] = listInput;
      this.$emit("SavedataPage3", this.list1[Num], Num);
      //  alert("seed "+this.list1[Num])
    }
  }
};
</script>