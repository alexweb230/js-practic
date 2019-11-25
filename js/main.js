const person = new Object({
    name: 'alex',
    age: 'age',
    greet: function () {
        console.log('greet');
    }
});

Object.prototype.sayHello = function () {
    console.log('hello');
}


const lena = Object.create(person);