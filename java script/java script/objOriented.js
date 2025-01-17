const obj = {
    userName :'hitesh',
    password : 234,

    getUserdetail:function(){
    //   console.log('get data from database');
      console.log(`username ${this.userName}`);
    }
}

// console.log(obj.userName);
// console.log(obj.getUserdetail());


// *******constructor Function********

function user (userName, loginCount, isLoggedIn){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // return this
}

 const userOne =  new user('lokesh', 32, true)
 console.log(userOne)