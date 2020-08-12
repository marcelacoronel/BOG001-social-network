import { createUsers } from '../components/auth.js';

export default () => {
  const view = `
        
        <div class="container-form">
            <div class=logo_singup>
                <img src="./img/logo_signup.svg" alt="logo_singup">
            </div>
            <div class="form-Singup">
                <h2>Registrate</h2>
                <form action="#" class="form-SU-Desktop-tablet">
                    <label for="Nombre">NOMBRE</label>
                    <input class="nombre" type="text" placeholder="pepito perez" required>
                    <label for="">EMAIL</label>
                    <input class="email" type="email" placeholder="pepitoperez@hotmail.com" required>
                    <label for="">CONTRASEÑA</label>
                    <i id="eye" class="far fa-eye"></i><input class="password" type="password" placeholder="***********" required>
                    
                    <input class ="btn" type="submit" value="SIGN IN">
                    <span>
                    <p>Ya tienes cuenta? <a href="#/login">Log in</a> </p>
                    </span>
                </form>
                <form action="#" class="form-SU-movil">
                    <input class="nombre" type="text" placeholder="Nombre" required>
                    <input class="email" type="email" placeholder="Email" required>
                    <input class="password" type="password" placeholder="Contraseña" required>
                    <input class ="btn" type="submit" value="SIGN IN">
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
  const nav = document.getElementById('headerNav');
  nav.style.display = 'none';
  const divElement = document.createElement('div');

  divElement.classList = 'SingUp-Container';

  divElement.innerHTML = view;

  document.getElementById('headerNav').style.display = 'none';

  const boton = divElement.querySelector('.btn');
  boton.addEventListener('click', createNewUsers);

  //   boton.addEventListener("click", create);
  //   function create(){
  //       alert("hii")
  //   }

  //    function prueba(){
  //     let nombre = document.getElementById('nombre').value
  //     let email = document.getElementById('email').value
  //     let password = document.getElementById('password').value
  //     const signIn = createUser(email,password)
  //    }

  //    boton.addEventListener('click', async (e) => {
  //     e.preventDefault()
  //     let nombre = document.getElementById('nombre').value
  //     let email = document.getElementById('email').value
  //     let password = document.getElementById('password').value
  //     const signIn = await createUser(email,password)
  // //     auth.createUserWithEmailAndPassword(email, password)
  // // .then(function(){

  // // console.log('verificado')
  // // })
  // // .catch(function(error) {
  // //     // Handle Errors here.
  // //     var errorCode = error.code;
  // //     var errorMessage = error.message;
  // //     // ...
  // //   });

  // });

  function createNewUsers() {
    alert('click');
    const name = document.querySelector('.nombre').value;
    const email = document.querySelector('.email').value;
    const password = document.querySelector('.password').value;

    console.log(name + email + password);
    // la llamamos para pasarle los parametros y usarla
    createUsers(email, password);
  }

  const eye = divElement.querySelector('#eye');

  eye.addEventListener('click', () => {
    const x = document.querySelector('.password');
    x.type === 'password' ? (x.type = 'text') : (x.type = 'password');
  });

  return divElement;
};
