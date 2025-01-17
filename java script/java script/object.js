// function multipleBy5 (num){
//     return num*5
// }

// let myname = 'lokesh kumawat       '
// console.log(myname.length);

let myHero = ['thor', 'spiderman']

let heroPower = {
    thor : 'hammer',
    spiderman : 'sling',

    getSpiderPower : function(){
     console.log(`spider power is ${this.spiderman}`);
    }
}

// inheritance
const user = {
    name : 'the rock',
    email : 'the rock@gmail.com'
}

const teacher = {
    makevideo :true
}

const TeachingSupport ={
    isAvailable : false
}

const TASupport = {
  makeAssignment : 'js assignment',
  fullTime : 'true',
  __proto__: TeachingSupport
}

teacher.__proto__  = user

// mordern

Object.setPrototypeOf(TeachingSupport, teacher)
// console.log(TeachingSupport);
// console.log(TASupport);


// call and this 
function setUserName (userName){
    this.userName = userName
}

function createUser (userName, email, password){
    setUserName(userName)
    this.email = email
    this.password = password
}

const chai = new createUser ('chai', 'thesam@fb.com', '345')
console.log(chai);