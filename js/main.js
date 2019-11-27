//prototype

// const person = new Object({
//     name: 'alex',
//     age: 'age',
//     greet: function () {
//         console.log('greet');
//     }
// });
//
// Object.prototype.sayHello = function () {
//     console.log('hello');
// }
//
//
// const lena = Object.create(person);
//
//
// const test = new String("Hello world");


//context  apply,  call, binde

function hello() {
    console.log('hellowww', this);
}

const person = {
    name: 'alex',
    age: 'age',
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`)
        console.log(`name is ${this.name}`);
        console.log(`age is ${this.age}`);
        console.log(`job is ${job}`);
        console.log(`phone is ${phone}`);
        console.groupEnd();
    }
};

const lena = {
    name: 'lena',
    age: 23
}

person.logInfo.bind(lena, 'fish', '093-444-444-444')();

person.logInfo.call(lena, 'front', '222-888');

person.logInfo.apply(lena, ['fider', '00000']);


// ============

const arr = [1, 2, 3, 4, 5];


Array.prototype.mult = function (n) {
    return this.map((i)=>{return i * n});

}


console.log(arr.mult(5));


//замыкание
function  createTest(n) {
    return function (num) {
        return n + num
    }

}

const total = createTest(10);
const total2 = createTest(30);

console.log(total(20));
console.log(total2(20));

// пример


function bind(cont, fn) {
    return function (...arg) {
        fn.apply(cont, arg);
    }

}

function logRepson(...args) {
    console.log(`person ${this.name}, ${this.age}, ${this.job}, ${this.job2}, ${args}`);
}


const pers = {
    name: 'Миша',
    age: 22,
    job: 'frontend',
    job2: 'frontend'
}


const pers2 = {
    name: 'Миша',
    age: 22,
    job: 'frontend',
    // job2: 'frontend',
    job3: 'frontend',
    job4: 'frontend',
}


const result = bind(pers, logRepson);

result([['test', '00000', 'ffffff'], ['fffffff', "dfffff"]]);


//====================================
//async


console.log('start');
console.log('start-2');

setTimeout(()=>{
    console.log('timeout');
}, 2000);







































