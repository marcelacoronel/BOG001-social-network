export default () => {
    const view = `
      
       <img id ="logo-home" src="/src/img/logo-BluePink.png" alt="logo">
       
       <div class="homeContainer-desktop">
        <img id ="main-img" src="/src/img/doggie.gif" alt="dog-friend">
        </div>

        <div class="homeContainer-mobile">   
        <button class="appStartbtn btn"><a href="#/login">Ingresar</a></button>
         <img id="mobileMain-img" src= "/src/img/Home-mobile.svg">
         </div>

      
    `;

    // function clickFun() {
    //     window.location = '#/login';
    // }

    const nav = document.getElementById("header-nav")
    nav.style.display = "block";

    const divElement = document.createElement(`div`);
    divElement.innerHTML = view;




    return divElement;
}
//  <div class="mobile" style="display:none;"></div>
//         <button id="appStartbtn btn">Ingresar</button>
//         <img id="foto3" src= "/src/img/Home-mobile.svg">
//          </div>

// export default () => {
// const view = () => {

//     `
//    <div class="home">
//     <img id ="foto2" src="/src/img/Home1-desktop.svg">
//     </div>
//     <div class="mobile"></div>
//     <button id="startApp">Ingresar</button>
//     <img id="foto3" src= "/src/img/Home-mobile.svg">
//      </div>
// `
// const divElement = document.createElement(`div`);
// divElement.innerHTML =view;
//  return divElement;

//     }
//     const viewMobile = () => {

//         `
//         <div class="mobile"></div>
//         <button id="startApp">Ingresar</button>
//         <img id="foto3" src= "/src/img/Home-mobile.svg">
//          </div>
//     `
//     const divElement = document.createElement(`div`);
//     divElement.innerHTML =viewMobile;
//      return divElement;

//         }
//     }