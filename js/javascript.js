

//formulario.html
//validar formulario
let form = document.querySelector('.formulario-ingreso-curso');
let mensajeError = document.querySelector('#mensajeError');
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    validar();
})

function validar(){
    let error = false;
    let mensaje="";
    let nombre = document.querySelector("#nombre-formulario").value;
    let apellido = document.querySelector("#apellido-formulario").value;
    let dni = document.querySelector("#dni-formulario").value;
    let email = document.querySelector("#email-formulario").value;
    let telefono = document.querySelector("#telefono-formulario").value;
    if(nombre==""){
        error=true;
        mensaje+="<p>El campo nombre no puede estar vacio</p>";
    }
    if(apellido==""){
        error=true;
        mensaje+="<p>El campo apellido no puede estar vacio</p>";
    }
    if(dni==""){
        error=true;
        mensaje+="<p>El campo dni no puede estar vacio</p>";
    }
    if(email==""){
        error=true;
        mensaje+="<p>El campo email no puede estar vacio</p>";
    }
    if(telefono==""){
        error=true;
        mensaje+="<p>El campo telefono no puede estar vacio</p>";
    }
    if(error){
        //mostrar errores
        mensajeError.innerHTML = mensaje;

    }else{
        //enviar formulario
        form.submit();
        console.log("formulario enviado");
    }
}

