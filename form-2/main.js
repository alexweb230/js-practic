let validatorMethod = {

    isNotEmpty: (el) => {
        if (el.value == '') {
            return false;
        }
        return true;
    },
    patern: (el, pattrn) => {

        return pattrn.test(el.value);

    },

    isContains: (el, el2) => {
        if(el.value == el2.value){
             return true;
        }
        else {
            return false;
        }
    }
}


let validator = (settings) => {

    let formEl = document.getElementById(settings.id);
    let formFields = formEl.elements;

    let error = [];

    let rulesPattern = {
        email: /^\w{1,}@\w{1,}\.\w{2,}$/,
        tel: /^\+38\(\d{3}\)\d{7}$/,
    }


    let showError = (el) => {
        el.parentNode.classList.remove('success').add('error');
        el.nextElementSibling.innerHTML = el.dataset.error;
    }

    let showSuccess = (el) => {
        el.parentNode.classList.remove('error').add('success');
        el.nextElementSibling.innerHTML = '';
    }

    let isValid = (el) => {
       let met = settings.method[el.getAttribute('id')];
       if(met !== undefined){
           for(let i = 0; i < met.length; i++){
               if(!validatorMethod[met[i][0]](el, met[i][1])){
                   error.push({
                       el: el,
                   });
               }
           }
           for(let i = 0; i < error.length; i++){
               if (error[i].el == el){
                   return false
               }
           }



       }
        return false;
    }


    let checkIt = function () {
        //правила проверки
        if (isValid(this)) {
            showSuccess(this);
            for (let i = 0; i < error.length; i++) {
                if (error[i].el == this) {
                    //delete element
                    delete (error[i]);
                }
            }
        } else {
            showError(this);
            error.push({
                el: this,

            })

        }
    }

    //init
    for (let i = 0; i < formFields.length; i++) {
        if (formFields[i].tagName == 'BUTTON') {
            continue;
        }
        formFields[i].addEventListener('change', checkIt);


    }

    for( let prop in settings.pattern){
        rulesPattern[prop] = settings.pattern[prop]
    }
}



