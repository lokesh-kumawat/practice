const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // console.log('async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    // console.log('promise consumed');
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ uerName: 'lokesh', email: 'lokesh@gmail.com' })
    }, 1000)
})

promiseThree.then(function (user) {
    //   console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ uerName: 'amit', password: '234' })
        } else {
            reject('ERROR : Error occur')
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.uerName
})
 .then((uerName) => {
    console.log(uerName);
})
.catch(function (error) {
    console.log(error);
})


const promiseFive = new Promise (function(resolve,reject){
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ uerName: 'javascript', password: '234' })
        } else {
            reject('ERROR : Error occur')
        }
    }, 1000)
})

async function consumePromiseFive (){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()



