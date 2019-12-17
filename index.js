window.onload = () => {
}

class FormBuilder {
    constructor(options) {
        this.formId = options.formId;
        this.paternName = options.paternName;

    }

    get formParent() {
        return document.getElementById(this.formId);
    }

    get inputs() {
        return this.formParent.elements;
    }

    get btnSubmit() {
        let btn = this.formParent.children;
        btn = Array.prototype.slice.call(btn);
        let btn2;

        btn.map(m => {
            if (m.classList.contains('btn-submit')) {
                btn2 = m
            }
        });
        return btn2;
    }

    get regcheck() {
        return console.log( this.paternName);
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


    formSubmit() {
        this.formParent.addEventListener('submit', (e) => {
            for (let inp of this.inputs) {
                if (inp.tagName !== 'BUTTON' && inp.value === '') {
                    this.showError(inp);
                    e.preventDefault()
                }
            }
        });

    }

    keyPress() {
        for (let inp of this.inputs) {
            inp.addEventListener('keyup', (e) => {
                this.btnSubmit.removeAttribute('disabled');


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
        this.regcheck;
    }

}


const form = new FormBuilder({
    formId: 'form',
    paternName: '/\D+/'
});

form.init();

const form2 = new FormBuilder({
    formId: 'form2',
    paternName: '//'
});

form2.init();


// .  любой одиночный символ

// []  диапазан,  любой из них

//  $  конец строки

//  ^   начало строки

// \ екранирование

// [^sw]  исключает в наборе буквы  s  и  w

// \d  любая единичная цифра

// \d\d\d   или  [0-9][0-9][0-9]  3 любых  цифр

// \D    все что угодно кроме цифр

// \s  пробелы

// \S  все кроме пробела

// \w - любая буква

// \W -  все кроме букв

//  \b - граница слова

//  \B -  все кроме не границ слова



//квантификация

// n{4} искать символ n подряд 4 раза
// n{4, 6}  от 4  до  6 символов подряд

// * от 0  и выше

// + от 1 и выше

// ? - нуль  или раз






