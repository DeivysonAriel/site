(function() {
    const carousel = document.querySelector('.carousel-inner');
    let currentSlide = 0;
  
    function showSlide(slideIndex) {
      carousel.style.transform = `translateX(-${slideIndex * 33.33}%)`;
    }
  
    setInterval(() => {
      currentSlide = (currentSlide + 1) % 3;
      showSlide(currentSlide);
    }, 2000);
  })();
  const audioButton = document.querySelector('.audio-button');
const audio = new Audio('escuta.mp3');
let isPlaying = false;

audioButton.addEventListener('click', function() {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    audioButton.textContent = 'Reproduzir';
  } else {
    audio.play();
    isPlaying = true;
    audioButton.textContent = 'Pausar';
  }
});
