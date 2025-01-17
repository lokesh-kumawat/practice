
// function getNewHit(){
    // let rn = Math.floor(Math.random() * 10);
    let data = document.querySelector("#Hitval");
    console.log(data);

// }


function makeBubble() {

    let clutter = "";

    for (let i = 1; i <= 168; i++) {
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
            clearInterval(timerInterval)
        }

    }, 1000)
}

runtimer();
makeBubble();
// getNewHit();