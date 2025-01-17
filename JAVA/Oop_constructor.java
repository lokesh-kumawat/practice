class Student {
    String name;
    int age;

    public void info() {
        System.out.println(this.name);
        System.out.println(this.age);
    }
    // non parametarige constructor
    // Student(){
    // System.out.println("Constructor Call");
    // }

    // parametarige caonstructor
    Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

public class Oop_constructor {
    public static void main(String args[]) {
        // Student detail = new Student();// student() is a constructor
        // detail.name = "aman";
        // detail.age = 23;
        // detail.info();

        Student first = new Student("lokesh", 20);
        first.info();

    }
}
