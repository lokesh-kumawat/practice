class Shape{
    String color;

    public void detail(){
        System.out.println(this.color);
    }
}

class Triangle extends Shape{

}

public class Inharitance {
    public static void main(String args[]){
     Triangle t1 = new Triangle();
     t1.color = "Red";

        // System.out.println(t1.color);
        t1.detail();
    }
}
