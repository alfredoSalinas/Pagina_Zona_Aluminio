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

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
//export const auth = firebase.auth();
/*
export function watchUserChanges(callback){
  const unsub = firebase.auth().onAuthStateChanged((user)=>{
    if(user && !user.isAnonymous){
      console.log('Logging in')
      callback({
        id:user.uid,
        email: user.email,
        name: user.displayName,
        foto: user.photoURL
      })
    }else{
      console.log('No Logged in')
      callback(null)
    }
  })
  return unsub
}
*/
db.settings({
  timestampsInSnapshots: true,
})
