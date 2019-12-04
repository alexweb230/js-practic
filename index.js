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

        const inputs = this.formParent.elements

        console.log(inputs);


    }

}


const form = new FormBuilder({
    formId: 'form'
});

form.validator();
