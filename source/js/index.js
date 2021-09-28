import Slider from "./slider.min.js";

const slider = document.querySelector('.slider');
const sliderWrapper = slider.querySelector('.slider__wrapper');
const sliderList = sliderWrapper.querySelector('.slider__list');
const sliderItems = Array.from(sliderList.querySelectorAll('.slider__item'));
const sliderControls = sliderWrapper.querySelector('.slider__controls');
const prevButton = sliderControls.querySelector('.slider__button--prev');
const nextButton = sliderControls.querySelector('.slider__button--next');

const newSlider = new Slider(slider, sliderItems);

prevButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  newSlider.showPrevSlide();
});

nextButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  newSlider.showNextSlide();
});
