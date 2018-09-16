 import firebase from 'firebase'
 import firestore from 'firebase/firestore'
 
 
 // Initialize Firebase

 var config = {
    apiKey: "AIzaSyAXNzIWdeXwXlai_4wMa5HsZJgYNVVuEOs",
    authDomain: "ninja-smoothies-996ef.firebaseapp.com",
    databaseURL: "https://ninja-smoothies-996ef.firebaseio.com",
    projectId: "ninja-smoothies-996ef",
    storageBucket: "ninja-smoothies-996ef.appspot.com",
    messagingSenderId: "553483673597"
  };
  const firebaseApp = firebase.initializeApp(config);
  

  export default firebaseApp.firestore()