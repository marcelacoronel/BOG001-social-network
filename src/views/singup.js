

export default () => {

    const view =`

        <div class="formulario">
            <h2>Crea tu cuenta</h2>
            <form action="#">
                <input type="text" placeholder="usuario" required>
                <input type="password" placeholder="contraseña" required>
                <input type="email" placeholder="correo electrónico" required>
                <input type="text" placeholder="telefóno" required>
                <input type="submit" onclick="Registrarse()" value="Registrarse">
            </form>
        </div>
        <div class="resset">
            <a href="">Olvide mi contraseña?</a>
        </div>
`;

   const divElement = document.createElement(`div`);
   divElement.classList = 'contenedor'
   divElement.innerHTML =view;

    return divElement;
}