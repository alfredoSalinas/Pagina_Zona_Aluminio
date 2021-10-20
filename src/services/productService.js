
import { db } from './firebase'
import firebase from 'firebase/app'
import storage from 'firebase/storage'

export const authenticateAnonymously = () => {
    return firebase.auth().signInAnonymously();
};

export const authenticate = ()=> {
    const provider = new firebase.auth.GoogleAuthProvider()
		firebase.auth().signInWithPopup(provider)
			.then(result => console.log('Resultado ', result.user.email))
		firebase.auth().onAuthStateChanged(user =>{
            console.log('Usuario ', user.displayName)
		})
}

export const getDocumentos = (coleccion) =>{
  return db.collection(coleccion)
    .get()
}

export const getProductos = ()=>{
    return db.collection('productos')
        .get();
  }

export const createProducto = (data) => {
    return db.collection('productos')
        .doc(data.nombre)
        .set(data);
};

export const createPedido = (data) => {
    return db.collection('pedidos')
        .doc(data.id)
        .set(data);
};


export const getGroceryList = groceryListId => {
    return db.collection('groceryLists')
        .doc(groceryListId)
        .get();
};

export const getFotoProducto = idFoto => {
    var urlFoto=''
    const storageRef = firebase.storage().ref(idFoto+'.png')
          storageRef.getDownloadURL()
          .then(function(url){
            urlFoto=url
          })
    return urlFoto
}

