import { userSignOff } from '../components/auth.js';

export default () => {
  const view = `
  <header>
  <div id="infoUser">
  <img src="" alt=""photoUser>
  <h3 id="nombre"></h3>
  <h4 id="ciudad"></h4>
  </div>
         <div id="navBtn">   
  <button id="signOff">Cerrar sesion</button>
        
  </div> 
  </header>
`;

  // Variables
  const nav = document.getElementById('headerNav');
  nav.style.display = 'none';

  const divElement = document.createElement('div');
  divElement.innerHTML = view;

  const nombre = divElement.querySelector('#nombre');
  const ciudad = divElement.querySelector('#ciudad');
  const btnSingOff = divElement.querySelector('#signOff');

  // Funciones
  btnSingOff.addEventListener('click', (e) => {
    e.preventDefault();
    // Cerrar sesion
    userSignOff();
  });

  firebase
    .firestore()
    .collection('userData')
    .get()
    .then((snapshot) => {
      const data = snapshot.docs;
      data.forEach((doc) => {
        const gui = doc.data();
        nombre.innerHTML = gui.Name;
        ciudad.innerHTML = gui.City;
        // console.log(gui);
      });
    });

  return divElement;
};
