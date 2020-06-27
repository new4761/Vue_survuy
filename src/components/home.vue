<template>
  <v-container fluid class="text-xs-center">
    <v-layout row wrap>
      <v-flex xs8 offset-xs2>
        <div id="app">
          <v-app id="inspire">
            <v-stepper v-model="page">
              <div class="text-xs-center">
                <br />
                <h1>เเบบสอบถามการเปรียบเทียบ</h1>
                <h2>rating scale เเละ visual analog scale</h2>
                <br />
              </div>
              <v-stepper-header class="text-xs-center">
                <v-stepper-step :editable="page > 1" step="1">คำอธิบาย</v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step step="2">ส่วนที่ 1</v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step step="3">ส่วนที่ 2</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="4">ส่วนที่ 3</v-stepper-step>
              </v-stepper-header>

              <v-stepper-items>
                <page1 v-on:next="tab" />

                <page3 v-on:SavedataPage3="chagelistPage3" v-on:next="tab" />
                <page2 v-on:SaveDatapage2="chagelistPage2" v-on:next="tab" />
                <page4
                  v-on:SavedataPage4="chagelistPage4"
                  v-on:SaveData="submitData"
                  v-on:next="tab"
                />
              </v-stepper-items>
            </v-stepper>
          </v-app>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import page1 from "../components/page1";
import page2 from "../components/page2";
import page3 from "../components/page3";
import page4 from "../components/page4";
import Axios from "axios";
export default {
  components: {
    page1,
    page2,
    page3,
    page4
  },
  data: () => ({
    //page2
    saveDatalist: [1, 1, 1, 1, 1,
     1, 1, 1, 1, 1,
      1, 1, 1, 1, 1,
       1, 1, 1, 1,1],
    //page4
    list: [0, 0, 0],
    //page3
    list1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    page: 0
  }),
  methods: {
    tab(page) {
      this.page = page;
      //  alert(page,this.page)
    },
    chagelistPage2(data, index) {
      this.saveDatalist[index] = data;
      // eslint-disable-next-line no-console
      // console.log(this.saveDatalist);
      //alert("name : " +index +" data:" + data)
    },

    chagelistPage3(listInput, Num) {
      this.list1[Num] = listInput;

      // eslint-disable-next-line no-console
      //  console.log(this.list1);
      // alert("seed "+this.list1[Num])
    },
    chagelistPage4(listInput, Num) {
      this.list[Num] = listInput;
    },

    submitData() {
      //  //   eslint-disable-next-line no-console
      //    console.log(this.saveDatalist);
      //      //   eslint-disable-next-line no-console
      //  console.log(this.list1);
      //    //   eslint-disable-next-line no-console
      //         console.log(this.list);
      Axios.post("http://mathsurveykmitl.cu.ma/apis/addData.php", {
        formID:1,
        saveDatalist: this.saveDatalist,
        list1: this.list1,
        list2: this.list
      })
        // eslint-disable-next-line no-console
        .then(response => console.log(response.data));
    }
  }
};
</script>

<style>
.text-xs-center {
  font-family: "Kanit", sans-serif !important ;
}
.text-xs-left {
  margin-left: 20px;
  margin-right: 20px;
}
@import url("https://fonts.googleapis.com/css?family=Kanit");
</style>
