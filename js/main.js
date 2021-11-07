function slidesPlugin(active = 4){
  const slides = document.querySelectorAll('.slide');
  slides[active].classList.add('active'); 
  
  for (let slide of slides) {
    slide.addEventListener('click', () => {
      clearActiveClasses();
      slide.classList.add('active');
    })
  }
  
  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove('active');
    })
  }
}

slidesPlugin(2);