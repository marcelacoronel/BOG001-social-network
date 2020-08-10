export {
    createNewUse
    //currentUserStatus,
    //userSignOff

};


//crear un usuario nuevo

    async function createNewUser(email,password){
    try{
        const authentication = await firebase.auth().createUserWithEmailAndPassword(email, password);
        return authentication;
    }
    catch(error) {
        let errorMessage = error.message; //Error message nos muestra una string los errores que no permiten la autenticación: email en uso o contraseña no válida
        return errorMessage;
    };
};

// estado del usuario

// function currentUserStatus(){
//     firebase.auth().onAuthStateChanged(function(user) {
//         if (user) {
//                   aparece(user);
//           User is signed in.
//           console.log(user)
//           var displayName = user.displayName;
//           var email = user.email;
//           var emailVerified = user.emailVerified;
//           console.log(user.emailVerified)
//           var photoURL = user.photoURL;
//           var isAnonymous = user.isAnonymous;
//           var uid = user.uid;
//           var providerData = user.providerData;
//           console.log("usuario activo")
//           ...
//         } else {
//             console.log("no existe usuario activo")
//           User is signed out.
//           ...
//         }
//       });
// }

// currentUserStatus()

// function aparece(user){
// var user = user;
// if(user.emailVerified){
// contenido.innerHTML = `
// <p>Bienvenido!</p>
// <button onclick="cerrarSesion()">Cerrar sesion</button>
// `
// }
// }
// Verificar con email
// function verificar (){
//     alert("usuario resgistrado")
//       let user = firebase.auth().currentUser;
  
//   user.sendEmailVerification().then(function() {
//       console.log("enviar email")
//     // Email sent.
//   }).catch(function(error) {
//       console.log(error)
//     // An error happened.
//   });
//   }

// cerrar sesion

// function userSignOff(){
//     firebase.auth().signOut()
//     .then(function(){
//         console.log("salir")
//     })
//     .catch(function(error){
//         console.log(error)
//     })
// }