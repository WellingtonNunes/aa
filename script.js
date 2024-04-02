
let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');
const slideInterval = 2000;

function showSlides() {
  slideIndex++;
  if (slideIndex >= slides.length) { slideIndex = 0 }
  slides.forEach(slide => slide.style.transform = `translateX(-${slideIndex * 100}%)`);
}

setInterval(showSlides, slideInterval);

