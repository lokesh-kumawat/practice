class user {
    constructor(email,password){
        this.email = email
        this.password = password
    }
    get email(){
        return this.password.toUpperCase()
    }
    set email(val){
      this._email = val
    }
}

const detail = new user('lokesh234@.com','23wsa')
console.log(detail.email);

