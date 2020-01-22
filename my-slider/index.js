class AlexSlider {
    constructor(options) {
        this.wrapper = options.wrapper
    }

    addStyles() {
        let style = document.createElement('style');
        style.id = 'alex-slider';
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
    };

}

const slider = new AlexSlider({}).init();
























