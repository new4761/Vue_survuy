
"use strict";
const functions = require('firebase-functions');

// Firebase Admin initialization
var admin = require("firebase-admin");
var serviceAccount = require("./service-account.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://survey-63461.firebaseio.com"
});

// Get Google Sheets instance
const { google } = require("googleapis");
const sheets = google.sheets("v4");

// Create JWT
const jwtClient = new google.auth.JWT({
  email: serviceAccount.client_email,
  key: serviceAccount.private_key,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"] // read and write sheets
});

// Get data from RTDB
exports.copyPetrolToSheet = functions.database.ref("/Data").onUpdate(async change => {
  let data = change.after.val();

  // Convert JSON to Array following structure below
  /* 
  [ [No 1 , [0-20], [0-20],[0-4] ]
    ['COL-A', 'COL-B'],
    ['COL-A', 'COL-B']
  ]
  */
  var itemArray = [];
  var iteminArray = [];
  var valueArray = [];
  var i =0;
  Object.keys(data).forEach((key, index) => {
  //  functions.database.ref("/Data/"+key)
  
   
   //itemArray.push(key);
   
   // console.log('Key :'+key);
   itemArray.push(key);
   // console.log('data["No1"] :'+data["No1"]);
    Object.keys(data[key]).forEach((key2) => {
   //   console.log('key2 :'+key2);
      Object.keys(data[key][key2]).forEach((key3) => {
        itemArray.push(data[key][key2][key3]);
    //    console.log('data[key][key2][key3] :'+data[key][key2][key3]);
      });
    });


 
    valueArray[index] = itemArray;
    iteminArray = [];
    itemArray = [];
  });

  let maxRange = valueArray.length + 1;

  // Do authorization
  await jwtClient.authorize();
  
  // Create Google Sheets request
  let request = {
    auth: jwtClient,
    spreadsheetId: "1RiJAaxVQPFJG86woS5M807HXiOhTTzY6S4z8Jq5HTYk",
    range: "Data!A2:AR2", 
    valueInputOption: "RAW",
    requestBody: {
      values: valueArray
    }
  };
  
  // Update data to Google Sheets
  await sheets.spreadsheets.values.update(request, {});
});
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
