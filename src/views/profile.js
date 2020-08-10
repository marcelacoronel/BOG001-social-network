export default () => {
    const view = `
        <div>   
   <h2>Crea tu perfil </h2>
   <div>
   <form>
   <label for="petName">Nombre
   <input id="petName" type="text">
  </label>
  <label for="petBreed">Raza
   <input id="petBredd" type="text">
  </label>
   <input id="newProfile" type="submit" value="Crear perfil" >
   </form>
   </div> `;
  
    const nav = document.getElementById("headerNav");
    nav.style.display = "none";
  
    const divElement = document.createElement(`div`);
    divElement.innerHTML = view;
  
    const buttonProfile = divElement.querySelector("#newProfile")
    buttonProfile.addEventListener("click",createNewProfileUser)
  
    function createNewProfileUser(){
      window.location.hash = "#/dashboard";
    }
  
    return divElement;
  };