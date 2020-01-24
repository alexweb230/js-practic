class AlexSlider {
    constructor(options) {
        this.wrapperInit = options.selector;
        this.arrows = options.arrows;
        this.slideWidth = options.slideWidth;
        // this.settings = {
        //     position,
        // }
    }

     position = 0;
     widthSlide = 100 / this.slideWidth;

    // елементы разметки
    get parent() {
        return document.querySelector(`${this.wrapperInit}`);
    }
    get prev() {
        return document.querySelector(`${this.wrapperInit} .alex-btn--prev`);
    }

    get next() {
        return document.querySelector(`${this.wrapperInit} .alex-btn--next`);
    }
    get track(){
        return document.querySelector(`${this.wrapperInit} .alex-slider--container`);
    }
    // get slideWidth(){
    //     let slider = document.querySelector(`${this.wrapperInit} .alex-slider--item`);
    //     return slider.offsetWidth / 100;
    // }

    //добавление стилей слайдера
    addStyles() {
        let style = document.getElementById('alex-slider');
        if (!style) {
            style = document.createElement('style');
            style.id = 'alex-slider';
        }
        style.textContent = `
               .alex-slider--wrapper {
                    overflow: hidden;
                    max-width: 1000px;
                    border: 2px solid;
                    margin: auto;
                }

                .alex-slider--container {
                    display: flex;
                    transition: transform .5s;
                    will-change: transform;
                
                }

                .alex-slider--item {
                    flex-basis: 25%;
                    flex-shrink: 0;
                    margin: auto 0;
                
                }

                .alex-slider--item img {
                    width: 100%;
                }`;

        document.head.append(style);
    }
    // добавление кнопок
    addArrows() {
        let btnPrev = document.createElement('button');
        let btnNext = document.createElement('button');

        btnPrev.className = "alex-btn--prev";
        btnNext.className = "alex-btn--next";

        btnPrev.textContent = "prev";
        btnNext.textContent = "next";

        this.parent.append(btnPrev);
        this.parent.append(btnNext);

    }

    //пролистывание в право
    prevSlide(){
        this.prev.addEventListener('click',  () => {
           ++this.position;
           this.track.style.transform = `translateX(${this.position *  this.widthSlide}%)`;

            console.log(this.position)



        });
    }
    nextSlide(){
        this.next.addEventListener('click',  () => {

            --this.position;
            console.log(this.position)

        });


    }

    //инит слайдера
    init() {
        this.addStyles();

        if(this.arrows){
            this.addArrows();
        }
        this.prevSlide();
        this.nextSlide();



    };

}

const slider = new AlexSlider({
    selector: '.my-slider',
    arrows: true,
    slideWidth: 4,
}).init();


const slider2 = new AlexSlider({
    selector: '.my-slider-2',
    arrows: true,
    slideWidth: 4,
}).init();
























