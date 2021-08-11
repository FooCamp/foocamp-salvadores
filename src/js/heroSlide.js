var slides = document.querySelectorAll(".hero__slide__container");
var labels = document.querySelector(".hero__slider");

slides.forEach(element => {
  let Createlabel = document.createElement('label');
  Createlabel.innerText = '.';
  Createlabel.className = 'hero__slider__dot';
  labels.append(Createlabel);
});
slides[0].classList.add('active');
btns = document.querySelectorAll(".hero__slider__dot");
btns[0].classList.add('active');
let currentSlide = 1;
// Javascript for image slider manual navigation
var manualNav = function (manual) {
  slides.forEach((slide) => {
    slide.classList.remove('active');
    slides[1].classList.remove('slide-left');
    slides[1].classList.remove('slide-right');
    btns.forEach((btn) => {
      btn.classList.remove('active');
      
    });
  });

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
}
var previousSlide=0;
btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
    if(previousSlide<currentSlide){
      slides[i].classList.add('slide-left');
    }else{
      slides[i].classList.add('slide-right');
    }
    previousSlide=currentSlide;
  });
});














