fetch('../json/cursos.json')
  .then(response => response.json())
  .then(data => {
    const cursos = data.cursos;
  
    
    mostrarCursos(cursos);
  })
  .catch(error => {
    console.log('Error:', error);
  });

function mostrarCursos(cursos) {
  const cursosContainer = document.getElementById('contenedor-cursos-destacados');

  cursos.forEach(curso => {
    const li = document.createElement('li');
    li.className = 'tarjeta-curso';
    const imagenContainer = document.createElement('div');
    imagenContainer.className = 'imagen-container';
    const imagen = document.createElement('img');
    imagen.src = curso.imagen;
    imagen.alt = curso.titulo;
    const h3 = document.createElement('h3');
    h3.textContent = curso.titulo;
    const duracion = document.createElement('p');
    duracion.textContent = curso.duracion;
    const precio = document.createElement('p');
    precio.className = 'precio-curso';
    precio.textContent = curso.precio;
    const button = document.createElement('button');
    button.textContent = 'Ver mas';
    button.className = 'estilo-boton';
    button.addEventListener("click", function(){
        mostrarDetalleCurso(curso, curso.id);
    })
    const buttonComprar = document.createElement('button');
    buttonComprar.textContent = 'Comprar';
    buttonComprar.className = 'estilo-boton';
    buttonComprar.addEventListener('click', function(){
        comprarCurso(curso)
    })

    imagenContainer.appendChild(imagen);
    li.appendChild(imagenContainer);
    li.appendChild(h3);
    li.appendChild(duracion);
    li.appendChild(precio);
    li.appendChild(buttonComprar);
    li.appendChild(button);
    cursosContainer.appendChild(li);
    
  });
}

function mostrarDetalleCurso(curso, curso_id) {

    
    // Aquí puedes generar dinámicamente el contenido HTML para la página del curso
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
                        <button id="botonInscribirCurso" class="estilo-boton"><a href="#">Inscribirse</a></button>
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
    
    // Abre una nueva ventana o pestaña y carga el HTML
    const nuevaVentana = window.open("URL_DE_DESTINO", "_blank");
    nuevaVentana.document.write(htmlDetalleCurso);
    nuevaVentana.document.close();
  }

//LOGICA DEL MODAL
const btnInscribirse = document.getElementById('botonInscribirCurso');
const modal = document.getElementById('modal');
const spanClose = document.getElementsByClassName('close')[0];
const eventoTitulo = document.getElementById('eventoTitulo');
const eventoPrecio = document.getElementById('eventoPrecio');
const eventoDuracion = document.getElementById('eventoDuracion');


function mostrarModal() {
  modal.style.display = 'block';
}

function cerrarModal() {
  modal.style.display = 'none';
}

btnInscribirse.addEventListener('click', function() {
  mostrarModal();
});

spanClose.addEventListener('click', cerrarModal);

const contador = document.getElementById('contador-cursos');

function cargarContadorDeCursos(){
    
    if (sessionStorage.getItem('contadorCursos')) {
    // Obtener el valor almacenado en el sessionStorage
    contador.textContent = sessionStorage.getItem('contadorCursos');
  } else {
    // Si no hay un contador almacenado, iniciar en 0
    contador.textContent = '0';
  }
}
window.onload =  cargarContadorDeCursos;


function comprarCurso(curso){

    let valorActual = parseInt(contador.textContent);

  // Incrementar el valor del contador
  valorActual++;

  // Actualizar el contador en la página
  contador.textContent = valorActual;

  // Almacenar el valor actualizado en el sessionStorage
  sessionStorage.setItem('contadorCursos', valorActual);

}
