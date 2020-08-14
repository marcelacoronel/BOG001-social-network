import { signInUsers } from '../components/auth.js';

export default () => {
  const view = `
               
          <div class="containerImgTitle">
              <div class="titleSite">
                  <img src="img/logo-BluePink.png" alt="">
              </div>
              <div class="imgSignInDesktop">
                  <img src="img/LogIn-desktop.svg" alt="">
              </div>
              <div class="imgSignInMobile">
                  <img src="img/LogIn-mobile.jpg" alt="">
              </div>
          </div>
          
          <div class="containerForms">
              <h2>Bienvenido</h2>
              <div class="form">
                  
                  <form action="#" class="inputsForm" id="logInForm">
                      <Label>EMAIL</br>
                          <input id="email" class="inputForm" type="email" placeholder="pepitoperez@gmail.com" required>
                      </Label><br />
                      <Label>CONTRASEÑA</br>
                          <input id ="password" class="inputForm" type="password" placeholder="*********"  pattern=".{8,}" required>
                          <i id ="eye" class="far fa-eye"></i>
                          <span id="messagePass"></span>
                        </Label></br>
                      <button id="btn" class="btnForm">LOG IN</button> 
                  </form>
              </div>
          
              <div class="reset">
                  <a href="">Olvide mi contraseña?</a>
              </div>
              <div class="toggle">
                  <label for="cuenta">No tienes cuenta?</label> 
                  <a class="cuenta" href="#/sign-up">Sign Up</a>
              </div>
           </div>
           <div id="landscape">
           <div>
               <img src="./img/giro@2x.png" alt=""></br>
               <center>¡Gira tu dispositivo!</center></br>
               <span><center>¡Please!</center></span>
           </div>
       </div>
  `;
  // Variables
  const nav = document.getElementById('headerNav');
  const divElement = document.createElement('div');
  divElement.classList = 'containerView';
  divElement.innerHTML = view;
  const logInForm = divElement.querySelector('#logInForm');
  const eye = divElement.querySelector('#eye');
  nav.style.display = 'none';

  // Funciones
  // Ingreso de usuario
  logInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signInUsers(email, password);
    logInForm.reset();
  });

  function showHidePassword() {
    const x = document.getElementById('password');
    if (x.type === 'password') {
      x.type = 'text';
    } else {
      x.type = 'password';
    }
  }

  eye.addEventListener('click', showHidePassword);
  return divElement;
};
