class Pen {
    String color;
    int quantitiy;

    public void info(){
        System.out.println(this.color);
        System.out.println(this.quantitiy);

    }
    Pen(String color , int quantitiy ){
          this.color = color;
          this.quantitiy = quantitiy;
     }
}

public class non_constructor {
    public static void main(String args[]) {
        Pen pe1 = new Pen("blue" , 23);

        pe1.info();

    }
}