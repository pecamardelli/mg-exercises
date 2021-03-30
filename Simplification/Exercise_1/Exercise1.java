package Simplification.Exercise_1;

/**
 * Making the method more readable.
 */

public class Exercise1 {
    // Constructor and properties here.
    public double GetPaymentAmount() {
        // Let's assume that every method called in each case is defined
        // and returns a double. Aditionally every var checked in the conditionals
        // is also defined somewhere.
        if (_isDead) return GetDeadAmount();
        if (_isSeparated) return GetSeparatedAmount();
        if (_isRetired) return GetRetiredAmount();
        
        return GetNormalPayAmount();
    }
    // Method definitions.
}