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

    imagenContainer.appendChild(imagen);
    li.appendChild(imagenContainer);
    li.appendChild(h3);
    li.appendChild(duracion);
    li.appendChild(precio);
    cursosContainer.appendChild(li);
  });
}
