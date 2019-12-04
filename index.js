window.onload = () => {}

class FormBuilder {
    constructor(options) {
        this.formId = options.formId

    }

    get formParent() {
        return document.getElementById(this.formId);
    }



    validator(){

        return console.log(this.formParent);


    }

}


const form = new FormBuilder({
    formId: 'form'
});

form.validator();
