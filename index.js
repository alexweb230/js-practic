window.onload = () => {
}

class FormBuilder {
    constructor(options) {
        this.formId = options.formId
        this.patern = options.patern

    }

    get formParent() {
        return document.getElementById(this.formId);
    }

    get inputs() {
        return this.formParent.elements;
    }



    get regcheck() {
        // return console.log(this.patern);
        return true
    }

    showError(element) {
        let error = document.createElement('small');
        error.className = "error";
        error.innerHTML = "заполните поля";
        if (!element.nextElementSibling) {
            element.after(error);
        }
    }

    hideEror(element) {
        if (element.nextElementSibling && element.nextElementSibling.tagName === 'SMALL') {
            element.nextElementSibling.remove();

        }
    }


    formSubmit(){
        this.formParent.addEventListener('submit', (e) => {
            for (let inp of this.inputs) {
                if (inp.tagName !== 'BUTTON' && inp.value === '' && this.regcheck) {
                    this.showError(inp);
                    e.preventDefault()
                }
            }
        });

    }

    keyPress(){
        for (let inp of this.inputs) {


            // document.querySelector('.btn-submit').setAttribute('disabled', true);


            inp.addEventListener('keyup', (e) => {
                document.querySelector('.btn-submit').removeAttribute('disabled');
                if (e.keyCode === 8 && inp.value === '') {
                    this.showError(inp);
                }
                else {
                    this.hideEror(inp);
                }
            });
        }
    }

    init() {
        this.formSubmit();
        this.keyPress();
    }

}


const form = new FormBuilder({
    formId: 'form',
    patern: '//'
});

form.init();
// .  любой одиночный символ

// []  диапазан,  любой из них

//  $  конец строки

//  ^   начало строки

// \ екранирование

// [^sw]  исключает в наборе буквы  s  и  w

// \d  любая единичная цифра


// \d\d\d   или  [0-9][0-9][0-9]  3 любых  цифр

// \D    все что угодно кроме цифр










