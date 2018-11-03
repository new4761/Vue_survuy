<template>
  <v-container fluid class="text-xs-center" >
    <v-layout  row wrap>
              <v-flex xs8 offset-xs2>
   <div id="app">
  <v-app id="inspire">
    <v-stepper v-model="page" >
      <div class="text-xs-center">
        <br>
        <h1>เเบบสอบถามการเปรียบเทียบ</h1>
         <h2>rating scale เเละ visual analog scale</h2> 
         <br>
      </div>
      <v-stepper-header class="text-xs-center" >
  <!--  editable="page > 1" -->
        <v-stepper-step 
                     editable="page > 1" step="1">คำอธิบาย</v-stepper-step>
  
        <v-divider></v-divider>
  
        <v-stepper-step  step="2">ส่วนที่ 1</v-stepper-step>
  
        <v-divider></v-divider>
  
         <v-stepper-step  step="3">ส่วนที่ 2</v-stepper-step>
           <v-divider></v-divider>
        <v-stepper-step    step="4">ส่วนที่ 3</v-stepper-step>
      </v-stepper-header>
  
      <v-stepper-items>
   
      <page1  v-on:next="tab"/>

    
     
        <page2   v-on:SaveDatapage2="chagelistPage2" v-on:next="tab"/>
   

         <page3  v-on:SavedataPage3="chagelistPage3"  v-on:next="tab"/>

      
        <page4  v-on:SavedataPage4="chagelistPage4" v-on:SaveData="Tofirebase" v-on:next="tab" />
  
         
      </v-stepper-items>
    </v-stepper>
  </v-app>
</div>
</v-flex>
</v-layout>
  </v-container>
</template>
<script>
import { Ref } from '../components/firebase.js';
import page1 from '../components/page1'
import page2 from '../components/page2'
import page3 from '../components/page3'
import page4 from '../components/page4'
  export default {
   firebase: {
  urL:Ref
  },
  components: {
    page1,page2,page3,page4
  },
    data: () => ({
      key:"",
      //page2
       saveDatalist:[0,0,0,0,0,
       0,0,0,0,0,
      0,0,0,0,0,
       0,0,0,0,0,],
      //page4
      list:[0,0,0],
      //page3
      list1:[0,0,0,0,0,
       0,0,0,0,0,
      0,0,0,0,0,
       0,0,0,0,0,],
      page:0
    
    })
    ,methods:{
      tab (page) {
       this.page = page
    //  alert(page,this.page)
      }
      ,
       chagelistPage2(data,index){

       
       this.saveDatalist[index]=data
     //alert("name : " +index +" data:" + data)
        },

       chagelistPage3(listInput,Num){

        this.list1[Num]=listInput
      // alert("seed "+this.list1[Num])
        },
         chagelistPage4(listInput,Num){
        this.list[Num]=listInput
    // alert("seed "+this.list[Num])
        },
        
  /* Tofirebase() {
 //alert("before" + key)
Ref.once("value", function(snapshot,key) {
 this.key ="No:"+ snapshot.numChildren()
alert("this :" + 
key )
alert("this :" + this.key )
Ref.child(key).set({
  เเบบประเมินเเบบสอบถาม:{
   ความยากง่ายในการตอบคำถาม:this.list[0],
    การสะท้อนความเป็นจริง:this.list[1],
     โดยภาพรวมนักศึกษาชอบเเบบไหนมากกว่ากัน:this.list[2],
     }
  }
  )
 })
 }, */

 Tofirebase (){
this.Save(this.key,this.list,this.list1,this.saveDatalist,)
 },
           Save(key,list,list1,saveDatalist) {
    
 // alert("before" + key)
 Ref.once("value", function(snapshot,key) {
  key =snapshot.numChildren()+1
// alert("InsertKey :" + key )

Ref.child(key).set({
   คำถามเเบบตัวเลือกสเกล:{
    กลัวทำงานผิดพลาด:saveDatalist[0],
    ไปไม่ถึงเป้าหมายที่วางไว้:saveDatalist[1],
    ครอบครัวมีความขัดเเย้งกันในเรื่องเงินหรือเรื่องงานในบ้าน:saveDatalist[2],
    เป็นกังวลกับเรื่องสารพิษหรือมลภาวะในอากาศนำ้เสียงเเละดิน:saveDatalist[3],
    รู้สึกว่าต้องเเข่งขันหรอเปรียบเทียบ:saveDatalist[4],
    เงินไม่พอใช้จ่าย:saveDatalist[5],
    กล้ามเนื้อตึงหรือปวด:saveDatalist[6],
    ปวดหัวจากความตึงเครียด:saveDatalist[7],
    ปวดหลัง:saveDatalist[8],
    ความอยากอาหารเปลี่ยนเเปลง:saveDatalist[9],
    ปวดศีรษะข้างเดียว:saveDatalist[10],
    รู้สึกวิตกกังวล:saveDatalist[11],
    รู้สึกคับข้องใจ:saveDatalist[12],
    รู้สึกโกรธหรือหงุดหงิด:saveDatalist[13],
    รู้สึกเศร้า:saveDatalist[14],
    ความจำไม่ดี:saveDatalist[15],
    รู้สึกสับสน:saveDatalist[16],
    ตั้งสมาธิลำบาก:saveDatalist[17],
    รู้สึกเหนื่องง่าย:saveDatalist[18],
    เป็นหวัดบ่อยๆ:saveDatalist[19],
  
  },
  คำถามเเบบตัวเลือก:{
    กลัวทำงานผิดพลาด:list1[0],
    ไปไม่ถึงเป้าหมายที่วางไว้:list1[1],
    ครอบครัวมีความขัดเเย้งกันในเรื่องเงินหรือเรื่องงานในบ้าน:list1[2],
    เป็นกังวลกับเรื่องสารพิษหรือมลภาวะในอากาศนำ้เสียงเเละดิน:list1[3],
    รู้สึกว่าต้องเเข่งขันหรอเปรียบเทียบ:list1[4],
    เงินไม่พอใช้จ่าย:list1[5],
    กล้ามเนื้อตึงหรือปวด:list1[6],
    ปวดหัวจากความตึงเครียด:list1[7],
    ปวดหลัง:list1[8],
    ความอยากอาหารเปลี่ยนเเปลง:list1[9],
    ปวดศีรษะข้างเดียว:list1[10],
    รู้สึกวิตกกังวล:list1[11],
    รู้สึกคับข้องใจ:list1[12],
    รู้สึกโกรธหรือหงุดหงิด:list1[13],
    รู้สึกเศร้า:list1[14],
    ความจำไม่ดี:list1[15],
    รู้สึกสับสน:list1[16],
    ตั้งสมาธิลำบาก:list1[17],
    รู้สึกเหนื่องง่าย:list1[18],
    เป็นหวัดบ่อยๆ:list1[19],
   

  },

  เเบบประเมินเเบบสอบถาม:{
   ความยากง่ายในการตอบคำถาม:list[0],
    การสะท้อนความเป็นจริง:list[1],
     โดยภาพรวมนักศึกษาชอบเเบบไหนมากกว่ากัน:list[2],
     }


  }
  )
 })
 }

    } 
  
    
    }
    
    
</script>

<style>
.text-xs-center{
   font-family: 'Kanit', sans-serif !important ;
}
.text-xs-left{
  margin-left:20px;
  margin-right:20px;


}
@import url('https://fonts.googleapis.com/css?family=Kanit');
</style>
