// let se bhe kar sak te hn
const student = {
    fullName: "aayan kumawat",
    age: 21,
    cgpa: 8.2,
    isPass: true,
};

// particular key access kar na agar Object me se to 
console.log(student.age);
console.log(student["cgpa"]);
// console.log(student.cgpa);

// if vlau increass kar ne ho object me
student ["age"] = student["age"] +1;
console.log (student["age"]);

student["fullName"] ="rahul kumar";
console.log (student["fullName"]);