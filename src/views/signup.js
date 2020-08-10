
import { auth } from '../firebase/createUser.js';

export default () => {
    const view =`
        
        <div class="container-form">
            <div class=logo_singup>
                <img src="./img/logo_signup.svg" alt="logo_singup">
            </div>
            <div class="form-Singup" >
                <h2>Registrate</h2>
                <form action="" class="form-SU-Desktop-tablet" id="form">
                    <label for="nameSingUp">NOMBRE</label>
                    <input id="nameSingUp" type="text" placeholder="pepito perez" required>
                    <label for="emailSingUp">EMAIL</label>
                    <input id="emailSingUp"  type="email" placeholder="pepitoperez@hotmail.com" required>
                    <label for="passSingUp">CONTRASEÑA</label>
                    <input id="passSingUp" type="password" placeholder="***********" required>
                    <input type="submit" onclick="Registrarse()" value="SING IN">
                    <span>
                    <p>Ya tienes cuenta? <a href="#/login">Log in</a> </p>
                    </span>
                </form>
                <form action="" class="form-SU-movil" id="form">
                    <input id="Nombre" type="text" placeholder="Nombre" required>
                    <input type="password" placeholder="Email" required>
                    <input type="email" placeholder="Contraseña" required>
                    <input type="submit" id="btnSignUp" value="SING IN">
                    <span>
                        <p>Ya tienes cuenta? <a href="#/login">Log in</a> </p>
                    </span>
                </form>
            </div>
        </div>


        <div class=bg-singup>
            <img class="desktop-SU" img src="./img/SingUp-desktop.svg" alt="bg_singup">
            <img class="tablet-SU" img src="./img/SingUp-tablet.png" alt="bg_singup">
            <img class="mobile-SU" img src="./img/SingUp-mobile.png" alt="bg_singup">
        </div>

        <div id="landscape">
            <div>
	            <p>
	                <img src="./img/giro@2x.png" alt=""><br><center>
                    ¡Gira tu dispositivo!</center><br>
                    <span><center>¡Please!</center></span>
	            </p>
            </div>

        </div>
`;
<<<<<<< HEAD:src/views/signup.js
const nav= document.getElementById("headerNav")
nav.style.display="none";
   const divElement = document.createElement(`div`);

   divElement.classList = 'SingUp-Container'

   divElement.innerHTML =view;
=======
>>>>>>> d344146f67e2f4961fd0b3f589c842ac91214a39:src/views/singup.js

const nav = document.getElementById("headerNav");
nav.style.display = "none";
const divElement = document.createElement(`div`);

divElement.classList = "SingUp-Container";

divElement.innerHTML = view;

document.getElementById("headerNav").style.display = "none";

const boton = divElement.querySelector(".btn");
boton.addEventListener("click", createNewUsers);


function createNewUsers() {
  alert("click");
  let nombre = document.querySelector(".nombre").value;
  let email = document.querySelector(".email").value;
  let password = document.querySelector(".password").value;

  console.log(nombre + email + password);

  createUsers(email,password)

}
function currentUserStatus() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      //console.log(user)
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      console.log(user.emailVerified);
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      console.log("usuario activo");
      // ...
    } else {
      console.log("no existe usuario activo");
      // User is signed out.
      // ...
    }
  });
}

currentUserStatus();
return divElement;
};

