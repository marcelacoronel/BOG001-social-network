export default () => {
    const view = `
          <div>   
   <h2>hola bienvenido</h2>
   <button id="signOff">Cerrar sesion</button>
           </div> `;
  
    const nav = document.getElementById("headerNav");
    nav.style.display = "block";
  
    const divElement = document.createElement(`div`);
    divElement.innerHTML = view;
  
    const btnSingOff = divElement.querySelector("#signOff");
    btnSingOff.addEventListener("click", userSignOff);
  
    function userSignOff() {
      firebase
        .auth()
        .signOut()
        .then(function () {
          console.log("salir");
          window.location.hash = "";
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  
    return divElement;
  };