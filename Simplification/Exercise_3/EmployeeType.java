package Simplification.Exercise_3;

/**
 * We're implementing the strategy pattern here.
 * 
 * This interface defines only one method that will determine
 * the total salary of an employee based on its type.
 * 
 * The employee object must be provided in order to calculate the right
 * amount of payment.
 * 
 */

public interface EmployeeType {
    public double GetPaymentAmount();
}
