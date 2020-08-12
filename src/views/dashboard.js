export default () => {
  const view = `
   <div>   
       <h2>hola bienvenido</h2>
       <button id="signOff">Cerrar sesion</button>
   </div> 
   `;
  const nav = document.getElementById('headerNav');
  nav.style.display = 'block';
  const divElement = document.createElement('div');
  divElement.innerHTML = view;

  return divElement;
};
