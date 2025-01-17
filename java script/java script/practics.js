let Data = "secret information";
 
class user{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("data =" , Data);
    }
}

let student1 = new user("lokesh kumawat", "abc@gmail.com");
let student2 = new user("amit kumawat", "ajg@gmail.com");