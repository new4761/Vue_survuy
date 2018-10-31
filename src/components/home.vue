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
  key ="No:"+ (snapshot.numChildren()+1)
// alert("InsertKey :" + key )

Ref.child(key).set({
  คำถามเเบบตัวเลือกสเกล:
    [saveDatalist[0],
    saveDatalist[1],
    saveDatalist[2],
    saveDatalist[3],
     saveDatalist[4],
   saveDatalist[5],
    saveDatalist[6],
    saveDatalist[7],
    saveDatalist[8],
    saveDatalist[9],
   saveDatalist[10],
    saveDatalist[11],
    saveDatalist[12],
    saveDatalist[13],
    saveDatalist[14],
    saveDatalist[15],
    saveDatalist[16],
    saveDatalist[17],
    saveDatalist[18],
    saveDatalist[19]
    ]
  ,
  คำถามเเบบตัวเลือก:
  [
   list1[0],
    list1[1],
    list1[2],
   list1[3],
    list1[4],
    list1[5],
   list1[6],
    list1[7],
    list1[8],
    list1[9],
    list1[10],
    list1[11],
    list1[12],
    list1[13],
    list1[14],
    list1[15],
    list1[16],
    list1[17],
    list1[18],
    list1[19],
  ]

  ,

  เเบบประเมินเเบบสอบถาม:
  [
   list[0],
  list[1],
  list[2],
  ]
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
