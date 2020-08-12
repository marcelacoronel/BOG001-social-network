// Almacenar en firestore datos del perfil Usuario

export const addUsersData = (collection, dataUser) => {
  db.collection(collection)
    .add(dataUser)
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.log('Error adding document: ', error);
    });
};
