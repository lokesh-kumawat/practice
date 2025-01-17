// class user {
//     constructor(username) {
//         this.username = username
//     }
//     logme() {
//         console.log(`USERNAMW id ${this.username}`);
//     }
// }

// class teacher extends user{
//     constructor(username, email, password){
//         super(username)
//         this.email = email
//         this.password = password
//     }
//     addCourse(){
//         console.log(`A new courser was assed by ${this.username}`);
//     }
// }

// const detail = new teacher('sardar', 'sardar233@.com','34556')
// detail.addCourse();

// const detail2 = new user('kamna')
// detail2.logme();

// **************static properties**************

class user {
    constructor(username){
        this.username = username
    }
    logme(){
        console.log(`username ${this.username}`);
    }

    createId(){
        return '2342'
    }
}

const lokesh = new user('lokesh')
console.log(lokesh.createId());