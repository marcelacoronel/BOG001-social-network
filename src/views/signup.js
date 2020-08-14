import { createUsers } from '../components/auth.js';

export default () => {
  const view = `
        
        <div class="container-form">
            <div class=logo_singup>
                <img src="./img/logo_signup.svg" alt="logo_singup">
            </div>
            <div class="form-Singup" >
                <h2>Registrate</h2>
                <form action="" class="form-SU-Desktop-tablet" id="form">
                    <label for="nameSignUp">NOMBRE
                    <input class="nameSignUp" type="text" placeholder="pepito perez" required>
                    </label>
                    <label for="emailSignUp">EMAIL
                    <input class="emailSignUp"  type="email" placeholder="pepitoperez@hotmail.com" required>
                    </label>
                    <label for="passSignUp">CONTRASEÑA
                    <input class="passSignUp" type="password" placeholder="***********" pattern=".{8,}" required>
                    <i class="far fa-eye eye"></i>
                    </label>
                    <input class="btn" type="submit" value="SING IN">
                  </form>
                                  
                <form action="" class="form-SU-movil" id="form">
                    <input class="nameSignUp" type="text" placeholder="Nombre" required>
                    <input class="emailSignUp" type="email" placeholder="Email" required>
                    <input class="passSignUp" type="password" placeholder="Contraseña" pattern=".{8,}" required>
                    <i class="far fa-eye eye"></i>
                    <input type="submit" class="btn" value="SING IN">
                </form>
                <span>
                  <p>Ya tienes cuenta? <a href="#/login">Log in</a></p>
                </span>
            </div>
        </div>

        <div class=bg-singup>
            <img class="desktop-SU" img src="./img/SingUp-desktop.svg" alt="bg_singup">
            <img class="tablet-SU" img src="./img/SingUp-tablet.png" alt="bg_singup">
            <img class="mobile-SU" img src="./img/SingUp-mobile.png" alt="bg_singup">
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
  divElement.classList = 'SingUp-Container';
  divElement.innerHTML = view;
  const boton = divElement.querySelector('.btn');
  const eye = divElement.querySelectorAll('.eye');
  nav.style.display = 'none';

  // Funciones
  // Funcion registro del usuario
  function createNewUsers() {
    const name = document.querySelector('.nameSignUp').value;
    const email = document.querySelector('.emailSignUp').value;
    const password = document.querySelector('.passSignUp').value;

    // console.log(name + email + password);
    // la llamamos para pasarle los parametros y usarla
    createUsers(email, password);
  }

  // Funcion mostrar y ocultar contraseña
  function showHidePassword() {
    const x = document.querySelector('.passSignUp');
    if (x.type === 'password') {
      x.type = 'text';
    } else {
      x.type = 'password';
    }
  }

  // Listener
  for (let i = 0; i < eye.length; i++) {
    eye[i].addEventListener('click', showHidePassword);
  }
  boton.addEventListener('click', createNewUsers);

  return divElement;
};
