package Simplification.Exercise_3;

public class Employee {
    // Setting to an engineer by default.
    EmployeeType _type;

    public double MonthlySalary {get; set;}
    public double Commission {get; set;}
    public double Bonus {get; set;}

    public Employee(EmployeeType type) {
        _type = type;
    };

    public double GetTotalSalary() {
        return _type.GetPaymentAmount();
    }

    // Setter and getter of employee type
}
