// array method
// Push() = add to end
let vegitables = ["tomato", "potato", "litchi", "apple"];
console.log(vegitables);
vegitables.push("chips");
console.log(vegitables);

// pop() = delete from end & return
vegitables.pop();
console.log(vegitables);

// toString() = convert array to string
console.log(vegitables.toString());

// concat() =joins multiple arrays 
let number = [56, 45, 34, 3, 656, 78, 98];
let joint = vegitables.concat(number);
console.log(joint);

// unshift = add to start()
console.log(number);
number.unshift(100);
console.log(number);

// shift() = delet from start
number.shift();
console.log(number);

// Slice()= return a piece of the Array. change in original array
let names = ["lokesh", "aman", "rahul", "banti", "amit"];
console.log(names);
console.log(names.slice(1,3));

// splice() = change in original arry(add, remove, replace)
let arr =[1,2,3,4,5,6,7,8,9];
console.log(arr);
arr.splice(2,3,456,600);
console.log(arr);

// question

let que =["Bloomberg", "Microsoft","Uber", "Google", "Ibm","Netflix"];
// Remove the first company from the array
que.shift();
console.log(que);
// Remove Uber & Add ola in its place
que.splice(1,1,"Ola");
console.log(que);
// Add Amazon at the end
que.push("Amazon");
console.log(que);
