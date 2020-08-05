

export default () => {

    const view =`
        
        <div class="conteiner-form">
            <div class=logo_singup>
                <img img src="./img/logo_signup.svg" alt="logo_singup">
            </div>
            <div class="form-Singup">
                <h2>REGISTRATE</h2>
                <form action="#">
                    <label for="Nombre">NOMBRE</label>
                    <input id="Nombre" type="text" placeholder="pepito perez" required>
                    <label for="">EMAIL</label>
                    <input type="password" placeholder="pepitoperez@hotmail.com" required>
                    <label for="">CONTRASEÑA</label>
                    <input type="email" placeholder="***********" required>
                    <input type="submit" onclick="Registrarse()" value="SING IN">
                </form>
            </div>
        </div>

        <div class=bg-singup>
            <img img src="./img/SingUp-desktop.svg" alt="bg_singup">
        </div>
`;

   const divElement = document.createElement(`div`);
   divElement.classList = 'SingUp-Conteiner'
   divElement.innerHTML =view;

   document.getElementById("headerNav").style.display="none";

    return divElement;
}