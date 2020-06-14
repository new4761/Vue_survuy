<template>
  <v-stepper-content step="1" class="xs-center">
    <v-card>
      <div class="text-xs-center">
        <h1>คำอธิบาย</h1>
        <h3 class="text-xs-left">
          งานวิจัยนี้มีวัตถุประสงค์เพื่อพัฒนาเเบบสอบถามเเบบ Rating scale เเละ Visual analog scaleโดยใช้ WebForm เพื่อศึกษาความเเตกต่างของเเบบสอบถามเมื่อนำวิเคราะห์ข้อมูลทางสถิติ เเบบสอบถามที่ใช้คือ เเบบวัดความเครียดสวนปรุง ชุด 20ข้อ
          <br />ส่วนที่ 1 ให้นักศึกษาตอบคำถามเเบบ Visual analog scale โดยเลื่อนสเกลตามความเป็นจริง
          <br />ส่วนที่ 2 ให้นักศึกษาตอบคำถามเบบ Rating scale โดยเลือกระดับตามความเป็นจริง
          <br />ส่วนที่ 3 ให้นักศึกษาตอบเเบบประเมิน
          <br />ผลที่ได้จากเเบบสอบถามนี้จะนำมาใช้เพื่องานวิจัยเท่านั้น ขอขอบคุณนักศึกษาที่สละเวลาในการตอบเเบบสอบถามนี้
        </h3>
      </div>
      <br />
    </v-card>
    <v-btn color="primary" @click="give(page)">Continue</v-btn>
  </v-stepper-content>
</template>
<script>
export default {
  data() {
    return { page: 2 };
  },

  methods: {
    give(page) {
      this.$emit("next", page);
    }
  }
};
</script>

