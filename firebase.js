// For Firebase JS SDK v7.20.0 and later, measurementId is optional


  import firebase from "firebase";
  
  const firebaseapp = firebase.initializeApp({
    apiKey: "AIzaSyC6oQtZMev3H7_PMO_2LqHphu_85hOz0NA",
    authDomain: "instagram-clone-eee92.firebaseapp.com",
    projectId: "instagram-clone-eee92",
    storageBucket: "instagram-clone-eee92.appspot.com",
    messagingSenderId: "931582344931",
    appId: "1:931582344931:web:f9862fa70347a9dda0cfd6",
    measurementId: "${config.measurementId}"
  
  });
  const db = firebaseapp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db,auth,storage};