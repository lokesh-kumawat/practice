// for in Loop = for in loop keys return kar ta ha kesi bhe Object ke. yha object or array ke lye use ho ta hn

let student ={
    name : "ayan kumawat",
    age : 45,
    cgpa : 6.9,
    ispass : true,
};

// forinloop
for(let i in student){
    console.log("key =",i); // object ke key return kar ta hn
}

// for(let i in student){
//     console.log("key =",i, "vlau =" ,student[i]);
// }
