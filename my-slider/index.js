class AlexSlider {
    constructor(options) {
        this.wrapperInit = options.selector;
    }

    // добавление стилей
    get parent (){
        return document.querySelector(`#${this.wrapperInit}`);
    }
    addStyles() {

         if(!style){
             let style = document.createElement('style');
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


    init() {
        this.addStyles();
        console.log(this.parent);
    };

}

const slider = new AlexSlider({
    selector: 'my-slider',
}).init();


const slider2 = new AlexSlider({
    selector: 'my-slider-2',
}).init();
























