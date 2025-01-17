let modebtn = document.querySelector("#mode");

let currentmode = "light";

modebtn.addEventListener("click",() =>{
  if(currentmode === "light"){
     currentmode = "dark";
     document.querySelector("body").classList.add("dark");
  }else{
    currentmode = "dark";
    document.querySelector("body").classList.add("light");
  }

  console.log(currentmode);
});

let press = document.querySelector("#keypress");


press.addEventListener("keypress" ,() =>{
   console.log("key is press");
});