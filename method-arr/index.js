const people = [
    {name: "alex", age: 25, job: 'front'},
    {name: "alex-1", age: 24, job: 'front-1'},
    {name: "alex-2", age: 26, job: 'front-2'},
    {name: "alex-3", age: 27, job: 'front-3'},
    {name: "alex-4", age: 27, job: 'front-4'},
    {name: "alex-5", age: 29, job: 'front-5'},
]

// for (let i = 0; i < people.length; i++) {
//
//     console.log(people[i]);
//     console.log('for')
// }


// for (let person of people){
//     console.log(person);
//     console.log('for in')
// }


// people.forEach(person => {
//     console.log(person);
//     console.log('forEach')
// })


const peapleSecond = people.map(person => {

    return person.name

    // return 'hello'
});

console.log(peapleSecond);

