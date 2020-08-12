
export default () => {
  const view = `
        
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
                <img src="./img/giro@2x.png" alt=""></br>
                <center>¡Gira tu dispositivo!</center></br>
                <span><center>¡Please!</center></span>
            </div>
        </div>
`;
  const nav = document.getElementById('headerNav');
  nav.style.display = 'none';

  const divElement = document.createElement('div');
  divElement.classList = 'SingUp-Container';

  divElement.innerHTML = view;

  return divElement;
};
