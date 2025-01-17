
let score = 0;
let randomVal = 0;

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
    randomVal = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = randomVal;
}

function makeBubble() {

    let clutter = "";

    for (let i = 1; i <= 176; i++) {
        let rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`
    }
    document.querySelector('#pbtm').innerHTML = clutter;

}

let timer = 60;
function runtimer() {
    let timerInterval = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector('#timerval').textContent = timer;
        }
        else {
            clearInterval(timerInterval);
            document.querySelector('#pbtm').innerHTML = `<h1>Game Over</h1>`;
        }

    }, 1000)
}

document.querySelector('#pbtm')
    .addEventListener('click', function (val) {
        let clickedNum = Number(val.target.textContent);
        if (clickedNum === randomVal) {
            increaseScore();
            getNewHit();
            makeBubble();
        }
    })

runtimer();
makeBubble();
getNewHit();