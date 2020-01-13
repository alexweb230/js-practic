let range = document.querySelector('.range-box');
let moveProgress = document.querySelector('.range');
let offset = range.offsetWidth;

let mouse = false;


range.addEventListener('mousedown',  rangeMove);
range.addEventListener('mousemove',  e => mouse && rangeMove(e));
range.addEventListener('mouseup',  () => mouse = false);


function rangeMove(e) {
    let total = `${(e.offsetX / offset) * 100}%`;
    mouse = true;
    moveProgress.style.width = total;
    console.log(total);
}