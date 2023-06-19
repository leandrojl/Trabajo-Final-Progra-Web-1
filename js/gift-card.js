class GiftCard {

    constructor() {
      this.inputTitulo = '';
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

    actualizarColorLetra() {
        const tituloPrevisualizacion = document.querySelector('#titulo-gift-card');
        const montoPrevisualizacion = document.querySelector('#monto-gift-card');
        tituloPrevisualizacion.style.color = this.inputColorLetra;
        montoPrevisualizacion.style.color = this.inputColorLetra;
      }
  
    actualizarTamanioLetra() {
      const tituloPrevisualizacion = document.querySelector('#titulo-gift-card');
      const montoPrevisualizacion = document.querySelector('#monto-gift-card');
      tituloPrevisualizacion.style.fontSize = this.inputTamanioLetra+ 'px';
      montoPrevisualizacion.style.fontSize = this.inputTamanioLetra+ 'px';
    }

    actualizarFuente() {
      const tituloPrevisualizacion = document.querySelector('#titulo-gift-card');
      const montoPrevisualizacion = document.querySelector('#monto-gift-card');
      tituloPrevisualizacion.style.fontFamily = this.inputFuente;
      montoPrevisualizacion.style.fontFamily = this.inputFuente;
    }
  
    actualizarMonto() {
      const montoPrevisualizacion = document.querySelector('#monto-gift-card');
      montoPrevisualizacion.textContent = `$${this.inputMonto}`;
    }
  
    actualizarColorFondo() {
      const contenedorPrevisualizacion = document.querySelector('#contenedor-personalizado');
      contenedorPrevisualizacion.style.backgroundColor = this.inputColorFondo;
    }
  }
  const giftCard = new GiftCard();

  const tituloInput = document.getElementById('titulo');
  tituloInput.addEventListener('input', () => {
  giftCard.obtenerDatos();
  giftCard.actualizarTitulo();
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