import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDKMePgZn2cVyONuwYkt0TihIJKA5eBbpY",
    authDomain: "react-crud-5661e.firebaseapp.com",
    databaseURL: "https://react-crud-5661e.firebaseio.com",
    projectId: "react-crud-5661e",
    storageBucket: "react-crud-5661e.appspot.com",
    messagingSenderId: "318086744224",
    appId: "1:318086744224:web:e2c4d1be3a34f4805821c5"
  };
  // Initialize Firebase
  let fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();