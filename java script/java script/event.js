// document.getElementById('photoshop').onclick = function (){
//     alert("first image")
// }

// document.getElementById('river').addEventListener('click', function(e){
//     console.log(e);
// })

document.querySelector('#images').addEventListener('click', function (e) {
    // console.log(e.target);
    // console.log(e.target.parentNode);
    console.log(e.target.tagName);
    if (e.target.tagName === 'IMG') {
        let removeIt = e.target.parentNode
        removeIt.remove()
    }
})

