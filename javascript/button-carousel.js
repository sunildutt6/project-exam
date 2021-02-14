const slides = document.querySelectorAll(".carousel-item")
let slidePosition = 0;
const totalSlides = slides.length;
const buttonPrev = document.querySelector("#carousel-button-prev");
const buttonNext = document.querySelector("#carousel-button-next");
buttonPrev.addEventListener("click", movetoPrevSlide)
buttonNext.addEventListener("click", moveToNextSlide)

function hideAllSlides() {
    for (const slide of slides) {
        slide.classList.remove("carousel-item-visible");
        slide.classList.add("carousel-item-hidden");
    }
}

function moveToNextSlide() {
    hideAllSlides();

    if (slidePosition === totalSlides-1 ) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
   slides[slidePosition].classList.add("carousel-item-visible")
    
}

function movetoPrevSlide() {
    hideAllSlides();
    if (slidePosition === 0) {
        slidePosition = totalSlides-1;
    } else {
        slidePosition--;
    }
    slides[slidePosition].classList.add("carousel-item-visible")

}
