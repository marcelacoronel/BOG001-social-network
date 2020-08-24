
import { addUsersData } from '../components/database.js';

// references
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


// Estado del usuario

function userState() {
  auth.onAuthStateChanged((user) => {
    if (user) {
      const userId = user;
      localStorage.setItem('usuario', JSON.stringify(userId));
      // User is signed in.
      console.log(userId);
      console.log('usuario activo');
      // ...
    } else {
      console.log('no existe usuario activo');
      // User is signed out.
      // ...
    }
  });
}

userState();

// Crear un usuario nuevo
export const createUsers = (email, password) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((cred) => {
      console.log(cred.user);
      //   return db.collection('userData').doc(cred.user.uid).set({
      // // return db.collection('userData').doc('usuario').set({
      //     Email: email,
      //     Password: password,
      //   });

      // console.log(cred.user);
      // console.log(db.collection('User').doc(cred.user.uid));

      // console.log('verificado');
    }).catch((error) => {
      // Handle Errors here.
      console.log(error.message);
      // ...
    });
};

// Crear un usuario con google
export const createUserswithGoogle = () => {
  auth
    .signInWithPopup(provider)
    .then(() => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      window.location.hash = '#/profile';
      console.log('google user');
      addUsersData(User, id);
      // const token = result.credential.accessToken;
      // The signed-in user info.
      // const user = result.user;
      // ...
    })
    .catch((error) => {
      console.log(`error google ${error}`);
      // Handle Errors here.
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // // The email of the user's account used.
      // var email = error.email;
      // // The firebase.auth.AuthCredential type that was used.
      // var credential = error.credential;
      // // ...
    });
};

// Log in usuario
export const signInUsers = (email, password) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then((cred) => {
      console.log(cred.user);
      window.location.hash = '#/dashboard';
      // alert('bienvenido');
    })
    .catch((error) => {
      console.log(error);
      // alert('no estas registrado' + error);
    });
};

// Cerrar sesion usuario
export const userSignOff = () => {
  auth
    .signOut()
    .then(() => {
      console.log('salir');
    })
    .catch((error) => {
      console.log(error.message);
    });
};


// Recuperar contraseña usuario
export const recoverPass = (email) =>{
  auth
    .sendPasswordResetEmail(email)
    .then(() => {
      const msjEmailSend = document.querySelector('#EmailSend');  
      msjEmailSend.style.display = 'block';
    })
    .catch((error) => {
      console.log(error.message);
    });
}

