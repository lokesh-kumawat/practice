// // new Element create

// function addlang (langName) {
//     const li = document.createElement('li')
//     li.innerHTML = `${langName}`
//     document.querySelector(".language").appendChild(li)
// }

// addlang('Dsa')
// addlang('Python')


// // optimize way to create new element

// function newLnaguage (langName) {
//   const li = document.createElement('li')
//   let addtext = document.createTextNode(langName)
//   li.appendChild(addtext)
//   document.querySelector('.language').appendChild(li)
// }

// newLnaguage('golang')


// // remove 

// const remove = document.querySelector('li')
// // console.log(remove);
// remove.remove()

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('async function is completed');
    resolve()
  }, 2000)
}).then(() => {
  console.log('async is resolved')
})

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false
    if (!error) {
      resolve({ username: 'javaScript', password: '12e3' })
    } else {
      reject('js went wrong')
    }
  },2000)

})

async function consumePromiseFive() {
  const responce = await promiseFive
  console.log(responce)
}
consumePromiseFive()
