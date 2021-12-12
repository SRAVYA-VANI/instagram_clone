

  import firebase from "firebase";
  
  const firebaseapp = firebase.initializeApp({
//place your own fire base config
  
  });
  const db = firebaseapp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db,auth,storage}
