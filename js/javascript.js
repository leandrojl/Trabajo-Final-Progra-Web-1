//INDEX.HTML JAVASCRIPT

//LOGICA CONTADOR DE CURSOS OBTENIDOS EN EL NAV
const contadorCursosObtenidos = document.getElementById('contadorCursosObtenidos');
const botonComprarCurso = document.getElementById('botonComprarCurso');

// Verificar si ya existe un valor almacenado en sessionStorage
let contador = sessionStorage.getItem('contador');

// Si no hay un valor almacenado, establecer el contador en 0
if (!contador) {
  contador = 0;
}
contadorCursosObtenidos.textContent = contador;

// Agregar un evento de clic al botón "Comprar"
botonComprarCurso.addEventListener('click', function() {
    // Incrementar el contador
    contador++;
    
    // Actualizar el valor del contador en el elemento y en sessionStorage
    contadorCursosObtenidos.textContent = contador;
    sessionStorage.setItem('contador', contador);
  });

