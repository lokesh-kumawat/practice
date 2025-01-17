// setTimeout(function(){
//     console.log('lokesh');
// },2000)

const saylokesh =function(){
        console.log('lokesh');
}

const changeText = function(){
    document.querySelector('h1').
    innerHTML = 'best js series'
}

// setTimeout(saylokesh,2000);
const changeMe = setTimeout(changeText,2000);

document.querySelector('#stop').addEventListener('click',function(){
    clearTimeout(changeMe)
    console.log('stopped');
})