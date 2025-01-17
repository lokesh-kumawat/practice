class car {
    String brand;
    int model;
    String color;

    public void printInfo() {
        System.out.println("car brand is");
        System.out.println(this.brand);
        System.out.println("car model is");
        System.out.println(this.model);
        System.out.println("car color is ");
        System.out.println(this.color);
    }
}

public class oops2 {
    public static void main(String args[]) {

        car detail = new car();
        detail.brand = "Maruti";
        detail.model = 2021;
        detail.color = "red";

        detail.printInfo();
    }
}
