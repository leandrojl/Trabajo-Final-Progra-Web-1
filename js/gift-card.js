class GiftCard {
    constructor() {
      this.inputTitulo = '';
      this.inputFechaHora = '';
      this.inputColorLetra = '';
      this.inputTamanioLetra = '';
      this.inputFuente = '';
      this.inputMonto = '';
      this.inputColorFondo = '';
      this.tituloGiftCard = '';
      this.montoGiftCard = '';
    }
    obtenerDatos() {
      this.inputTitulo = document.getElementById('titulo').value;
      this.inputFechaHora = document.getElementById('fecha-hora').value;
      this.inputColorLetra = document.getElementById('color-letra').value;
      this.inputTamanioLetra = document.getElementById('tamanio-letra').value;
      this.inputFuente = document.getElementById('fuente').value;
      this.inputMonto = document.getElementById('monto').value;
      this.inputColorFondo = document.getElementById('color-fondo').value;
      this.tituloGiftCard = document.getElementById('titulo-gift-card').value;
      this.montoGiftCard = document.getElementById('monto-gift-card').value;
    }
    actualizarTitulo() {
      const tituloPrevisualizacion = document.querySelector('#titulo-gift-card');
      tituloPrevisualizacion.textContent = this.inputTitulo;
    }
    actualizarFechaYHora() {
        const fechaPrevisualizacion = document.querySelector('#fecha-hora-gift-card');
        fechaPrevisualizacion.textContent = this.inputFechaHora;
      }
    actualizarColorLetra() {
        const tituloPrevisualizacion = document.querySelector('#titulo-gift-card');
        const montoPrevisualizacion = document.querySelector('#monto-gift-card');
        const fechaPrevisualizacion = document.querySelector('#fecha-hora-gift-card');
        tituloPrevisualizacion.style.color = this.inputColorLetra;
        montoPrevisualizacion.style.color = this.inputColorLetra;
        fechaPrevisualizacion.style.color = this.inputColorLetra;
      }
    actualizarTamanioLetra() {
      const tituloPrevisualizacion = document.querySelector('#titulo-gift-card');
      const montoPrevisualizacion = document.querySelector('#monto-gift-card');
      const fechaPrevisualizacion = document.querySelector('#fecha-hora-gift-card');
      tituloPrevisualizacion.style.fontSize = this.inputTamanioLetra+ 'px';
      montoPrevisualizacion.style.fontSize = this.inputTamanioLetra+ 'px';
      fechaPrevisualizacion.style.fontSize = this.inputTamanioLetra+ 'px';
    }
    actualizarFuente() {
      const tituloPrevisualizacion = document.querySelector('#titulo-gift-card');
      const montoPrevisualizacion = document.querySelector('#monto-gift-card');
      const fechaPrevisualizacion = document.querySelector('#fecha-hora-gift-card');
      tituloPrevisualizacion.style.fontFamily = this.inputFuente;
      montoPrevisualizacion.style.fontFamily = this.inputFuente;
      fechaPrevisualizacion.style.fontFamily = this.inputFuente;
    }
    actualizarMonto() {
      const montoPrevisualizacion = document.querySelector('#monto-gift-card');
      montoPrevisualizacion.textContent = `$${this.inputMonto}`;
    }
    actualizarColorFondo() {
      const contenedorPrevisualizacion = document.querySelector('#contenedor-personalizado-id');
      contenedorPrevisualizacion.style.backgroundColor = this.inputColorFondo;
    }
  }
  const giftCard = new GiftCard();
  const tituloInput = document.getElementById('titulo');
  tituloInput.addEventListener('input', () => {
  giftCard.obtenerDatos();
  giftCard.actualizarTitulo();
});
const fechaHoraInput = document.getElementById('fecha-hora');
fechaHoraInput.addEventListener('change', () => {
  giftCard.obtenerDatos();
  giftCard.actualizarFechaYHora();
});
const colorLetra = document.getElementById('color-letra');
  colorLetra.addEventListener('input', () => {
  giftCard.obtenerDatos();
  giftCard.actualizarColorLetra();
});
const tamanioLetra = document.getElementById('tamanio-letra');
  tamanioLetra.addEventListener('input', () => {
  giftCard.obtenerDatos();
  giftCard.actualizarTamanioLetra();
});
const tipoFuente = document.getElementById('fuente');
  tipoFuente.addEventListener('change', () => {
  giftCard.obtenerDatos();
  giftCard.actualizarFuente();
});
const montoEnGiftCard = document.getElementById('monto');
  montoEnGiftCard.addEventListener('input', () => {
  giftCard.obtenerDatos();
  giftCard.actualizarMonto();
});
const colorFondo = document.getElementById('color-fondo');
  colorFondo.addEventListener('input', () => {
  giftCard.obtenerDatos();
  giftCard.actualizarColorFondo();
});
fetch('../json/cursos.json')
  .then(response => response.json())
  .then(data => {
    const cursos = data.cursos;
    const instrucciones = data.instrucciones;
    var inputBusqueda = document.getElementById("inputBusqueda");
    inputBusqueda.addEventListener("input", function() {
      var busqueda = inputBusqueda.value.trim(); 
      if (busqueda === "") {
        resultadoBusqueda.innerHTML = ""; 
      } else {
        buscarCursos(cursos, busqueda);
      }
    });
  })
  .catch(error => {
    console.log('Error:', error);
  });

