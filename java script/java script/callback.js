// jab ek function me dusra function as an argument pass kar te hn to usa callback kha te hn

/* function sum(a,b){
    console.log(a+b);
}

function calculate (a,b, sumCallback){
   sumCallback(a, b);  
}
*/

/* calculate(1,3,sum);

const hello = () =>{
   console.log("Hello");
};

setTimeout(hello , 3000); //1s = 1000ms

*/

/* function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data =", dataId);

        if (getNextData) {
            getNextData();
        }
    }, 2000);
}

// callback hell 
// callback ke ander callback ko call kar na 
getData(1, () => {
    console.log("getting data2......");
    getData(2, () => {
        console.log("getting data3.....");
        getData(3, () => {
            console.log("getting data4.....");
            getData(4);
        });
    });
});

*/

// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data =", dataId);
//             rasolve("sucess");
//             if (getNextData) {
//                 getNextData();
//             }
//         },5000);
//     });
// }

// getData(123);


// async function
 async function hello(){
    console.log("Hello");
  }