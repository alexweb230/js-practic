console.log('request-data');

// setTimeout(() => {
//     console.log('prepar-data');
//
//     const back = {
//         server: 'aws',
//         port: '2000',
//         status: 'work',
//     }
//
//     setTimeout(() => {
//         back.modified = true;
//
//        console.log('data', back);
//     }, 2000);
//
// }, 2000);


const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('prepar-data');
        const back = {
            server: 'aws',
            port: '2000',
            status: 'work',
        }

        resolve()
    }, 2000)
});

p.then(() => {
   console.log('promis resolved');
});