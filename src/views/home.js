export default () => {
    const view = `

      
       <img id ="logo-home" src="/src/img/logo-BluePink.png" alt="logo">
       
       <div class="homeContainer-desktop">
        <img id ="main-img" src="/src/img/doggie.gif" alt="dog-friend">
        </div>

        <div class="homeContainer-mobile">   
        <button class="appStartbtn btn"><a href="#/login">Ingresar</a></button>
         <img id="mobileMain-img" src= "/src/img/Home-mobile.svg">
         </div> `;

    const nav = document.getElementById("headerNav")
    nav.style.display = "block";

    const divElement = document.createElement(`div`);
    divElement.innerHTML = view;

    return divElement;
}