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
    get regcheck(){
        return console.log(this.patern);
    }


    validator() {

        const inputs = this.formParent.elements;

        for (let inp of inputs) {
            if (inp.tagName !== 'BUTTON' && inp.value === '') {
                console.log(inp)
            }
        }
    }

}


const form = new FormBuilder({
    formId: 'form',
    patern: 'reg'
});

form.validator();



