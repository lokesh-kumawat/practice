class Student{
    String name;
    int age;
    double parcentage;

    public void printInfo(String name){
        System.out.println(name);
    }

    public void printInfo(int age){
        System.out.println(age);
    }

    public void printInfo(double parcentage){
        System.out.println(parcentage);
    }

    public void printInfo(String name, int age, double parcentage){
       System.out.println(name +" "+ age +" "+ parcentage);
    }
}

public class Poly {
    public static void main (String args[]){
     Student firStudent = new Student();

     firStudent.name = "Amar";
     firStudent.age = 23;
     firStudent.parcentage =78.45;

     firStudent.printInfo(firStudent.name, firStudent.age, firStudent.parcentage);
    }
}
