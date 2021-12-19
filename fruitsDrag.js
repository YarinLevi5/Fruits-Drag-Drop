let dragElems = document.querySelectorAll('img');
let dropElems = document.querySelectorAll('.drop-elem');

dragElems.forEach((elem) => {
    elem.addEventListener('dragstart', dragStart);
})

dropElems.forEach((elem) => {
    elem.addEventListener('dragover', dragOver);
    elem.addEventListener('drop', drop);
})

function dragStart(e) {
    e.dataTransfer.setData('text', e.target.id);
    e.dataTransfer.effectAllowed = 'move';
};

function dragOver(e) {
    e.preventDefault();
}

let error = document.getElementById('error');
let displayContainer = document.getElementById('display-container');
let gameOver = document.getElementById('game-over');
gameOver.classList.add('hide');
let flag = 0;

function drop(e) {
    e.preventDefault();
    let fruitImg = e.dataTransfer.getData('text');
    let draggedElem = e.target.id;
    if (fruitImg === draggedElem) {
        e.target.appendChild(document.getElementById(fruitImg));
        let fruit = document.getElementById(fruitImg);
        fruit.classList.add("dropped");
        e.target.style.border = "2px solid black";
        e.target.style.backgroundColor = 'lightblue';
        error.innerText = "";
        flag++

        if (flag == 5) {
            displayContainer.classList.add('hide');
            gameOver.classList.remove('hide');
        }

    } else {
        e.currentTarget.style.background = "white";
        e.target.style.border = "2px dashed black";
        error.innerText = "Wrong match,Try again"
    }
}