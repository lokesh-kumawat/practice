// function User(username, loginCount, isLoggin){
//     this.username = username
//     this.loginCount = loginCount
//     this.isLoggin = isLoggin

//     return this;
// }

// const userOne = new User("hitesh", 34 , true);

// console.log(userOne);


const newhero = ['hulk','spider'];
// console.log(newhero);

function multipelBY5(num){
    return num * 5;
}

// console.log(multipelBY5(3));
// console.log(multipelBY5.pow);
// console.log(multipelBY5.prototype);

function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
}

// createUser.prototype.score

const chai = createUser('chai',34);
// const 


