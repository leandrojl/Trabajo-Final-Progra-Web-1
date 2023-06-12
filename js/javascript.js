//FORMULARIO HTML
class Formulario {
    constructor() {
      this.nombre = '';
      this.apellido = '';
      this.dni = '';
      this.email = '';
      this.telefono = '';
      this.mensajeError = '';
    }
  
    obtenerDatos() {
      this.nombre = document.getElementById('nombre-formulario').value;
      this.apellido = document.getElementById('apellido-formulario').value;
      this.dni = document.getElementById('dni-formulario').value;
      this.email = document.getElementById('email-formulario').value;
      this.telefono = document.getElementById('telefono-formulario').value;
      this.mensajeError = document.querySelector('#mensajeError');
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
  
const miFormulario = new Formulario();
  
 document.querySelector('.formulario-ingreso-curso').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
    miFormulario.obtenerDatos(); // Obtener los datos del formulario
    miFormulario.enviarDatos(); // Enviar los datos del formulario
  });
//FORMULARIO HTML




