//FORMULARIO HTML-----------------------------------------------------------------------------------------------------------------------
class FormularioInscripcionAUnCurso {
    constructor() {
      this.nombre = '';
      this.apellido = '';
      this.dni = '';
      this.email = '';
      this.telefono = '';
      this.mensajeError = '';
    }
  
    obtenerDatos() {
      this.nombre = document.getElementById('nombre-formulario-ingreso-curso').value;
      this.apellido = document.getElementById('apellido-formulario-ingreso-curso').value;
      this.dni = document.getElementById('dni-formulario-ingreso-curso').value;
      this.email = document.getElementById('email-formulario-ingreso-curso').value;
      this.telefono = document.getElementById('telefono-formulario-ingreso-curso').value;
      this.mensajeError = document.querySelector('#mensajeErrorFormulario');
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
        if(this.dni==""){
            error=true;
            mensaje+="<p>El campo dni no puede estar vacio</p>";
        }
        if(this.email==""){
            error=true;
            mensaje+="<p>El campo email no puede estar vacio</p>";
        }else{
            this.validarEmail(this.email);
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
        }
        if(error){
            //mostrar errores
            this.mensajeError.innerHTML = mensaje;
            return false;
    
        }else{
            return true;
        }
    }

    validarEmail(email){
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
  
    enviarDatos() {
      if (this.validarDatos()) {
        console.log('Datos enviados:');
        console.log('Nombre:', this.nombre);
        console.log('Apellido:', this.apellido);
        console.log('DNI:', this.dni);
        console.log('Email:', this.email);
        console.log('Teléfono:', this.telefono);
        console.log("formulario enviado");
        document.querySelector('.formulario-ingreso-curso').reset();
        this.mensajeError.innerHTML = '';
      }
      
    }
  }

const miFormulario = new FormularioInscripcionAUnCurso();
  
document.querySelector('.formulario-ingreso-curso').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
    miFormulario.obtenerDatos(); // Obtener los datos del formulario
    miFormulario.enviarDatos(); // Enviar los datos del formulario
});




  

