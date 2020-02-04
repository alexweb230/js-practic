function* generator() {
    yield 'test';
    yield 'test2';
    yield 'test3';
    yield 'test4';

}

const gen_1 = generator();

const res = gen_1.next();

const res2 = gen_1.next();

const res3 = gen_1.next();

console.log(res3.value);




















