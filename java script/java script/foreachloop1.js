// for each loop ke call back function ke three parameter ho te hn {valu , idx(position), array itself}

let bname = ["Aayan" , "Shubham", "Rocky", "Jaisprit", "Rohit"];

bname.forEach(function printName(print, idx){
    console.log(print,"index is ",idx);
});


// second 
let city = ["Virat", "Rohit", "Shubhiman" , "Klrahul"];

city.forEach(function printCity(val, idx, city){
  console.log(val,idx, city);
});


// Question = For a given array of number , print the squire of each valu using foreach  loop.

let arr =[ 1,2,3,4,5];

arr.forEach(function squirePrint(valu){
    console.log(valu * valu);
});

// Question = Take a Number n as inpiut from User. Create an array of numbers from 1 to n.
 
let n = prompt("Enter a number ");

let ar =[];
for(let i=1; i<= n; i++){
    ar[i-1] = i;
}
console.log(arr);