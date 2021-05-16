//variables
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

//funciones
function iniciarBusqueda(e) {
    e.preventDefault();
    const termino = document.querySelector('#termino').value;
    if(!termino){
        mostrarMensaje('Por favor digite un término de búsqueda');
        return;
    }

    //consultar API
    buscarImagenes(termino);
}

function buscarImagenes(termino){
    const key = '21610553-9f6f08ebc7ba0f2edf70ed443';
    const url = `https://pixabay.com/api/?key=${key}&q=${termino}&per_page=20`;

    fetch(url)
        .then(response => response.json())
        .then(data => mostrarImagenes(data.hits));
}

function mostrarImagenes(imagenes){

    limpiarHtml();

    //iterar sobre el arreglo de imagenes
    imagenes.forEach(imagen => {
        const { largeImageURL, webformatURL, likes, views} = imagen;
        resultado.innerHTML += `
            <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
                <div class="bg-white">
                    <img class="w-full" src="${webformatURL}">
                    <div class="p-4">
                        <p class="font-bold">${likes} <span class="font-light">Likes</span></p>
                        <p class="font-bold">${views} <span class="font-light">Vistas</span></p>
                        <a  class="block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-1" href="${largeImageURL}" target="_blank" rel="noopener noreferer">Ver Imagen</a>
                    </div>
                </div>
            </div>
        `; 
    });
}

function limpiarHtml(){
    while(resultado.firstChild){
        resultado.firstChild.remove();
    }
}

function mostrarMensaje(msj){

    limpiarHtml();

    // const existeAlerta = document.querySelector('.bg-red-100');

    const alertaHtml = document.createElement('p');
    alertaHtml.className = 'bg-red-100 border-red-400 text-red-700 px-4 py-3 rounded max-w-lg mx-auto mt-6 text-center';
    alertaHtml.innerHTML = `
        <strong class="font-bold">Error!</strong>
        <span class="block sm:inlene">${msj}</span>
    `;
    resultado.appendChild(alertaHtml);

    setTimeout(() => {
        alertaHtml.remove();
    }, 3000);

}

//inicio
document.addEventListener('DOMContentLoaded', _ => {
    formulario.addEventListener('submit', iniciarBusqueda);
});