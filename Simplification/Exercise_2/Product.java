package Simplification.Exercise_2;

/**
 * By default, the product class will instantiate with a null uom, that means
 * 0 will be returned as price. With this approach many units of measure can
 * be created and compose them with a product class.
 */

public class Product {
    // Constructor and properties here.
    public UnitOfMeasure uom = new UomNull();
    public int Quantity = 100;

    public float Price() {
        return uom.CalculatePrice(Quantity);
    }
    // Setter and getter of uom here.
}