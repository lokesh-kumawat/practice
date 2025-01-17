class Bus {
    String name;
    int number;
    double price;

    public void info(String name) {
        System.out.println(name);

    }

    public void info(int number) {
        System.out.println(number);
    }

    public void info(double price) {
        System.out.println(price);
    }

    public void info(String name, int number, double price) {
        System.out.println(name + " " + number + " " + price);
    }

}

public class non_poly {
    public static void main(String args[]) {
        Bus bus1 = new Bus();
        bus1.name = "RED BUS";
        bus1.number = 3500;
        bus1.price = 35622.56;

        bus1.info(bus1.name, bus1.number, bus1.price);
    }
}
