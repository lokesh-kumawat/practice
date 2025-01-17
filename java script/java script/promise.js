function asyncFunction(getdata) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data",getdata);
            resolve("success");
            // reject("occur some error");
        }, 2000);
    });
}

let p1 = asyncFunction(1);
p1.then((res) => {
    console.log(res);
    let p2 = asyncFunction(2);
    p2.then((res) => {
        console.log(res);
    })
});



// second


// const getPromise = () =>{
//     return new Promise((resolve,reject) =>{
//         console.log("i am a promise");
//         // resolve("200");
//         reject("error");
//     });
// }; 

// let promise = getPromise();
// .then for resolve
// promise.then(() => {
//   console.log("promise is fullfied");
// });

// .catch for reject
// promise.catch(()=>{
//     console.log("rejected");
// })



// first


// function getdata(dataId,getNextdata){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() => {
//             console.log("data",dataId);
//             resolve("success");
//             // reject("some error occur");
//             if(getNextdata){
//                 getNextdata();
//             }
//         },2000);
//     });
// }

