let range = document.querySelector('.range-box');
let moveProgress = document.querySelector('.range');

range.addEventListener('mousedown',  rangeMove);




function rangeMove(e) {
    console.log(e.offsetX / 2);
}