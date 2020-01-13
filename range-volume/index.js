let range = document.querySelector('.range-box');
let moveProgress = document.querySelector('.range');

let mouse = false;


range.addEventListener('mousedown',  rangeMove);
range.addEventListener('mousemove',  e => mouse && rangeMove(e));
range.addEventListener('mouseup',  () => mouse = false);


function rangeMove(e) {
    let total = `${e.offsetX / 100 }%`;
    let offset = this;
    console.log(total);
    console.log(offset);
    mouse = true;
}