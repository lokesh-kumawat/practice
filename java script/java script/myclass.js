// class user {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     changeUserName() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new user('lokesh', 'lokesh@fbb.com', '1234')
// console.log(chai.changeUserName());

// second way / behind the scene


function user(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

user.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const detail = new user('aman', 'amanfbb@.com','w343')
console.log(detail.changeUserName());