
const displayElement = document.querySelector('.display');

document.addEventListener('keydown', (e)=>{
   displayElement.innerHTML = ` Press Key :${e.key}`;
});

