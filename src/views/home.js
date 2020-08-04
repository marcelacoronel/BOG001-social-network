export default () => {
    const view = `
        <h1> Hello World </h1>
        <p> with js routers </p>
    `;

   const divElement = document.createElement(`div`);
   divElement.innerHTML =view;

    return divElement;
}