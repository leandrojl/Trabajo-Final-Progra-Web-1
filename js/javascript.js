//INDEX.HTML JAVASCRIPT
//LOGICA CONTADOR DE CURSOS OBTENIDOS EN EL NAV
const contadorCursosObtenidos = document.getElementById('contadorCursosObtenidos');
const botonComprarCurso = document.getElementById('botonComprarCurso');
let contadorCursosComprados = sessionStorage.getItem('contadorCursosComprados');

if (!contadorCursosComprados) {
    contadorCursosComprados = 0;
}
contadorCursosObtenidos.textContent = contadorCursosComprados;

botonComprarCurso.addEventListener('click', function() {
    contadorCursosComprados++;
    contadorCursosObtenidos.textContent = contadorCursosComprados;
    sessionStorage.setItem('contadorCursosComprados', contadorCursosComprados);
  });

