const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('animar-visivel');
    }
  });
});

const elemento = document.querySelector('.animar');
observador.observe(elemento);
