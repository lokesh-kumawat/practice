console.log("hey");
// alert("hello");
console.log(window);
console.dir(document.body.childNodes[1]);

document.body.childNodes[3].innerText =" All About DOM";

// id se Element access kar na 

let i = document.getElementById("heading");
console.dir(i);

// class se element ka access kar na

let j = document.getElementsByClassName("header");
console.log(j);

// by using tag name  = access html element
 let print = document.getElementsByTagName("p")
console.log(print);

// Query Selector = it is very important and is used to access element in java script. es se Class, Id,or
//   tag se teno kaam ek saath kar sak te hn
let element = document.querySelector("p");
console.log(element);

let allElm = document.querySelectorAll("P");
console.log(allElm);

// id ko
let idPrint = document.querySelector("#heading");
console.log(idPrint);

// class ko
let classPrint = document.querySelector(".header");
console.log(classPrint);

let classPrintAll = document.querySelectorAll(".header");
console.log(classPrintAll);
