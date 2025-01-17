class Frute {
    String name, color;
    int quantitiy;

    public void fruteinfo(String name, String color) {
        System.out.println(name);
        System.out.println(color);
    }

    public void fruteinfo(int quantitiy) {
        System.out.println(quantitiy);
    }

    public void fruteinfo(String name, String color, int quantitiy) {
        System.out.println(name+ " " +color+ " " +quantitiy);
    }
}

public class Polymorphism {
    public static void main(String args[]) {
        Frute frute1 = new Frute();
        frute1.name = "APPLE";
        frute1.color = "RED";
        frute1.quantitiy = 12;

        frute1.fruteinfo(frute1.name, frute1.color, frute1.quantitiy);
    }
}