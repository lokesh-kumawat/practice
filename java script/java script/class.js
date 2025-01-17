class ToyataCar {
    start(){
        console.log("start");
    }
    
    stop(){
        console.log("stop");
    }

    setBrand(brand){
        this.brand = brand;
    }
};

let fortuner = new ToyataCar();
fortuner.setBrand("fortuner")
let lexus = new ToyataCar();