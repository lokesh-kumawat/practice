
// **** Array MAP method = This is create a new array and this is not affected(modify) the original array

let arr = [34, 65, 98]

let a = arr.map((val) => {
  // console.log(val);
  return val + 1;
})

// console.log(a);


// **** Array Filter method = This is create a new array and this is not affected(modify) the original array

let arr1 = [34, 65, 9, 5, 7, 2, 1, 4]

let filt = arr1.filter((val) => {
  return val < 5
})
// console.log(filt);


//  Array Reduce mtheod = Reduce ek valu return kar ta h

let arr3 = [1,2,4,6,7,8,9]

let red = arr3.reduce((val,val2) =>{
  return val +val2
})

console.log(red);