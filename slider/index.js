'use strict';

class sliderCarusel {
    constructor({main, wrap, next, prev, position = 0, slides = 1}) {
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.slidesToShow = slides;
        this.option = {
            position,
            widthSlider: Math.floor(100 / this.slidesToShow)
        }

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
              flex: 0 0 ${this.option.widthSlider}% !important;
           }
        `;
        document.head.appendChild(style);
    }

    prevSlider() {

        if(this.option.position > 0){
            --this.option.position;
            console.log(this.option.position);
            this.wrap.style.transform = `translateX(-${this.option.position * this.option.widthSlider}%)`;
        }


    }

    nextSlider() {
        ++this.option.position;
        console.log(this.option.position);
        this.wrap.style.transform = `translateX(-${this.option.position * this.option.widthSlider}%)`;
    }

    controllSlider() {
        this.prev.addEventListener('click', this.prevSlider.bind(this));

        this.next.addEventListener('click', this.nextSlider.bind(this));
    }

    addErrow() {

    }

    init() {
        this.addGloClass();
        this.addStyle();
        if (this.prev && this.next) {
            this.controllSlider();

        } else {
            this.addErrow();
            this.controllSlider();
        }
    }
}


const slider = new sliderCarusel({
    main: '.companies-wrapper',
    wrap: '.companies-hor',
    prev: '.prev',
    next: '.next',
    slides: 3
});


slider.init();