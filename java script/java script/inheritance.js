// class parent {
//     hell0(){
//         console.log("Hello?");
//     }
// }

// class child extends parent{

// }
// let obj = new child();


class Person {
    eat() {
        console.log("Eat");
    }
    sleep() {
        console.log("sleep");
    }
};

class Enginner extends Person {
    work() {
        console.log(" peoblem solving ");
    }
};

class Doctor extends Person {
    work() {
        console.log("treat patients");
    }
}

let lokesh = new Enginner();
let amit = new Doctor();