fetch('../json/cursos.json')
  .then(response => response.json())
  .then(data => {
    const cursos = data.cursos;
    const instrucciones = data.instrucciones;
    
    mostrarCursos(cursos);
    mostrarInstrucciones(instrucciones);
  })
  .catch(error => {
    console.log('Error:', error);
  });

function mostrarInstrucciones(instrucciones){
    const contenedorInstrucciones = document.getElementById("contenedor-instrucciones-ol");

    instrucciones.forEach(instruccion =>{
        const li = document.createElement('li');
        li.className = 'box-instrucciones';
        const p = document.createElement('p');
        p.className = 'box-instrucciones-texto';
        p.textContent = instruccion.descripcion;

        contenedorInstrucciones.appendChild(li);
        li.appendChild(p);
    })
}

function mostrarCursos(cursos) {
  const cursosContainer = document.getElementById('contenedor-cursos-destacados');

  cursos.forEach(curso => {
    const a = document.createElement('a');
    a.href = 'detalle-curso.html';
    a.target = '_blank';
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

    a.appendChild(imagen);
    imagenContainer.appendChild(a);
    li.appendChild(imagenContainer);
    li.appendChild(h3);
    li.appendChild(duracion);
    li.appendChild(precio);
    cursosContainer.appendChild(li);
  });
}

function mostrarDetalleCurso() {
    const cursoDetalleContainer = document.getElementById('curso-detalle-container');
    
    // Aquí puedes generar dinámicamente el contenido HTML para la página del curso
    const contenidoCursoDetalle = `
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
            <section id="columna-detalle-curso">
                <article id="imagen-titulo-descripcion-curso">
                    <img src="img/clase-js.png" alt="image-del-curso">
                    <div class="contenido-titulo-curso-precio-tiempo-descripcion">
                        <h2>Javascript Fundamentals</h2>
                        <p>Precio: <span class="precio-curso">US$30</span> </p>
                        <p>Tiempo de dedicacion necesario: <span class="precio-curso">40hs</span> </p>
                        <p>Descripcion del curso:</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim at dolor, 
                                cumque corrupti id libero repellat natus consectetur ducimus, 
                                tenetur iste velit in unde? Doloribus et minus nemo sint tempora!</p>
                                <p>Requisitos previos: <span class="precio-curso">Ninguno</span></p>
                        <button id="botonInscribirCurso"><a href="#">Inscribirse</a></button>
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
                        <img src="img/contact-photo.jpg" alt="imagen-docente">
                        <div class="datos-docente">
                            <p>Nombre: Humberto</p>
                            <p>Apellido: Flores</p>
                            <p>Valoracion: 100%</p>
                            <p>Extracto:</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Explicabo consectetur placeat doloremque assumenda optio veniam sunt? Nobis, 
                                odit expedita architecto atque vitae molestias rerum, 
                                ex perferendis maiores itaque in laboriosam?</p>
                        </div>  
                    </div>    
                </article>
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
                    <li><p>Jeremias Medina</p></li>
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
    
    // Asigna el contenido generado al contenedor
    cursoDetalleContainer.innerHTML = contenidoCursoDetalle;
  }
