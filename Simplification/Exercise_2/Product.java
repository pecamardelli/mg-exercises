package Simplification.Exercise_2;

public class Product {
    // Constructor and properties here.
    public UnitOfMeasure uom = new UomNull();
    public int Quantity = 100;

    public float Price() {
        return uom.CalculatePrice(Quantity);
    }
    // Setter and getter of uom here.
}