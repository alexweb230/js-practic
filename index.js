'use strict';


fetch('db/db.json')
    .then(respons => respons.json())
    .then(data => dataObject(data))
    .catch(err => console.log(err));


let dataObject = respons => {

    const allHeroes = respons.map(({id, category}) => ({
           id,
           category

    }));


    console.log(allHeroes);
}
















