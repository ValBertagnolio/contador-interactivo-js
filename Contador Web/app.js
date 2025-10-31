const contadorElemento = document.getElementById('valorContador');
const botonIncrementar = document.getElementById('botonIncrementar')
let contador = 0;

/**
 * Función que actualiza el contenido del <span> en el HTML
 * con el valor actual de la variable 'contador'.
 */
function actualizarValorEnPantalla() {
    // Tomamos la referencia del <span> (contadorElemento)
    // y cambiamos su texto interno por el valor de nuestra variable (contador).
    contadorElemento.textContent = contador;
}

/**
 * Función que se ejecuta cada vez que se hace clic en el botón.
 */
function manejarClickIncrementar() {
    // 1. Sumar 1 al contador (actualizando la variable 'let contador')
    contador = contador + 1; // O de forma abreviada: contador++;

    // 2. Llamar a la función para reflejar el nuevo valor en el HTML
    actualizarValorEnPantalla();
}

// 3. Asociar el evento click del botón al manejador (LA CONEXIÓN)
// Le decimos al navegador: "Al botón, añádele un 'escuchador' de eventos"
botonIncrementar.addEventListener('click', manejarClickIncrementar);

// Opcional: Llamamos a la función de actualización para asegurar que el '0' inicial 
// en pantalla coincida con el '0' de nuestra variable 'contador'.
actualizarValorEnPantalla();

