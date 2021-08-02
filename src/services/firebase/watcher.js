import { auth, db } from './setup'


/*
export function salir(callback){
  const logout = auth.signOut().then(() => {
    callback(true)
  }).catch((error) => {
    // An error happened.
    callback(false)
  });

  return logout
}

export function watchClientes(callback){
  const unsub = db
        .collection('clientes')
        .onSnapshot((snapshot)=>{
            const docs = []
          snapshot.forEach((doc)=>{
            const data = doc.data
            docs.push({
              ...data,
              id: doc.id,
            })
          })
          callback(docs)
        })

  return unsub
}
*/