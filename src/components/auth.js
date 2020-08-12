// comentar cada funcion

// Estado del usuario

function currentUserStatus() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      console.log(user.uid);
      // var displayName = user.displayName;
      // var email = user.email;
      // var emailVerified = user.emailVerified;
      // console.log(user.emailVerified);
      // var photoURL = user.photoURL;
      // var isAnonymous = user.isAnonymous;
      // var uid = user.uid;
      // var providerData = user.providerData;
      console.log('usuario activo');
      // console.log(user = auth.getInstance().getCurrentUser())
      // ...
    } else {
      console.log('no existe usuario activo');
      // User is signed out.
      // ...
    }
  });
}
currentUserStatus();

// Crear un usuario nuevo

export const createUsers = (email, password) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((cred) => {
      window.location.hash = '#/profile';

      return db.collection('userData').doc(cred.user.uid).set({
        Email: email,
        Password: password,
      });

      // console.log(cred.user);
      // console.log(db.collection('User').doc(cred.user.uid));

      // console.log('verificado');
    })

    .catch((error) => {
      // Handle Errors here.
      console.log(error.message);
      // ...
    });
};

// Cerrar sesion usuario
export const userSignOff = () => {
  auth
    .signOut()
    .then(() => {
      console.log('salir');
      window.location.hash = '';
    })
    .catch((error) => {
      console.log(error.message);
    });
};
