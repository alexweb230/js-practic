let forms = document.getElementsByTagName('form');

for (let i = 0; i < forms.length; i++) {
    forms[i].addEventListener('submit', validator);
}


let rules = {


    required: function (el) {
        if (el.value != '') {
            return true;
        } else {
            return false;
        }
    },

    email: function (el) {
        let reg = /^\w{1,}@\w{1,}\w{2,}$/;
        return reg.test(el.value)
    }
}

function showErrors(arr) {
    console.log(arr);
}

function validator(e) {
    e.preventDefault();
    let errors = [];
    let inputs = this.elements;
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].tagName != 'BUTTON') {
            let rulelist = inputs[i].dataset.rule;
            rulelist = rulelist.split(' ');
            for (let j = 0; j < rulelist.length; j++) {

                if (rulelist[j] in rules) {
                    if (!rules[rulelist[j]](inputs[i])) {
                        errors.push({
                            name: inputs[i].name,
                            error: rulelist[j]
                        });
                    }
                }
            }
        }
    }
    if (errors.length > 0) {
        e.preventDefault();
        showErrors(errors);
    }
}

