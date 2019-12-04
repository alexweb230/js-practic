window.onload = () => {
}

class FormBuilder {
    constructor(options) {
        this.formId = options.formId

    }

    get formParent() {
        return document.getElementById(this.formId);
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
    formId: 'form'
});

form.validator();


