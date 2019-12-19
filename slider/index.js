'use strict';

class sliderCarusel {
    constructor({main, wrap, position = 0}) {
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.position = position;

    }
    init() {
        this.addGloClass();
        this.addStyle();
    }

    addGloClass() {
        this.main.classList.add('glo-slider');
        this.wrap.classList.add('glo-slider--wrap');
        for (let item of this.slides) {
            item.classList.add('glo-slider--item');
        }
    }

    addStyle() {
        const style = document.createElement('style');
        style.id = 'sliderCarousel';
        style.textContent = `
           .glo-slider{
              overflow: hidden !important;
           }
           .glo-slider--wrap{
              display: flex !important;
              transition: transform .5s !important;    
              will-change:transform !important;
           }
           .glo-slider--item{
              margin: auto 0 !important;
              flex: 0 0 25% !important;
           }
        `;
        document.head.appendChild(style);
    }


}


const slider = new sliderCarusel({
    main: '.companies-wrapper',
    wrap: '.companies-hor'
});


slider.init();