var resultadoBusqueda = document.getElementById("resultadoBusqueda");
function buscarCursos(cursos, busqueda) {
  resultadoBusqueda.innerHTML = "";
  var cursosFiltrados = cursos.filter(function(curso) {
    return curso.titulo.toLowerCase().includes(busqueda.toLowerCase());
  });
  cursosFiltrados.forEach(function(curso) {
    var cursoDiv = document.createElement("div");
    cursoDiv.classList.add("curso"); 
    var imagenCurso = document.createElement("img");
    imagenCurso.src = curso.imagen;
    var nombreCurso = document.createElement("p");
    nombreCurso.textContent = curso.titulo;
    var button = document.createElement('button');
    button.textContent = 'Ver mas';
    button.className = 'estilo-boton-busqueda';
    button.addEventListener("click", function(){
        mostrarDetalleCurso(curso);
    })
    cursoDiv.appendChild(imagenCurso);
    cursoDiv.appendChild(nombreCurso);
    cursoDiv.appendChild(button);
    resultadoBusqueda.appendChild(cursoDiv);
  });
}
function mostrarDetalleCurso(curso) {
  const htmlDetalleCurso = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
      <link rel="stylesheet" href="css/estilos.css">
      <title>Detalle-Curso</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap" rel="stylesheet">
  </head>
  <body>
      <header>
          <nav>
              <img id="logo" src="img/logo-world.jfif" alt="logo">
              <form>
                  <input type="text" placeholder="Buscar...">
                  <button type="submit">Buscar</button>
              </form>
              <p>Carrito Compras: <span id="contador-cursos"></span></p>                
              <img id="carrito" src="img/carro-de-la-carretilla.png" alt="carrito">
              <ul>  
                  <li><a href="index.html">Inicio</a></li>
                  <li><a  href="calendario.html">Calendario</a></li>
                  <li><a  href="gift-card.html">Gift Card</a></li>
                  <li><a  href="contacto.html">Contacto</a></li>  
               </ul>   
          </nav> 
      </header>
      <main>
          <h1>Detalle de Curso</h1>
          <div id="modal" class="modal">
          <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Felicitaciones!</h2>
            <p>Te has inscrito en el evento:</p>
            <p id="eventoTitulo">Titulo: ${curso.titulo}</p>
            <p id="eventoPrecio">Precio: ${curso.precio}</p>
            <p id="eventoDuracion">${curso.duracion}</p>
          </div>
          </div>
          <section id="columna-detalle-curso">
              <article id="imagen-titulo-descripcion-curso">
                  <img src="${curso.imagen}" alt="image-del-curso">
                  <div class="contenido-titulo-curso-precio-tiempo-descripcion">
                      <h2>${curso.titulo}</h2>
                      <p>Precio: <span class="precio-curso">${curso.precio}</span> </p>
                      <p>Tiempo de dedicacion necesario: <span class="precio-curso">${curso.duracion}</span> </p>
                      <p>Descripcion del curso:</p>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim at dolor, 
                              cumque corrupti id libero repellat natus consectetur ducimus, 
                              tenetur iste velit in unde? Doloribus et minus nemo sint tempora!</p>
                              <p>Requisitos previos: <span class="precio-curso">Ninguno</span></p>
                      <button id="botonInscribirCurso" class="estilo-boton">Inscribirse</button>
                  </div>
                  </article>
                  <div class="contenido-curso-unidades">
                      <h4>Contenido por clase:</h4>
                  <ul>
                      <li>
                          <h3>INTRODUCCION:</h3>
                          <p>Video 1</p>
                          <p>Duracion:</p>
                          <p>Video 2</p>
                          <p>Duracion:</p>
                          <p>Examen:</p>
                          <p>Duracion:</p>
                      </li>
                      <li>
                          <h3>UNIDAD 1:</h3>
                          <p>Video 1</p>
                          <p>Duracion:</p>
                          <p>Video 2</p>
                          <p>Duracion:</p>
                          <p>Examen:</p>
                          <p>Duracion:</p>
                      </li>
                      <li>
                          <h3>UNIDAD 2:</h3>
                          <p>Video 1</p>
                          <p>Duracion:</p>
                          <p>Video 2</p>
                          <p>Duracion:</p>
                          <p>Examen:</p>
                          <p>Duracion:</p>
                      </li>
                  </div>
                  </ul>
                  <div class="docente-curso-descripcion">
                      <h3>Docente del curso:</h3>
                      <img src="${curso.docente.imagen}" alt="imagen-docente">
                      <div class="datos-docente">
                          <p>Nombre: ${curso.docente.nombre}</p>
                          <p>Apellido: ${curso.docente.apellido}</p>
                          <p>Valoracion: ${curso.docente.valoracion}</p>
                          <p>Extracto:</p>
                          <p>${curso.docente.extracto}</p>
                      </div>  
                  </div>    
              
          </section>
          <aside>
              <article class="contenido-cursos-destacados">
                  <h2>Cursos destacados:</h2>
              <ul id="contenedor-cursos-destacados">
                </ul>
              </article>
          </aside>   
      </main>
          <footer>
              <ul>
                  <li><p>Leandro Javier Loureiro</p></li>
                  <li><p>Santiago Ruiz Lenz</p></li>
                  
                  <p>&copy; LSJ. Todos los derechos reservados.</p>
              </ul>
              <ul>
                 <li><a href="index.html">Inicio</a></li>
                 <li><a href="calendario.html">Calendario</a></li>
                 <li><a href="gift-card.html">Gift Card</a></li>
                 <li><a href="contacto.html">Contacto</a></li> 
              </ul>
              <ul>
                  <li><a target="_blank" href="www.facebook.com">Facebook</a></li>
                  <li><a target="_blank" href="www.instagram.com">Instagram</a></li>
                  <li><a target="_blank" href="www.youtube.com">Youtube</a></li>
              </ul>
          </footer>
          <script src="js/detalle-curso.js"></script>
         </body>
  </html>
  `;
  const nuevaVentana = window.open("URL_DE_DESTINO", "_blank");
  nuevaVentana.document.write(htmlDetalleCurso);
  nuevaVentana.document.close();
}
const contador = document.getElementById('contador-cursos');
function cargarContadorDeCursos(){
    if (sessionStorage.getItem('contadorCursos')) {
    contador.textContent = sessionStorage.getItem('contadorCursos');
  } else {
    contador.textContent = '0';
  }
}
const contadorCursosInscripcion = document.getElementById('contador-cursos-inscripcion');
function cargarContadorDeCursosInscriptos(){  
    if (sessionStorage.getItem('contadorCursosInscripcion')) {
    contadorCursosInscripcion.textContent = sessionStorage.getItem('contadorCursosInscripcion');
  } else {
    contadorCursosInscripcion.textContent = '0';
  }
}
window.addEventListener("load", (event) => {
  cargarContadorDeCursosInscriptos();
  cargarContadorDeCursos();
});

var posicionRadioInputs = document.getElementsByName('opciones');
var palabraParaModificar = document.querySelector('.contenedor-personalizado-centro');
for (var i = 0; i < posicionRadioInputs.length; i++) {
    posicionRadioInputs[i].addEventListener('change', function() {
    
    
    var posicionSeleccionada = this.value;
    palabraParaModificar.className = "contenedor-personalizado-"+ posicionSeleccionada;
  

    
    
    });
}