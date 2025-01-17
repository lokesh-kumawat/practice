class Student {   // Class name start with capital letrer and Function name start with small 
    String name;  //letter
    int age;

    public void info() {
        System.out.println(this.name);
        System.out.println(this.age);
    }
}

public class oops {
    public static void main(String args[]) {
        Student s1 = new Student();
        s1.name = "lokesh";
        s1.age = 21;
        // System.out.println(name);
        // System.out.println(age);
        s1.info();
    }
}
