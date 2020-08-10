<<<<<<< HEAD

export default () => {

    const view =`
        <div class="imgSignInMobile">
            <img src="img/LogIn-mobile.jpg" alt="">
        </div>
        
                <div class="containerImgTitle">
            <div class="titleSite">
                <img src="img/logo-BluePink.png" alt="">
            </div>
            <div class="imgSignInDesktop">
                <img src="img/LogIn-desktop.svg" alt="">
            </div>
        </div>
        
        <div class="containerForms">
            <h2>Bienvenido</h2>
            <div class="form">
                
                <form action="#" class="inputsForm">
                    <Label>Usuario<br />
                        <input class="inputForm" type="text" placeholder="Usuario" required>
                    </Label><br />
                    <Label>Password<br />
                        <input class="inputForm" type="password" placeholder="Contraseña" required>
                    </Label><br />
                    <input class="btnForm" type="submit" onclick="IniciarSesión()" value="Sign In">
                    
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
`;
const nav= document.getElementById("headerNav")
nav.style.display="none";
   const divElement = document.createElement(`div`);
   divElement.classList = 'containerView'
   divElement.innerHTML =view;

=======
//import {createUserEmailAndPassword} from "./components/auth"
export default () => {
    const view = `
          <div class="imgSignInMobile">
              <img src="img/LogIn-mobile.jpg" alt="">
          </div>
          
          <div class="containerImgTitle">
              <div class="titleSite">
                  <img src="img/logo-BluePink.png" alt="">
              </div>
              <div class="imgSignInDesktop">
                  <img src="img/LogIn-desktop.svg" alt="">
              </div>
          </div>
          
          <div class="containerForms">
              <h2>Bienvenido</h2>
              <div class="form">
                  
                  <form action="#" class="inputsForm">
                      <Label>Usuario<br />
                          <input id="email"class="inputForm" type="text" placeholder="Usuario" required>
                      </Label><br />
                      <Label>Password<br />
                          <input id ="password" class="inputForm" type="password" placeholder="Contraseña" required>
                      
                      </Label><br />
                      <button id="btn" class="btnForm" >Sign In</button> 
                      
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
  `;
    const nav = document.getElementById("headerNav");
    nav.style.display = "none";
    const divElement = document.createElement(`div`);
    divElement.classList = "containerView";
    divElement.innerHTML = view;
    const form = document.querySelector(".inputsForm");
    const boton = divElement.querySelector("#btn");
    boton.addEventListener("click", userLogIn);
  
    function userLogIn() {
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;
  
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
        
          window.location.hash = "#/dashboard";
            alert("bienvenido");
        })
        .catch((error) => {
          alert("no estas registrado");
        });
    }
  
    
  
>>>>>>> d344146f67e2f4961fd0b3f589c842ac91214a39
    return divElement;
  };