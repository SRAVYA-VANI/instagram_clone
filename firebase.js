// For Firebase JS SDK v7.20.0 and later, measurementId is optional


  import firebase from "firebase";
  
  const firebaseapp = firebase.initializeApp({
  //your fire base config
  
  });
  const db = firebaseapp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db,auth,storage};
