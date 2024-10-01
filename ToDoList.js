let creacion = document.getElementById('tarea');
let botonAfegir = document.getElementById('afegir');
let listar = document.getElementById('llistaTasques');

botonAfegir.addEventListener("click", function() {
    let escribir = document.createElement('li');
    escribir.textContent = creacion.value; 

    let botonBorrar = document.createElement('button');
    botonBorrar.textContent = 'Eliminar';

    botonBorrar.addEventListener('click', function() {
        listar.removeChild(escribir);
    });
    
    escribir.appendChild(botonBorrar);
    listar.appendChild(escribir);
    
});