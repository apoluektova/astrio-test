class Slider {
  constructor(slider, sliderItems) {
    this.slider = slider;
    this.sliderItems = sliderItems;
    this.currentSlide = sliderItems[0];
    this.currentIndex = this.sliderItems.indexOf(this.currentSlide);
    this.prevSlide = null;
    this.nextSlide = null;
  }

  showPrevSlide() {
    if (this.currentIndex - 1 < 0) {
      this.prevSlide = this.sliderItems[this.sliderItems.length - 1];
    } else {
      this.prevSlide = this.sliderItems[this.currentIndex - 1];
    }

    this.currentSlide.classList.remove('slider__item--active');
    this.prevSlide.classList.add('slider__item--active');

    this.currentSlide = this.prevSlide;
    this.currentIndex = this.sliderItems.indexOf(this.currentSlide);
  }

  showNextSlide() {
    if (this.currentIndex + 1 === this.sliderItems.length) {
      this.nextSlide = this.sliderItems[0];
    } else {
      this.nextSlide = this.sliderItems[this.currentIndex + 1];
    }

    this.currentSlide.classList.remove('slider__item--active');
    this.nextSlide.classList.add('slider__item--active');
    
    this.currentSlide = this.nextSlide;
    this.currentIndex = this.sliderItems.indexOf(this.currentSlide);
  }
}

const slider = document.querySelector('.slider');
const sliderWrapper = slider.querySelector('.slider__wrapper');
const sliderList = sliderWrapper.querySelector('.slider__list');
const sliderItems = Array.from(sliderList.querySelectorAll('.slider__item'));
const sliderControls = sliderWrapper.querySelector('.slider__controls');
const prevButton = sliderControls.querySelector('.slider__button--prev');
const nextButton = sliderControls.querySelector('.slider__button--next');

const newSlider = new Slider(slider, sliderItems);

prevButton.addEventListener('click', () => {
  newSlider.showPrevSlide();
});

nextButton.addEventListener('click', () => {
  newSlider.showNextSlide();
});


