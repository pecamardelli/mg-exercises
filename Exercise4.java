/**
 * Making the method more readable.
 */

public class Exercise4 {
    // Some constructor and properties here.
    public double GetPaymentAmount() {
        // Let's assume that every method called in each case is defined
        // and returns a double and every var checked in the conditionals
        // is also defined someplace.
        if (_isDead) return GetDeadAmount();
        if (_isSeparated) return GetSeparatedAmount();
        if (_isRetired) return GetRetiredAmount();
        
        return GetNormalPayAmount();
    }

    // Method definitions.
}