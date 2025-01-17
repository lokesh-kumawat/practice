class Parent{
String name;

 public void info(){
    System.out.println(this.name);
 }
}

class Child extends Parent{

}

public class inharitance2 {
    public static void main(String args[]){
        Child s1 = new Child();
        s1.name = "big";

        s1.info();
    }
}
