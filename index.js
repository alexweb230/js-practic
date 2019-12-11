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

    validator(e) {

        const inputs = this.formParent.elements;

        for (let inp of inputs) {
            if (inp.tagName !== 'BUTTON' && inp.value === '' && this.regcheck) {
                this.showError(inp);
                e.preventDefault()
            }
        }
    }

    init() {


        this.formParent.addEventListener('submit', (e) => {
            this.validator(e);
        });

        const inputs = this.formParent.elements;

        for(let inp of inputs){
            inp.addEventListener('keyup', (e)=>{
                if(e.keyCode === 8 && inp.value === ''){
                    this.showError(inp);
                }
                else{
                   console.log('test-3')
                }
            });
        }

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










