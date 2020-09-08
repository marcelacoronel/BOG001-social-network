/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */

// FUNCIONES CON RETORNO PARA EJECUTAR TEST
// const sendEmail = () => {
//   const user = firebase.auth().currentUser;
//   user.sendEmailVerification()
//     .then(() => {
//       console.log('El correo se envio');
//       const overlay = document.querySelector('#overlay');
//       const popup = document.querySelector('#popup');
//       overlay.classList.add('active');
//       popup.classList.add('active');
//     })
//     .catch((error) => {
//       console.log(error.message);
//     });
// };
// // Crear un usuario nuevo
// export const createUsers = (email, password) => firebase.auth()
//   .createUserWithEmailAndPassword(email, password);

// // Crear un usuario con google
// export const createUserswithGoogle = () => firebase.auth()
//   .signInWithPopup(new firebase.auth.GoogleAuthProvider());

// // Log in usuario
// export const signInUsers = (email, password) => firebase.auth()
//   .signInWithEmailAndPassword(email, password);

// // Cerrar sesion usuario
// export const userSignOff = () => firebase.auth()
//   .signOut();

// // Recuperar contraseña usuario
// export const recoverPass = (email) => {
//   firebase.auth()
//     .sendPasswordResetEmail(email)
//     .then(() => {
//       const msjEmailSend = document.querySelector('#EmailSend');
//       msjEmailSend.style.display = 'block';
//     })
//     .catch((error) => {
//       console.log(error.message);
//     });
// };

import { addUsersData } from './database.js';
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
      console.log('usuario activo');
    } else {
      console.log('no existe usuario activo');
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
      sendEmail();
    }).catch((error) => {
      console.log(error.message);
      const emailMessage = document.querySelector('#messageEmailSU');
      emailMessage.innerHTML = error.message;
    });
};
// Crear un usuario con google
export const createUserswithGoogle = () => {
  auth
    .signInWithPopup(provider)
    .then(() => {
      window.location.hash = '#/profile';
      console.log('google user');
      addUsersData(User, id);
    })
    .catch((error) => {
      console.log(`error google ${error}`);
    });
};
// Log in usuario
export const signInUsers = (email, password) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      console.log(user);
      const uidUser = user.user.uid;
      if (user.user.emailVerified) {
        console.log(user.user);
        window.location.hash = '#/dashboard';
      }
      else {
        window.location.hash = '#/login';
        const emailMessage = document.querySelector('#messageEmailLog');
        emailMessage.innerHTML = 'Revisa en tu email correo de verificación';
      }
    })
    .catch((error) => {
      console.log(error);
      const emailMessage = document.querySelector('#messageEmailLog');
      emailMessage.innerHTML = 'Este usuario no esta Registrado';
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
// Recuperar contraseña usuario
export const recoverPass = (email) => {
  auth
    .sendPasswordResetEmail(email)
    .then(() => {
      const msjEmailSend = document.querySelector('#EmailSend');
      msjEmailSend.style.display = 'block';
    })
    .catch((error) => {
      console.log(error.message);
    });
};
// Enviar Email de Confirmación
const sendEmail = () => {
  const user = firebase.auth().currentUser;
  user.sendEmailVerification()
    .then(() => {
      console.log('El correo se envio');
      const overlay = document.querySelector('#overlay');
      const popup = document.querySelector('#popup');
      overlay.classList.add('active');
      popup.classList.add('active');
    })
    .catch((error) => {
      console.log(error.message);
    });
};
