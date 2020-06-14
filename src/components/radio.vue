<template>
  <v-layout row wrap>
    <v-flex xs8 offset-xs1>
      <v-subheader class="pl-0 headtext">{{RadioText[num]}}</v-subheader>
      <v-radio-group
        @change="givevalue(num,list1)"
        row
        v-model="list1[num]"
        :rules="[v => !!v || 'กรุณาตอบเเบบสอบถาม']"
        required
      >
        <v-radio label="1" :value="1"></v-radio>
        <v-radio label="2" :value="2"></v-radio>
        <v-radio label="3" :value="3"></v-radio>
        <v-radio label="4" :value="4"></v-radio>
        <v-radio label="5" :value="5"></v-radio>
      </v-radio-group>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    num: {
      type: Number,
      default: null
    }
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
      RadioText: [
        "1. กลัวทำงานผิดพลาด",
        "2. ไปไม่ถึงเป้าหมายที่วางไว้",
        "3. ครอบครัวมีความขัดเเย้งกันในเรื่องเงินหรือเรื่องงานในบ้าน",
        "4. เป็นกังวลกับเรื่องสารพิษหรือมลภาวะในอากาศนำ้เสียงเเละดิน",
        "5. รู้สึกว่าต้องเเข่งขันหรอเปรียบเทียบ",
        "6. เงินไม่พอใช้จ่าย",
        "7. กล้ามเนื้อตึงหรือปวด",
        "8. ปวดหัวจากความตึงเครียด",
        "9. ปวดหลัง",
        "10. ความอยากอาหารเปลี่ยนเเปลง",
        "11. ปวดศีรษะข้างเดียว",
        "12. รู้สึกวิตกกังวล",
        "13. รู้สึกคับข้องใจ",
        "14. รู้สึกโกรธหรือหงุดหงิด",
        "15. รู้สึกเศร้า",
        "16. ความจำไม่ดี",
        "17. รู้สึกสับสน",
        "18. ตั้งสมาธิลำบาก",
        "19. รู้สึกเหนื่องง่าย",
        "20. เป็นหวัดบ่อยๆ"
      ]
    };
  },
  methods: {
    givevalue(num, list1) {
      this.$emit("Change", list1[num], num);
      //alert(list1[num])
    }
  }
};
</script>