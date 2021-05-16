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
}

function mostrarMensaje(msj){
    const alertaHtml = document.createElement('p');
    alertaHtml.className = 'bg-red-100 border-red-400 text-red-700 px-4 py-3 rounded max-w-lg mx-auto mt-6 text-center';
    alertaHtml.textContent = msj;
    resultado.appendChild(alertaHtml);
}

//inicio
document.addEventListener('DOMContentLoaded', _ => {
    formulario.addEventListener('submit', iniciarBusqueda);
});