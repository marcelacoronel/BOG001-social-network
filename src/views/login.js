

export default () => {

    const view =`

        <div class="toggle">
            <a class="cuenta" href="cuenta.html">Crear Cuenta</a>
        </div>
        <div class="formulario">
            <h2>Iniciar Sesión</h2>
            <form action="#">
                <input type="text" placeholder="usuario" required>
                <input type="password" placeholder="contraseña" required>
                <input type="submit" onclick="IniciarSesión()" value="Ingresar">
            </form>
        </div>
      
        <div class="resset">
            <a href="">Olvide mi contraseña?</a>
        </div>
`;
const nav= document.getElementById("headerNav")
nav.style.display="none";
   const divElement = document.createElement(`div`);
   divElement.classList = 'contenedor'
   divElement.innerHTML =view;

    return divElement;
}