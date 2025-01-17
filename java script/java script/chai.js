let str = 'lokesh kumawat'
// console.log(str)

let data = "aman kuamwat"
// console.log(data[0]);
// console.log(data.length)

// console.log(data.charAt(3));
// console.log(data.indexOf("t"))

const newstr = data.substring(0, 5)
// console.log(newstr)

const newstr1 = data.slice(4, 9)
// console.log(newstr1)  // is ka use string ka kuch part nikal ne ka liye kiya ja ta hn 

const newstr2 = "   skdljflksadjf     "
// console.log(newstr2)
// console.log(newstr2.trim()) // move to extra space from string 


const url = "https://lokeshkuamwat.com/hitesh20%kumawat"
// console.log(url.replace('20%' , '-'))  // first string me data ko dhund ta h then second us ke jagha kya likh na h vo likh te hn
// console.log( url.includes('lokesh') )  
// string ke ander ye data h ke nhi is ke liye use ho ta hn 

// console.log(Math)
// console.log(Math.round(4.4))
// console.log(Math.floor(6.9))
// console.log(-45)
// console.log(Math.abs(-45))

// console.log((Math.random()*10) +1 )

let newdate = new Date()
// console.log(newdate.getMonth())
// console.log(newdate.getDay())



// Array 
const arr = [2, 4, 5, 65, 8, 8, 97]

// arr.push(100)
// console.log(arr)
// arr.pop()
// console.log(arr)

// const newarr = arr.join()
// console.log(arr)
// console.log(newarr)


// *********** slice and splice *******************


// console.log("a" , arr)
// console.log(arr.slice(0,3))
// console.log("after slice method" , arr)


// console.log(arr.splice(1,4))
// console.log("after splice method" , arr)

// main difference between slice and splice is that ke slice original array ko manipulate (change) nhi kar ta hn but splice original array ko manipulate (change ) kar ta h 


const marvel_hero = ["thor ", "ironman", "spiderman"]
const bolly_hero = ["akshay", "salmon", "kartik"]

// marvel_hero.push(bolly_hero)
// console.log(marvel_hero)


// 1st way to add two arry
// const all_hero = marvel_hero.concat(bolly_hero)
// console.log(all_hero)

const all_hero = [...marvel_hero, ...bolly_hero]
// console.log(all_hero)


// Object

const jsUser = {
    username: "lokesh kumawat",
    email: "lokseh@.com",
    age: 23,
    islogined: false
}

jsUser.username = "amit kumawat"
// console.log(jsUser)
jsUser.age = 45
// console.log(jsUser)

jsUser.greeting = function () {
    console.log("hello js user");
}

// console.log(jsUser.greeting())

const tinderUser = {}

tinderUser.id = "1234"
tinderUser.name = "lokesh kumawat"
tinderUser.isloginedIn = false

// console.log(tinderUser)


// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))


// (function chai () {
//     console.log("hello guys");
// })();

// for of loop is array specify loop

// let number = [2,3,5,7,9,0]

// for (const num of number) {
//     console.log(num)
// }

let myobj = {
    name: "lokesh kumawat",
    age: 45,
    email: "lokse@.ai"
}

for (const obj in myobj) {
    // console.log(obj)
    // console.log(myobj[obj])
    // console.log( `${obj} = ${myobj[obj]}`)

}


// let number = [344,657,678,67]

// for (const num in number) {
//    console.log(number[num])
// }


let number = [3, 45, 65, 76, 87, 98, 9]

// number.forEach(element => {
//     console.log(element)
// });

// number.forEach( (item) =>{
//   console.log(item)
// })


const myCoding = [
    {
        langName: "java",
        langfilename: "java.file"
    },

    {
        langName: "c++",
        langfilename: "cpp.file"
    },

    {
        langName: "react",
        langfilename: "react.file"
    }
]

// myCoding.forEach((item) => {
//   console.log(item.langfilename)    
// });


let value  = [2,3,4,5,6,7,8,9]

// const result = value.filter( (num) => num>4)
// console.log(result)

const result = value.filter((num)=>{
    return num >5
})

// console.log(result)

// let hero = ["iron", "captian", "super","spider"]

// const data1 = hero.filter((res) => res = "captian")
// console.log(data1)

