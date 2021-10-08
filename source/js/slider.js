export default class Slider {
  constructor(slider, sliderList, sliderItems) {
    this.slider = slider;
    this.sliderList = sliderList;
    this.sliderItems = sliderItems;
    this.counter = 0;
  }

  showPrevSlide() {
    const slideWidth = this.sliderItems[0].clientWidth;
    if (this.counter === 0) {
      this.counter = this.sliderItems.length;
    }
    this.counter--;
    this.sliderList.style.transform = `translateX(${-slideWidth * this.counter}px)`;
  }

  showNextSlide() {
    const slideWidth = this.sliderItems[0].clientWidth;
    if (this.counter === this.sliderItems.length - 1) {
      this.counter = -1;
    }
    this.counter++;
    this.sliderList.style.transform = `translateX(${-slideWidth * this.counter}px)`;
  }
}


