class FormularioContacto {
    constructor() {
      this.nombre = '';
      this.apellido = '';
      this.email = '';
      this.telefono = '';
      this.consulta = '';
      this.mensajeError = '';
    }
  
    obtenerDatos() {
      this.nombre = document.getElementById('nombre-formulario-contacto').value;
      this.apellido = document.getElementById('apellido-formulario-contacto').value;
      this.email = document.getElementById('email-formulario-contacto').value;
      this.telefono = document.getElementById('telefono-formulario-contacto').value;
      this.consulta = document.getElementById('consulta-formulario-contacto').value;
      this.mensajeError = document.querySelector('#mensajeErrorContacto');
    }
  
    validarDatos(){
        let error = false;
        let mensaje = '';
        if(this.nombre==""){
            error=true;
            mensaje+="<p>El campo nombre no puede estar vacio</p>";
        }
        if(this.apellido==""){
            error=true;
            mensaje+="<p>El campo apellido no puede estar vacio</p>";
        }
        if(this.email==""){
            error=true;
            mensaje+="<p>El campo email no puede estar vacio</p>";
        }else{
            if (this.validarEmail(this.email)) {
                console.log('Correo electrónico válido:', this.email);
              } else {
                error=true;
                console.log('Correo electrónico inválido:', this.email);
                mensaje+="<p>El campo email es invalido</p>";
              }
        }
        if(this.telefono==""){
            error=true;
            mensaje+="<p>El campo telefono no puede estar vacio</p>";
         }else{
             
             if(this.validarTelefono(this.telefono)){
                 console.log('Telefono válido:', this.telefono);
             }else{
                error=true;
                console.log('Telefono inválido:', this.telefono);
                mensaje+="<p>El campo telefono es invalido</p>";
             }
        }
        if(this.consulta==""){
            error=true;
            mensaje+="<p>El campo consulta no puede estar vacio</p>";
        }
        if(error){
            this.mensajeError.innerHTML = mensaje;
            return false;
        }else{
            return true;
        }
    }

    validarEmail(email){
        //regexEmail= /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    validarTelefono(telefono){
         const regex = /^[0-9]{4}-?\d{4}$/; //Se permiten 4 numeros, guion opcional y 4 numeros mas. Ej: 4444-4444, 44444444
         return regex.test(telefono);
     }
  
    enviarDatos() {
      if (this.validarDatos()) {
        console.log('Datos enviados:');
        console.log('Nombre:', this.nombre);
        console.log('Apellido:', this.apellido);
        console.log('Email:', this.email);
        console.log('Teléfono:', this.telefono);
        console.log('Consulta', this.consulta);
        console.log("formulario enviado");
        document.querySelector('.formulario-contacto').reset();
        this.mensajeError.innerHTML = '';
      }
      
    }
  }
    //VALIDACION DE TEXTAREA
    const textarea = document.getElementById('consulta-formulario-contacto');
    const caracteresIngresados = document.getElementById('caracteres-ingresados');
    const caracteresRestantes = document.getElementById('caracteres-restantes');
    const limiteCaracteres = 1000;

    // Agregar evento de escucha al campo de texto
    textarea.addEventListener('input', function() {
    const texto = textarea.value;
    const longitud = texto.length;
    const caracteresRestantesValor = limiteCaracteres - longitud;

    // Actualizar la cantidad de caracteres ingresados y restantes
    caracteresIngresados.textContent = longitud;
    caracteresRestantes.textContent = caracteresRestantesValor;

    // Limitar la longitud del campo de texto
    if (longitud > limiteCaracteres) {
      textarea.value = texto.substring(0, limiteCaracteres);
    }
  });
  
 const formularioContacto = new FormularioContacto();
  
 document.querySelector('.formulario-contacto').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
    formularioContacto.obtenerDatos(); // Obtener los datos del formulario
    formularioContacto.enviarDatos(); // Enviar los datos del formulario
  });