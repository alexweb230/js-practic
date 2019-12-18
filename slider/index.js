'use strict';

class sliderCarusel {
    constructor({main, wrap}) {
      this.main = document.querySelector(main);
      this.wrap = document.querySelector(wrap);
      this.slides = document.querySelector(wrap).children;

    }

    init() {
        console.log(this.slides)
    }
}


const slider = new sliderCarusel({
    main: '.companies-wrapper',
    wrap: '.companies-hor'
});


slider.init();