let bt1  = document.querySelector("#btn1");

btn1.onclick = () => {
    console.log("button was click");
}


// let box = document.querySelector("div");

// box.onmouseover = () =>{
//     console.log("you are inside the div");
// }


let box1 = document.querySelector("#box1");
box1.addEventListener("click", () =>{
  console.log("this is box");
});

let box2 = document.querySelector("#box2");
box2.addEventListener("click", () =>{
  console.log("second box");
});


let btn2 = document.querySelector("#btn2");
btn2.addEventListener("mouseover", () =>{
   console.log("second btn");
});

