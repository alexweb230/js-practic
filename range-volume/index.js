let range = document.querySelector('.range-box');
let moveProgress = document.querySelector('.range');

let mouse = false;

let defuultVolume = moveProgress.dataset.volume;
moveProgress.style.width = `${defuultVolume}%`;

range.addEventListener('mousedown',  rangeMove);
range.addEventListener('mousemove',  e => mouse && rangeMove(e));
range.addEventListener('mouseup',  () => mouse = false);


function rangeMove(e) {
    let offset = range.offsetWidth;
    let total = `${(e.offsetX / offset) * 100}%`;
    mouse = true;
    moveProgress.style.width = total;
}