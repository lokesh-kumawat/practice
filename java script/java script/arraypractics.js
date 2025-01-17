// for a given array with marks of student [85, 97,44,37,76,60]. find the average marks of entire class.

/* let marks =[ 85,97,44,37,76,60];
let sum=0;
for(let i=0; i<marks.length; i++ ){
    sum = sum+marks[i];
}
console.log(sum);
console.log("Average of entire marks is =",sum/marks.length);
  */

let marks =[85, 97,44,37,76,60];
let sum =0;

for(let i of marks){
    sum = sum+i;
}
console.log(sum);
console.log("Average of entire marks is =", sum/marks.length);