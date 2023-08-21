const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentIndex = 0;
let intervalId;

function updateCarousel() {
  carousel.style.transition = 'transform 0.5s ease-in-out'; // Agregar transición
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + carousel.childElementCount) % carousel.childElementCount;
  updateCarousel();
  restartAutoSlide(); // Reiniciar la transición automática después de una transición manual
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % carousel.childElementCount;
  updateCarousel();
  restartAutoSlide(); // Reiniciar la transición automática después de una transición manual
}

function restartAutoSlide() {
  clearInterval(intervalId);
  intervalId = setInterval(nextSlide, 3000); // Reiniciar el intervalo
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

carousel.addEventListener('mouseenter', () => {
  clearInterval(intervalId);
});

carousel.addEventListener('mouseleave', () => {
  restartAutoSlide(); // Reiniciar la transición automática al salir del carrusel
});

updateCarousel();
restartAutoSlide(); // Iniciar la transición automática al cargar la página
