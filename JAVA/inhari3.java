class Shape{
    int height;
    int width;

    public void info(){
    //   System.out.println(this.height);
    //     System.out.println(this.width);

        System.out.println(height*width);
    }
}
 class Rectangle extends Shape{
    // int hight;
    // int width;

    // public void info(){
        // System.out.println(this.hight);
        // System.out.println(this.width);

        // System.out.println(hight*width);
        // public int info(){
        //     return hight* width;
        // }
    // }
 }

public class inhari3 {
    public static void main(String args[]){
        Rectangle first = new Rectangle();
          first.height =12;
          first.width =2;

          first.info();
    
    }
}
