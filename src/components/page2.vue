<template>
<v-stepper-content step="2">
          <v-card>
          <h2 class="text-xs-center">คำถามเเบบตัวเลือกสเกล กรุณาตอบคำถามตามความเป็นจริง</h2>
          <h3 class="text-xs-center">(ระบุค่าระหว่าง 0-5)</h3>
          <div>
     <Slider v-on:Change="Savedatapage2" :list="ex1" :index="0" />
   <Slider  v-on:Change="Savedatapage2" :list="ex2"  :index="1" />
    <Slider v-on:Change="Savedatapage2" :list="ex3"  :index="2" />
     <Slider v-on:Change="Savedatapage2" :list="ex4" :index="3" />
        <Slider v-on:Change="Savedatapage2" :list="ex5" :index="4"  />
      <Slider v-on:Change="Savedatapage2" :list="ex6" :index="5"  />
   <Slider v-on:Change="Savedatapage2" :list="ex7" :index="6" />
    <Slider  v-on:Change="Savedatapage2" :list="ex8" :index="7" />
     <Slider v-on:Change="Savedatapage2" :list="ex9"  :index="8" />
     <Slider v-on:Change="Savedatapage2" :list="ex10" :index="9" />
     <Slider v-on:Change="Savedatapage2" :list="ex11" :index="10" />
     <Slider v-on:Change="Savedatapage2" :list="ex12" :index="11" />
     <Slider v-on:Change="Savedatapage2" :list="ex13" :index="12" />
     <Slider v-on:Change="Savedatapage2" :list="ex14" :index="13" />
     <Slider v-on:Change="Savedatapage2" :list="ex15" :index="14" />
     <Slider v-on:Change="Savedatapage2" :list="ex16" :index="15" />
     <Slider v-on:Change="Savedatapage2" :list="ex17" :index="16" />
     <Slider v-on:Change="Savedatapage2" :list="ex18" :index="17" />
     <Slider v-on:Change="Savedatapage2" :list="ex19" :index="18" />
     <Slider v-on:Change="Savedatapage2" :list="ex20" :index="19" /> 




          </div>
          </v-card>
  
         <v-btn
            color="primary"
            @click="give(page)"
          >
            Continue
          </v-btn>
  
          <v-btn flat  @click="give(page-2)">Back</v-btn>
        </v-stepper-content>
</template>
<script>
import Slider from "./Slider.vue";
export default {
  components: {
    Slider
  },
  data() {
    return {
      page:3,
      ex1: { label: "1. กลัวทำงานผิดพลาด", val: 0, color: "blue" },
      ex2: { label: "2. ไปไม่ถึงเป้าหมายที่วางไว้", val: 0, color: "blue" },
      ex3: { label: "3. ครอบครัวมีความขัดเเย้งกันในเรื่องเงินหรือเรื่องงานในบ้าน", val: 0, color: "blue" },
      ex4: { label: "4. เป็นกังวลกับเรื่องสารพิษ หรือมลภาวะในอากาศ นำ้เสียงเเละดิน", val: 0, color: "blue" },
      ex5: { label: "5. รู้สึกว่าต้องเเข่งขันหรอเปรียบเทียบ", val: 0, color: "blue" },
      ex6: { label: "6. เงินไม่พอใช้จ่าย", val: 0, color: "blue" },
      ex7: { label: "7. กล้ามเนื้อตึงหรือปวด", val: 0, color: "blue" },
      ex8: { label: "8. ปวดหัวจากความตึงเครียด", val: 0, color: "blue" },
    ex9: { label: "9. ปวดหลัง", val: 0, color: "blue" },
      ex10: {label: "10. ความอยากอาหารเปลี่ยนเเปลง", val: 0, color: "blue"},
      ex11: { label: "11. ปวดศีรษะข้างเดียว", val: 0, color: "blue" },
      ex12: { label: "12. รู้สึกวิตกกังวล", val: 0, color: "blue" },
      ex13: { label: "13. รู้สึกคับข้องใจ", val: 0, color: "blue" },
      ex14: { label: "14. รู้สึกโกรธ หรือหงุดหงิด", val: 0, color: "blue" },
      ex15: { label: "15. รู้สึกเศร้า", val: 0, color: "blue" },
      ex16: { label: "16. ความจำไม่ดี", val: 0, color: "blue" },
      ex17: { label: "17. รู้สึกสับสน", val: 0, color: "blue" },
      ex18: { label: "18. ตั้งสมาธิลำบาก", val: 0, color: "blue" },
      ex19: { label: "19. รู้สึกเหนื่องง่าย", val: 0, color: "blue" },
      ex20: { label: "20. เป็นหวัดบ่อยๆ", val: 0, color: "blue" },
    saveDatalist:[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    };
  },
     methods :{
        give (page){  
        this.$emit('next',page)
        },
          Savedatapage2(index,data){

         
        //alert("data "+data )
       // saveDatalist[index]=data
        this.$emit('SaveDatapage2',data,index)
      //  alert("seed "+this.list1[Num])
        }

    }
};
</script>


<style>
.headtext{
  color: black !important;
  font-family: "Kanit", sans-serif !important ;
}
@import url("https://fonts.googleapis.com/css?family=Kanit");
</style>


<!-- <img src="../assets/png/001-angry.png"> -->