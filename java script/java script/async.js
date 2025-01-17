const sayDate = function () {
    console.log('lokesh', Date.now());
}

const intervalId = setInterval(sayDate, 2000)


document.querySelector('#start').addEventListener('click', function () {
    // setInterval(sayDate, 2000)
    // console.log('start');
})

document.querySelector('#stop').addEventListener('click', function () {
    clearInterval(intervalId)
    console.log('stop');
})



