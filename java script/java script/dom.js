// create new element

function addLanguage(langName){
  const li = document.createElement('li');
  li.innerHTML = `${langName}`;
  document.querySelector('.language').appendChild(li);
}

addLanguage('java Script');
addLanguage('mongo DB');

// optmize way to create element 

function addoptLanguage(langName){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName));
    document.querySelector('.language').appendChild(li);
}

addoptLanguage("golang");

// edit

const secondLang = document.querySelector('li:nth-child(2)')
const newli = document.createElement('li')
newli.textContent = 'mojo';
secondLang.replaceWith(newli)

// remove

const lastLang = document.querySelector('li:last-child');
lastLang.remove();

