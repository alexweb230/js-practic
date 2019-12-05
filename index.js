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
        error.className = "error"
        error.innerHTML = "заполните поля"
         element.after(error);




    }

    validator() {

        const inputs = this.formParent.elements;

        for (let inp of inputs) {
            if (inp.tagName !== 'BUTTON' && inp.value === '' && this.regcheck) {
                this.showError(inp);
            }
        }
    }

}


const form = new FormBuilder({
    formId: 'form',
    patern: '//'
});

form.validator();


// .  любой одиночный символ

// []  диапазан,  любой из них

//  $  конец строки

//  ^   начало строки


// \ екранирование
