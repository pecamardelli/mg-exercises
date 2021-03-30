package Simplification.Exercise_2;

public class UomBag extends UnitOfMeasure {
    public float CalculatePrice(int Quantity) {
        double total = Quantity * .2;
        double setsOfFour = Quantity / 4;
        total -= setsOfFour * .15; // Discount on groups of 4 items
        return (float) total;
    }
}
