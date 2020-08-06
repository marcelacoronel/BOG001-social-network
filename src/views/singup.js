

export default () => {

    const view =`

        <div class="form">
            <h2>Registrate</h2>
            <form action="#" class="inputsForm">
                <input class="inputForm" type="text" placeholder="Usuario" required>
                <input class="inputForm" type="password" placeholder="Contraseña" required>
                <input class="inputForm" type="email" placeholder="Correo electrónico" required>
                <input class="inputForm" type="text" placeholder="Telefóno" required>
                <input class="btnForm" type="submit" onclick="Registrarse()" value="Sign Up">
            </form>
        </div>
        <div class="reset">
            <a href="#/login">Ya tienes cuenta?</a>
        </div>

        <div class="imgSignUp">
        <img src="img/SingUp-mobile.jpg" alt="">
        </div>
`;

   const divElement = document.createElement(`div`);
   divElement.classList = 'containerView'
   divElement.innerHTML =view;

    return divElement;
}