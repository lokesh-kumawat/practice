// *****************DOM*****************

// const id = document.getElementById('title')
// console.log(id);

// const parent = document.querySelector('.parent')
// console.log(parent);
// console.log(parent.children);

// for (let i = 0; i < parent.children.length; i++) {
//     console.log(parent.children[i].innerHTML);
    
// }

// const oneday = document.querySelector('.day')
// console.log(oneday);
// console.log(oneday.parentElement);
// console.log(oneday.firstChild);


const div = document.createElement('div')
console.log(div);
div.className = 'main'
div.setAttribute("title","generated title")
div.style.backgroundColor = 'orange'
// div.innerText = 'this is js'
const addText = document.createTextNode('this is js')
div.appendChild(addText)

// document.body.appendChild(div)


function addlanguage(languageName){
    const item = document.createElement('li');
    // item.innerHTML = languageName;
    // document.querySelector('.language').appendChild(item)

    // const additem = document.createTextNode(languageName)
    // item.appendChild(additem)

    item.appendChild(document.createTextNode(languageName))
    document.querySelector('.language').appendChild(item)
}

addlanguage('java')
addlanguage('paython')

// ************edit**********
const Edit = document.querySelector('li:nth-child(2)')
// Edit.innerHTML = 'mojo';



const div = document.createElement("div");
const p = document.createElement("p");
div.appendChild(p);
const span = document.createElement("span");

p.replaceWith(span);

console.log(div.outerHTML);