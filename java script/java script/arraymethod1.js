// filter  = jab condition true hone par true valu ko new array me store kar de ta 

/*let number = [1, 2, 4, 3, 5, 6, 7];
let Evenarr = number.filter((val) => {
    // return val%2===0;
    // return val%2 != 0;
    return val > 3;
});

console.log(Evenarr);
*/

// map() method return a new array

/*let number = [1,2,4,3,5,6,7];
 let newarr = number.map((val) =>{
    return val*2;
});
 console.log(newarr);
 */


let marks = [23, 94, 45, 56, 98, 90, 95, 92];

let newArr = marks.filter((val) => {
    return val >= 90;
});
console.log(newArr);