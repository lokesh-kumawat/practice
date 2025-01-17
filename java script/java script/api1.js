// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // console.log('async task is compelete');
//         // resolve();
//     }, 1000);
// }).then(() => {
//     console.log("promise consumed");
// });


// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // console.log('async function 2');
//         // resolve()
//     }, 1000);
// }).then(() => {
//     console.log("promise consumed");
// });


// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({ uerName: "lokesh kumawat,", email: "lokseh4543@gmail.com" })
//     }, 1000);
// });

// promiseThree.then(function (user) {
//     //   console.log(user);
// })

// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false;
//         if (!error) {
//             resolve({ userName: "lokesh kumawat", age: 34 });
//         } else {
//             reject('ERROR :Something went Worng');
//         }
//     }, 1000);
// })

// promiseFour.then((user) => {
//     console.log(user);
//     return user.uerName;
// }).then((uerName) => {
//     console.log(userName);
// })


// const promisefive = new Promise((resolve, reject) =>{
//   setTimeout(() =>{
//     let error = true;
//     if(!error){
//         resolve({userName: "java script", age: 34})
//     }else{
//         reject('ERROR : JS went wrong');
//     }
//   },1000)
// })

// async function consumePromiseFive (){
//     const respose = await promisefive
//     console.log(respose);
// }

// consumePromiseFive();



// async function getAllData() {
//     try {
//         const response = await fetch('https://randomuser.me/api/');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getAllData();


fetch('https://randomuser.me/api/')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });