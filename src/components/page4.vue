<template>
  <v-stepper-content step="4"  >
<v-card>
          <!-- <h1>{{ list[0] }}</h1> -->
          <v-dialog
        v-model="dialog"
        width="500"
      ><v-card >
          <v-card-title 
            class="headline green lighten-2  "
            
           
          >
            ขอบคุณสำหรับการทำเเบบสอบถาม
          </v-card-title>
  
          <v-card-text>
            ระบบได้บันทึกข้อมูลของคุณเรียบร้อย
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-actions>
            <v-spacer></v-spacer>
        
          </v-card-actions>
        </v-card>
      </v-dialog>
          <h2 class="text-xs-center">เเบบประเมินเเบบสอบถาม</h2>
      <v-form v-model="valid2" ref="form2" lazy-validation>
 
          <v-layout row wrap>
            <v-flex xs8 offset-xs1>
           <v-subheader class="pl-0 headtext">1. ความยากง่ายในการตอบคำถาม</v-subheader>
         <v-radio-group @change="Savedata(0)" row v-model="list[0]" :rules="[v => !!v || 'กรุณาตอบเเบบสอบถาม']" required>
        <v-radio label="เเบบเลื่อนสเกลง่ายกว่า" value="เเบบเลื่อนสเกลง่ายกว่า"></v-radio>
        <v-radio label="เเบบเลือกปุ่มง่ายกว่า" value="เเบบเลือกปุ่มง่ายกว่า"></v-radio>
      </v-radio-group>
     </v-flex>
         </v-layout>   
              <v-layout row wrap>
            <v-flex xs8 offset-xs1>
           <v-subheader class="pl-0 headtext">2. การสะท้อนความเป็นจริง</v-subheader>
         <v-radio-group @change="Savedata(1)" row v-model="list[1]" :rules="[v => !!v || 'กรุณาตอบเเบบสอบถาม']" required>
        <v-radio label="เเบบเลื่อนสเกลสะท้อนความเป็นจริงมากกว่า  " value="เเบบเลื่อนสเกลสะท้อนความเป็นจริงมากกว่า"></v-radio>
        <v-radio label="เเบบเลือกปุ่มสะท้อนความเป็นจริงมากกว่า" value="เเบบเลือกปุ่มสะท้อนความเป็นจริงมากกว่า"></v-radio>
      </v-radio-group>
     </v-flex>
         </v-layout>   

              <v-layout row wrap>
            <v-flex xs8 offset-xs1>
           <v-subheader class="pl-0 headtext">3. โดยภาพรวมนักศึกษาชอบเเบบไหนมากกว่ากัน</v-subheader>
         <v-radio-group @change="Savedata(2)" row v-model="list[2]" :rules="[v => !!v || 'กรุณาตอบเเบบสอบถาม']" required>
        <v-radio label="เเบบเลื่อนสเกลมากกว่า    " value="เเบบเลื่อนสเกลมากกว่า    "></v-radio>
        <v-radio label="เเบบเลือกปุ่มมากกว่า" value="เเบบเลือกปุ่มมากกว่า"></v-radio>
      </v-radio-group>
     </v-flex>
         </v-layout>   

  
    </v-form>
    
   <v-snackbar
      :timeout="5000"
      color="red"
      v-model="snackbar2"
    >กรุณาตอบเเเบบสอบถามให้ครบถ้วน
    <v-btn dark flat @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>

          </v-card>
          
      <v-btn color="primary" @click="submit2()"   > Submit </v-btn>
          <v-btn flat  @click="give(3)">Back</v-btn>
        </v-stepper-content>
          </template>

<script>
import { Ref } from '../components/firebase.js';
export default {
 firebase: {
    Test2:Ref
 },
 data() {
    return {
   //   texttest:"test",
   key:"1",
    dialog: false,
  valid2: true,
  list:[null,null,null],
    snackbar2:false
    };
  },
  methods: {
    submit2 () {
      if (this.$refs.form2.validate()) {
     this.$emit('SaveData')
   //   this.Stest(this.key,this.list)
       this.dialog =true
// alert ('done')
      }
 else  {this.snackbar2 = true;}
    }   ,
       give (page){  
        this.$emit('next',page)
        },
        
  /* Stest(key,list) {
    
 // alert("before" + key)
 Ref.once("value", function(snapshot,key) {
key = snapshot.numChildren()
 key = key.toString();
 key ="No:"+ key
// alert("InsertKey :" + key )

Ref.child(key).set({
  เเบบประเมินเเบบสอบถาม:{
   ความยากง่ายในการตอบคำถาม:list[0],
    การสะท้อนความเป็นจริง:list[1],
     โดยภาพรวมนักศึกษาชอบเเบบไหนมากกว่ากัน:list[2],
     }
  }
  )
 })
 },*/

 //    Ref.child(key).set({text:texttest,name:texttest,test:texttest})

  
   Savedata(num){
   //  alert ("this.list[num] "+this.list[num])
     this.$emit('SavedataPage4',this.list[num],num)
   }
}
}


</script>
