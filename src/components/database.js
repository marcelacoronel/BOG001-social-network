/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
// referencia de los servicios de firebase
// const db = firebase.firestore();
// const storage = firebase.storage();

// FIRESTORE

export function loadInfoUser(collection, uid) {
  firebase.firestore()
    .collection(collection)
    .doc(uid)
    .get();
}
export async function addUsersData(dataUser, uid) {
  await firebase.firestore()
    .collection('user')
    .doc(uid)
    .set(dataUser)
    .then((doc) => {
      console.log(doc.data());
      console.log('Document successfully uploaded!');
    })
    .catch((error) => {
      console.log('Error upload document: ', error);
    });
}

// Añadir los datos de cada post a la coleccion del usuario
export async function addPostUserData(uid, dataPost) {
  await firebase.firestore()
    .collection('user')
    .doc(uid)
    .collection('post')
    .add(dataPost)
    .then((doc) => {
      console.log(doc.data());
      console.log('Document successfully uploaded!');
    })
    .catch((error) => {
      console.log('Error upload document: ', error);
    });
}

// Editar los datos del post

export function editPostUserData(uid, idPost) {
  firebase.firestore()
    .collection('user')
    .doc(uid)
    .collection('post')
    .doc(idPost)
    .get()
    .then((doc) => {
      console.log(doc.data());
      console.log('Document successfully edit!');
    })
    .catch((error) => {
      console.log('Error editing document: ', error);
    });
}

// Obtener los datos de la coleccion
export function getUserData(id) {
  firebase.firestore().collection('user')
    .doc(id)
    .get()
    .then((doc) => {
      console.log(doc.data());
      console.log('Document successfully !');
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });
}


// Borrar los datos de la coleccion
export function deletePostUserData(uid, idPost) {
  firebase.firestore().collection('user')
    .doc(uid)
    .collection('post')
    .doc(idPost)
    .delete()
    .then(() => {
      console.log('Document successfully deleted!');
    })
    .catch((error) => {
      console.log('Error removing document: ', error);
    });
}

// ------------------------STORAGE---------------------------------

// Crear folder y guardar las imagenes
export function imageStorage(folder, id, file) {
  return firebase.storage()
    .ref(folder + id)
    .put(file);
}

// Borrar las imagenes del storage

export function deletePostImageData(folder) {
  firebase.storage()
    .ref(folder)
    .delete()
    .then(() => {
      console.log('File deleted successfully');
    })
    .catch((error) => {
      console.log(`Uh-oh, an error occurred!${error}`);
    });
}
// Obtener la foto del perfil del usuario

export function storage(uid, profileUser, avatar) {
  const storageRef = firebase
    .storage()
    .ref(`user/${uid}/profile/${uid}`);
  storageRef
    .getDownloadURL()
    .then((url) => {
      // `url` is the download URL for 'images/stars.jpg'
      console.log(url);
      // Or inserted into an <img> element
      profileUser = url;
      avatar.src = url;
      // imgAvatarPost.src = url;
    })
    .catch((error) => {
      console.log(error);
    });
}
