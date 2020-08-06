
export default () => {

    const view =`

        <div class="toggle">
            <a class="cuenta" href="cuenta.html">Crear Cuenta</a>
        </div>
        <div class="formulario">
            <h2>Iniciar Sesión</h2>
            <form action="#">
                <input id="email" type="email" placeholder="usuario" required>
                <input id ="password" type="password" placeholder="contraseña" required>
                <button id ="btn">Ingresar</button>
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