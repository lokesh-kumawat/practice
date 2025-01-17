
// console.log('Hello world !'); 

const accountId = 231;
let email = "alkdsjfl"

// console.log(accountId)


// alert(3+4)

let score = null;

// console.log(typeof score)
// let conNum = Number(score);
// console.log(typeof conNum);
// console.log(conNum);

let name = 'lokesh'
let state = 'Jaipur'

// console.log(name.length)

// console.log(`my name is ${name} and my state is ${state}`)

// let str = new String('lokesh kumawat');

// console.log(str);
// console.log(str.toUpperCase());
// console.log(str.rev)

// console.log(str.__proto__);
// console.log(Math.abs(-4));

// console.log(Date());

let mydate = new Date()
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString())

// ********************Array*******************

const myarr = [23, 3, 2, 45, 5, 3];

// myarr.push(89);
// console.log(myarr);
// console.log(myarr.reverse())

const newArr = myarr.slice(0, 4);
// console.log(newArr);
// console.log(myarr);

const newArr1 = myarr.splice(0, 3);
// console.log(newArr1)
// console.log(myarr)


let arr1 = ['lasf', 'ajkf', 'kahf']
let arr2 = ['erdf', 'wret', 'dfg']
const arr3 = [3, 4, 6, 7, 8, 9]


// let combine = arr1.concat(arr2);
// console.log(combine)

// const combine = [...arr1, ...arr2,...arr3];
// console.log(combine);

const str = 'lajdsklf'
// string convert into Array

const arr = Array.from(str);
// console.log(arr);

// ***********Object*************

const jsUser = {
    name: "lokesh",
    age: 34,
    email: "lokeshdf@gmail.com"
}

// console.log(jsUser.name);
const regularUser = {
    email: "therock@gmail.com",
    fullName: {
        userFullname: {
            firstname: "hitesh",
            lastName: "kumawat"
        }
    }
}

// console.log(regularUser.fullName);

const obj1 = {
    1: "A",
    2: "B"
}
const obj2 = {
    3: "c",
    4: "d"
}

// const combine = {...obj1,...obj2};

// console.log(combine);

// console.log(jsUser)
// console.log(Object.keys(jsUser));
// console.log(Object.values(jsUser))
// console.log(Object.keys(regularUser))

const courser = {
    courserName: "js",
    price: 231
}

// *******************Function ****************************


function sayMyName() {
    console.log("my name is lokesh");
}

// sayMyName();

function sum(Number1, Number2) {
    console.log(Number1 + Number2)
}

// sum(3,4);

// function userLogin(userName){
//     if(userName === undefined){
//        console.log("please eneter a user name");
//        return;
//     }
//   return `${userName} just login user`
// }

// let output = userLogin();
// console.log(output);

function calculateCardPrice(val1, val2, ...num1) {
    return num1;
}

let val = calculateCardPrice(300, 4600, 460, 500);
// console.log(val)

// ******** Object access in function *************

userdeatail = {
    userName: "lokesh",
    price: 499
}

function Objecthandel(anyobject) {
    console.log(` username is ${anyobject.userName} and price is ${anyobject.price}`);
}

// Objecthandel(userdeatail);

// ******* Array access in function***********************

let myNewarr = [200, 49, 560, 900];

function returnSecondvalu(getarray) {
    return getarray[1];
}

// console.log(returnSecondvalu(myNewarr))


// ****************THIS kayword = current context ke leye use ho ta h**************

// ******************Arrow Function*************

// const one = (num1, num2) => {
//  return  num1 + num2
// }

let one = (num1, num2) => (num1 + num2)

// console.log(one(4,4));

for (let index = 0; index < 10; index++) {
    // console.log(index);
}

for (let i = 1; i <= 10; i++) {
    // console.log("");
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} * ${j} = ${i*j}`);
    }

}


// ***********Break and continue statement********

for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        // console.log("5 is detected");
        //    break;
        continue
    }
    // console.log(i);
}

// ***************** for of loop *******************

const Arr = [1, 2, 3, 4, 5]

for (const val of Arr) {
    // console.log(val);
}

let Str = "Hello world"

for (const strings of Str) {
    // console.log(strings);
}

// *********for in loop**********

const myObj = {
    game1: "NFS",
    game2: "BGMI"
}

for (const key in myObj) {
    // console.log(key);
    // console.log(myObj[key]);
    // console.log(`${key} shortcut is for ${myObj[key]}`);

}

const pro = ['java', 'cpp', 'js']

for (const key in pro) {
    //    console.log(key);

}

//*********************** * for each loop *****************

const language = ['js', 'java', 'c++', 'ruby'];

// language.forEach(function (val) {
//     console.log(val);
// })

// language.forEach((val) => {
//     console.log(val);
// })

language.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: 'js'
    },
    {
        languageName: "c++",
        languageFileName: 'cpp'
    }
]

myCoding.forEach((item) =>{
//  console.log(item.languageName);
})

// *******************Filter*****************

const number = [1,2,3,4,5,6,7,8,9]

// const value = number.filter((num)=> {
//     return num > 4
// })
// console.log(value);

const value = number.filter((num) => num > 5)
console.log(value);

const numbers = [5,33,2,4,56,4,3,45]

// let newNums = numbers.map((num) => num +10 )
// console.log(newNums);

