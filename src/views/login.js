

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

   const divElement = document.createElement(`div`);
   divElement.classList = 'containerView'
   divElement.innerHTML =view;

    return divElement;
}