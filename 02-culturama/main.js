const classeAnimarFinal = 'animar-final';

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add(classeAnimarFinal);
    } else {
      entrada.target.classList.remove(classeAnimarFinal);
    }
  });
});

const elementos = document.querySelectorAll('.animar');

elementos.forEach((imagem) => observador.observe(imagem));
