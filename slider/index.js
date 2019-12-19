'use strict';

class sliderCarusel {
    constructor({main, wrap}) {
      this.main = document.querySelector(main);
      this.wrap = document.querySelector(wrap);
      this.slides = document.querySelector(wrap).children;

    }

    addGloClass(){
        this.main.classList.add('.glo-slider');
        this.wrap.classList.add('.glo-slider--wrap');
        for(let item of this.slides){
            item.classList.add('.glo-slider--item');
        }
    }
    addStyle(){
        const style = document.createElement('style');
        style.id = 'sliderCarousel';
        document.head.appendChild(style);
    }

    init() {
        this.addStyle();
        this.addGloClass();
    }
}


const slider = new sliderCarusel({
    main: '.companies-wrapper',
    wrap: '.companies-hor'
});


slider.init();