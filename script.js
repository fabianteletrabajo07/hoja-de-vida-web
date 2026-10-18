const tituloNombre = document.getElementById("nombre");

const nombreOriginal = "Fabian Eduardo Mejia Amaya";
const nombreProfesional = "Fabian Mejia | Desarrollador JS";

tituloNombre.addEventListener("click", () => {
    if(tituloNombre.textContent === nombreOriginal) {
        tituloNombre.textContent = nombreProfesional;
        tituloNombre.style.color = "#007acc";
    } else{
        tituloNombre.textContent = nombreOriginal;
        tituloNombre.style.color = ""
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const btnDesplegar = document.querySelector('.btn-desplegar');
    const contenido = document.querySelector('.contenido-desplegable');

    if (btnDesplegar && contenido) {
        btnDesplegar.addEventListener('click', () => {
            contenido.classList.toggle('activo');
        });
    }
});