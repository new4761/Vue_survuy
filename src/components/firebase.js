import Firebase from 'firebase'
let config = {
    apiKey: "AIzaSyC2ykVnIjvXo5BggxisuxcVsPbEdM5gVk8",
    authDomain: "survey-63461.firebaseapp.com",
    databaseURL: "https://survey-63461.firebaseio.com",
    projectId: "survey-63461",
    storageBucket: "survey-63461.appspot.com",
    messagingSenderId: "639404973363"
    };
  let app = Firebase.initializeApp(config)

export const Ref = app.database().ref('Data')