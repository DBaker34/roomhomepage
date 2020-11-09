const slides = document.querySelectorAll(".slide");
const imgs = document.querySelectorAll(".slideimg");
const prevButton = document.getElementById("larrow");
const nextButton = document.getElementById("rarrow");

var currentSlide = 0;

const nextSlide = function(){

    slides[currentSlide].classList.remove("active");
    imgs[currentSlide].classList.remove("active");

    currentSlide = (currentSlide + 1) % 3;

    slides[currentSlide].classList.add("active");
    imgs[currentSlide].classList.add("active");
};

const prevSlide = function(){
    slides[currentSlide].classList.remove("active");
    imgs[currentSlide].classList.remove("active");

    currentSlide = (currentSlide + 2) % 3;

    slides[currentSlide].classList.add("active");
    imgs[currentSlide].classList.add("active");
};

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);
