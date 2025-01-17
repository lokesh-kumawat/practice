// Ques = 1
/* create a function using the function keyword the takes a string as an argument  & return the number Of
 vowels in the string.*/

/* function vowelsCont(str) {
    let count =0;
    for (let char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
       
    }
    console.log(count);
}  */

// same Progrm using Arrow Function

const countVowls = (str) => {
    let count = 0;
    for (let char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    console.log(count);
}