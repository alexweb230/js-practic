'use strict';

class sliderCarusel {
    constructor({
                    main,
                    wrap,
                    next,
                    prev,
                    position = 0,
                    slide = 1,
                    infinity = false,
                    responsive = []
                }) {
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.slidesToShow = slide;
        this.option = {
            position,
            infinity,
            widthSlider: Math.floor(100 / this.slidesToShow)
        };
        this.responsive = responsive;

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
        if (this.option.infinity || this.option.position > 0) {
            --this.option.position;
            console.log(this.option.position);
            if (this.option.position < 0) {
                this.option.position = this.slides.length - this.slidesToShow;
            }
            this.wrap.style.transform = `translateX(-${this.option.position * this.option.widthSlider}%)`;
        }
    }

    nextSlider() {
        if (this.option.infinity || this.option.position < this.slides.length - this.slidesToShow) {
            ++this.option.position;
            console.log(this.option.position);
            if (this.option.position > this.slides.length - this.slidesToShow) {
                this.option.position = 0;
            }
            this.wrap.style.transform = `translateX(-${this.option.position * this.option.widthSlider}%)`;
        }
    }

    controllSlider() {
        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));
    }

    addErrow() {
        this.prev = document.createElement('button');
        this.next = document.createElement('button');
        this.prev.className = 'prev';
        this.next.className = 'next';
        this.prev.textContent = 'prev';
        this.next.textContent = 'next';
        this.main.appendChild(this.prev);
        this.main.appendChild(this.next);
    }
    responsiveInit(){
        const slides = this.slidesToShow;
        const allResponsive = this.responsive.map(r => r.breakpoint);
        console.log(allResponsive);

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
        if(this.responsive){
            this.responsiveInit();
        }
    }
}


const slider = new sliderCarusel({
    main: '.companies-wrapper',
    wrap: '.companies-hor',
    slide: 4,
    infinity: true,
    responsive: [
        {
            breakpoint: 1024,
            slide: 3
        },
        {
            breakpoint: 768,
            slide: 2
        },
        {
            breakpoint: 576,
            slide: 1
        },
    ]
});


slider.init();