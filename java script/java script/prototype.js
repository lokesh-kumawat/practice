const employe = {
    calTax() {
        console.log("tax rate is 10%");
    },
};

const karanArjun ={
    salary : 50000,
};

const ram ={
    fullName : "Lokesh kumawat",
};

const arun = {
    fullName : "arun kumawat",
    salary : 56333,
    calTax (){
        console.log("Tax is 20%");
    },
};


karanArjun.__proto__ = employe;
ram.__proto__ = employe;
arun.__proto__ = employe;