
// get our elements
const slider = document.querySelector('.hero__carousel'),
  slides = Array.from(document.querySelectorAll('.hero__slide'))

// set up our state
let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  animationID,
  currentIndex = 0
  var labels = document.querySelector(".hero__slider");

  slides.forEach(element => {
    let Createlabel = document.createElement('label');
    Createlabel.innerText = '.';
    Createlabel.className = 'hero__slider-dot';
    labels.append(Createlabel);
  });
// add our event listeners
slides.forEach((slide, index) => {
  const slideImage = slide.querySelector('img')
  // disable default image drag
  slideImage.addEventListener('dragstart', (e) => e.preventDefault())
  // touch events
  slide.addEventListener('touchstart', touchStart(index))
  slide.addEventListener('touchend', touchEnd)
  slide.addEventListener('touchmove', touchMove)
  // mouse events
  slide.addEventListener('mousedown', touchStart(index))
  slide.addEventListener('mouseup', touchEnd)
  slide.addEventListener('mousemove', touchMove)
  slide.addEventListener('mouseleave', touchEnd)
})

// make responsive to viewport changes
window.addEventListener('resize', setPositionByIndex)

// prevent menu popup on long press
window.oncontextmenu = function (event) {
  event.preventDefault()
  event.stopPropagation()
  return false
}

function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}

// use a HOF so we have index in a closure
function touchStart(index) {
  return function (event) {
    startPos = getPositionX(event)
    isDragging = true
    animationID = requestAnimationFrame(animation)
    slider.classList.add('grabbing')
  }
}

function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event)
    currentTranslate = prevTranslate + currentPosition - startPos
  }
}

function touchEnd() {
  cancelAnimationFrame(animationID)
  isDragging = false
  const movedBy = currentTranslate - prevTranslate

  // if moved enough negative then snap to next slide if there is one
  if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1

  // if moved enough positive then snap to previous slide if there is one
  if (movedBy > 100 && currentIndex > 0) currentIndex -= 1

  setPositionByIndex()

  slider.classList.remove('grabbing')
}

function animation() {
  setSliderPosition()
  if (isDragging) requestAnimationFrame(animation)
}




btns = document.querySelectorAll(".hero__slider-dot");

if(btns[0]) {
  btns[0].classList.add('active');
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -window.innerWidth
  prevTranslate = currentTranslate
  setSliderPosition()
  btns.forEach((btn) => {
    btn.classList.remove('active');
  });

  if(btns.length) {
    btns[currentIndex].classList.add('active');
  }
}

function setSliderPosition() {
  if(slider) {
    slider.style.transform = `translateX(${currentTranslate}px)`
  }
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    currentIndex=i;
    setPositionByIndex()
  });
});


