export default () => {
    const view = `
        <h1> Soul Mates </h1>
        <div class="imgHome">
        <img src="img/Home-mobile.svg" alt="">
        </div>
    `;

   const divElement = document.createElement(`div`);
   divElement.innerHTML =view;

    return divElement;
}