import firebase from 'firebase/app'
import "firebase/firestore";

  var firebaseConfig = {
    apiKey: "AIzaSyBaGaGI-3-JhOz0XBRYbeePhqK8N_H6oiM",
    authDomain: "tienda-76091.firebaseapp.com",
    projectId: "tienda-76091",
    storageBucket: "tienda-76091.appspot.com",
    messagingSenderId: "980828415808",
    appId: "1:980828415808:web:c25222741cb76f8b157ca5"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();

export default db