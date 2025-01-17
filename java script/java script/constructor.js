class person {
    constructor() {
        this.species = "homo sapiens";
    }

    eat() {
        console.log("eat");
    }
}

class enginner extends person {
    constructor(Branch) {
        super();
        this.branch = Branch;
    }
    work() {
        console.log("problem solving");
    }
}

let obj1 = new person();
let enginner1 = new enginner("computer enginner");
